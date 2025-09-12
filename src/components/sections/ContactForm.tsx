// src/app/sections/ContactForm.tsx
"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  city: string;
  phone: string;
  notes: string;
};

const NOTES_MAX = 200;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    city: "",
    phone: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setStatus("sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      setForm({ name: "", email: "", city: "", phone: "", notes: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="p-6 rounded-xl border bg-white">
      <div className="grid gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            className="mt-1 w-full rounded-md border px-3 py-2"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 w-full rounded-md border px-3 py-2"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            id="city"
            name="city"
            autoComplete="address-level2"
            required
            className="mt-1 w-full rounded-md border px-3 py-2"
            value={form.city}
            onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="mt-1 w-full rounded-md border px-3 py-2"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
        </div>

        {/* Notes */}
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="notes" className="block text-sm font-medium">
              Notes
            </label>
            <span id="notes-counter" className="text-xs text-gray-500">
              {form.notes.length}/{NOTES_MAX}
            </span>
          </div>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            maxLength={NOTES_MAX}
            aria-describedby="notes-counter"
            placeholder="Short notes (e.g., preferred time, access, special details)"
            className="mt-1 w-full rounded-md border px-3 py-2 resize-none"
            value={form.notes}
            onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-white"
        >
          {status === "sending" ? "Sending..." : "Request Quote"}
        </button>

        {status === "ok" && (
          <p className="text-green-600 text-sm">
            ✅ Thanks! PrimeDoor will contact you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
