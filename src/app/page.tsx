import Image from "next/image";
import Link from "next/link";
import ServicesSection from "@/components/sections/Services";
import ContactForm from "@/components/sections/ContactForm";
import Script from "next/script";

/* URL pública del sitio para el schema (usa env o fallback) */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://primedoorsupply.com";

/* ==== ICONOS INLINE (sin dependencias) ==== */
function RulerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9v2M9 9v3M12 9v2M15 9v3M18 9v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DoorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="7" y="3" width="10" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="12" r="0.9" fill="currentColor" />
    </svg>
  );
}

function DrillIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 9h10a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9l-2 2H4v-2H3V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 11h5l3-1v4l-3-1h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="5" y="10" width="3" height="4" fill="currentColor" />
    </svg>
  );
}

function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3l1.8 3.8L18 8.5l-3.8 1.8L12 14l-2.2-3.7L6 8.5l4.2-.7L12 3z" fill="currentColor" />
      <path d="M19 13l1 2.2 2.2 1-2.2 1-1 2.2-1-2.2-2.2-1 2.2-1 1-2.2zM5 13l.8 1.8 1.8.8-1.8.8L5 18l-.8-1.8L2.5 16l1.7-.8L5 13z" fill="currentColor" />
    </svg>
  );
}

export default function HomePage() {
  /* JSON-LD LocalBusiness + Services */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "PrimeDoor Supply",
    url: siteUrl,
    telephone: "+1-352-501-8150",
    areaServed: [
      "Inverness FL",
      "Citrus County FL",
      "Hernando FL",
      "Lecanto FL",
      "Crystal River FL",
      "Homosassa FL",
      "The Villages FL",
      "Ocala FL",
    ],
    priceRange: "$$",
    image: `${siteUrl}/gallery/g9.jpg`,
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Door Installation",
          areaServed: "Citrus County, FL",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Door Supply (Slab/Prehung)",
          areaServed: "Citrus County, FL",
        },
      },
    ],
    sameAs: [] as string[], // agrega perfiles cuando los tengas (Facebook, Instagram, etc.)
  };

  return (
    <main id="home">
      {/* JSON-LD */}
      <Script
        id="ld-local"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        id="hero"
        className="scroll-mt-24 px-6 py-24 md:py-32"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,247,250,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Interior Door Sales & Installation
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              We provide end-to-end service for interior doors: precise on-site measurement,
              material supply (slab or prehung), professional installation, casing/trim touch-ups,
              hardware fitting (hinges, locksets, handles), and clean disposal of old doors. Every
              job includes a workmanship warranty and clear timelines so you know exactly what will
              happen and when. Fast, clean, and reliable for homes, rentals, and remodels.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <Link href="#services" className="inline-flex px-5 py-3 rounded-lg border">
                Services
              </Link>
              <Link href="#gallery" className="inline-flex px-5 py-3 rounded-lg border">
                Gallery
              </Link>
              <Link href="#process" className="inline-flex px-5 py-3 rounded-lg border">
                Our Process
              </Link>
              <Link href="#models" className="inline-flex px-5 py-3 rounded-lg border">
                Models &amp; Sizes
              </Link>
              <Link
                href="#contact"
                className="inline-flex px-5 py-3 rounded-lg bg-black text-white"
              >
                Get a Quote
              </Link>
              <a href="tel:+13525018150" className="inline-flex px-5 py-3 rounded-lg border">
                Call (352) 501-8150
              </a>
            </div>
          </div>

          {/* Hero image (g9.jpg a la derecha) */}
          <div className="relative rounded-2xl shadow-md overflow-hidden bg-gray-100 aspect-[1/1] md:aspect-[1/1]">
            <Image
              src="/gallery/g9.jpg"
              alt="Interior door installation hero"
              fill
              className="object-contain"
              priority
              sizes="(min-width:768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24 bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Gallery</h2>
          <p className="text-gray-600 mt-2">Recent installs and styles we offer.</p>

          <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="relative aspect-[4/5] rounded-md overflow-hidden bg-white shadow"
              >
                <Image
                  src={`/gallery/g${i}.jpg`}
                  alt={`Interior door install #${i}`}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Our Process</h2>
        </div>

        <div className="max-w-6xl mx-auto mt-8 grid gap-6 md:grid-cols-4">
          {[
            {
              n: "1",
              t: "Measure",
              d: "We verify rough opening, jamb depth, swing (LH/RH), hardware backset, and layout. This prevents surprises on installation day and ensures correct materials.",
              icon: <RulerIcon className="h-5 w-5 text-amber-600" />,
            },
            {
              n: "2",
              t: "Supply",
              d: "We source the right model (flush, MDF, 2/3/5/6-panel), size, jamb, and hardware. We confirm pricing and lead times with you before ordering.",
              icon: <DoorIcon className="h-5 w-5 text-sky-700" />,
            },
            {
              n: "3",
              t: "Install",
              d: "Professional install of slab or prehung: plumb, level, square, and correctly shimmed for smooth close. Trim/casing touch-ups and hardware alignment included.",
              icon: <DrillIcon className="h-5 w-5 text-emerald-700" />,
            },
            {
              n: "4",
              t: "Clean",
              d: "Final QC walkthrough, cleanup, and disposal of old doors. We explain operation and basic maintenance so everything stays perfect.",
              icon: <SparkleIcon className="h-5 w-5 text-amber-500" />,
            },
          ].map((s) => (
            <div key={s.n} className="p-5 rounded-lg border bg-white">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                  {s.n}
                </div>
                {s.icon}
                <div className="font-medium">{s.t}</div>
              </div>
              <div className="text-sm text-gray-600 mt-2 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MODELS & SIZES */}
      <section id="models" className="scroll-mt-24 px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Models & Sizes</h2>
          <p className="text-gray-600 mt-2">
            Popular options and reference sizes. Final fit is confirmed on-site.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Flush Hollow (Slab) */}
            <div className="p-4 rounded-lg border bg-white">
              <div className="relative rounded-md overflow-hidden bg-gray-100 aspect-[2/3] scale-90 mx-auto">
                <Image
                  src="/gallery/g7.jpg"
                  alt="Flush Hollow (Slab)"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width:1024px) 18vw, (min-width:768px) 28vw, 85vw"
                />
              </div>
              <h3 className="mt-3 font-medium">Flush Hollow (Slab)</h3>
              <p className="text-sm text-gray-600">24/28/30/32/36″ × 80″</p>
              <Link className="mt-3 inline-block text-sm underline" href="#contact">
                Request Quote
              </Link>
            </div>

            {/* Solid MDF (Prehung) */}
            <div className="p-4 rounded-lg border bg-white">
              <div className="relative rounded-md overflow-hidden bg-gray-100 aspect-[2/3] scale-90 mx-auto">
                <Image
                  src="/gallery/g2.jpg"
                  alt="Solid MDF (Prehung)"
                  fill
                  className="object-cover object-[50%]"
                  sizes="(min-width:1024px) 18vw, (min-width:768px) 28vw, 85vw"
                />
              </div>
              <h3 className="mt-3 font-medium">Solid MDF (Prehung)</h3>
              <p className="text-sm text-gray-600">28/30/32/36″ × 80″ · Jamb 4-9/16</p>
              <Link className="mt-3 inline-block text-sm underline" href="#contact">
                Request Quote
              </Link>
            </div>

            {/* 2/3/5/6 Panel */}
            <div className="p-4 rounded-lg border bg-white">
              <div className="relative rounded-md overflow-hidden bg-gray-100 aspect-[2/3] scale-90 mx-auto">
                <Image
                  src="/gallery/g10.jpg"
                  alt="2/3/5/6 Panel"
                  fill
                  className="object-cover object-[50%]"
                  sizes="(min-width:1024px) 18vw, (min-width:768px) 28vw, 85vw"
                />
              </div>
              <h3 className="mt-3 font-medium">2/3/5/6 Panel</h3>
              <p className="text-sm text-gray-600">LH/RH • In/Out-swing</p>
              <Link className="mt-3 inline-block text-sm underline" href="#contact">
                Request Quote
              </Link>
            </div>
          </div>

          {/* Botón: descarga directa del catálogo */}
          <div className="mt-6">
            <a
              href="/gallery/interior-door-catalog.pdf"
              download
              className="inline-flex px-5 py-3 rounded-lg bg-black text-white"
            >
              Download Catalog
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold">Get a Quote</h2>
            <p className="text-gray-600 mt-2">
              Tell us your name, email, city, phone, and any short notes. We answer the same business day.
            </p>
            <div className="mt-6 text-sm text-gray-700">
              <p>
                Phone: <a className="underline" href="tel:+13525018150">(352) 501-8150</a>
              </p>
              <p>Hours: Mon–Fri 8:00–5:00</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
