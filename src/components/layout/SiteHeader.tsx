"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm h-14"
          : "bg-transparent h-20")
      }
    >
      <nav className="max-w-6xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo en vez de PrimeDoor */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/gallery/logo.png"
            alt="PrimeDoor Logo"
            width={168}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-base">
          <Link href="#services" className="hover:opacity-80">Services</Link>
          <Link href="#gallery" className="hover:opacity-80">Gallery</Link>
          <Link href="#process" className="hover:opacity-80">Process</Link>
          <Link href="#models" className="hover:opacity-80">Models & Sizes</Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-lg px-4 py-2 bg-black text-white"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden inline-flex items-center rounded-md border px-3 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-3 grid gap-2 text-sm">
            <Link href="#services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="#gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <Link href="#process" onClick={() => setOpen(false)}>Process</Link>
            <Link href="#models" onClick={() => setOpen(false)}>Models & Sizes</Link>
            <Link
              href="#contact"
              className="inline-flex w-max rounded-lg px-4 py-2 bg-black text-white mt-1"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
