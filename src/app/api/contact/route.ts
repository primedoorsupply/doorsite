// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function jsonErr(msg: string, info?: unknown, status = 500) {
  const isDev = process.env.NODE_ENV !== "production";
  const payload: Record<string, unknown> = { ok: false, error: msg };
  if (isDev && info) payload.info = String(info instanceof Error ? info.message : info);
  return NextResponse.json(payload, { status });
}

// GET opcional: verifica que existan las ENV (no revela valores)
export async function GET() {
  try {
    const keys = ["SMTP_USER", "SMTP_PASS", "EMAIL_FROM", "SALES_TO"] as const;
    const checks = keys.map((k) => ({ key: k, present: !!process.env[k] }));
    return NextResponse.json({ ok: true, checks });
  } catch (e) {
    return jsonErr("ENV_CHECK_FAILED", e);
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, city, phone, notes } = await req.json();

    if (!name || !email) {
      return jsonErr("Missing name or email", undefined, 400);
    }

    const user = requireEnv("SMTP_USER");      // primedoorsupply@gmail.com
    const pass = requireEnv("SMTP_PASS");      // App Password de Gmail (sin espacios)
    const from = requireEnv("EMAIL_FROM");     // "PrimeDoor Quotes <primedoorsupply@gmail.com>"
    const to   = requireEnv("SALES_TO");       // destinatario interno

    // ✅ Gmail por 587 (STARTTLS).  ⚠️ DEV ONLY: tls.rejectUnauthorized: false
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // STARTTLS
      auth: { user, pass },
      tls: {
        minVersion: "TLSv1.2",
        servername: "smtp.gmail.com",
        // ⚠️ DESACTIVA verificación SOLO en desarrollo si tu red hace MITM/antivirus
        rejectUnauthorized: false,
      },
    });

    try {
      await transporter.verify();
    } catch (e) {
      console.error("SMTP verify failed:", e);
      return jsonErr("SMTP_VERIFY_FAILED", e);
    }

    const html = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>City:</strong> ${city || "-"}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Notes:</strong><br/>${(notes ?? "").toString().replace(/\n/g, "<br/>")}</p>
    `;

    try {
      await transporter.sendMail({
        from,            // debe coincidir con SMTP_USER en Gmail
        to,
        subject: `Quote request from ${name}`,
        replyTo: email,
        html,
      });
    } catch (e) {
      console.error("SMTP sendMail failed:", e);
      return jsonErr("SMTP_SEND_FAILED", e);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("General handler error:", e);
    return jsonErr("SERVER_ERROR", e);
  }
}
