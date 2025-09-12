"use client";

import Link from "next/link";

export default function ServicesSection() {
  const items = [
    {
      t: "In-Home Measurement & Consultation",
      d: "We verify rough openings, jamb depth, door thickness, and swing (LH/RH), then recommend the right models and hardware.",
    },
    {
      t: "Door Supply (Recognized Brands)",
      d: "Access to the most recognized brands in the market. Hollow-core, solid core MDF, shaker/panel, slabs and prehung.",
    },
    {
      t: "Professional Installation",
      d: "Precise plumb/level/shim, clean reveals, hinge & strike alignment, latch adjustment, and smooth operation for slab or prehung doors.",
    },
    {
      t: "Casing & Trim Replacement",
      d: "Optional new casing, returns, and rosettes with clean caulk lines and a finished look.",
    },
    {
      t: "Hardware Installation & Upgrades",
      d: "Knobs/levers, privacy/passage sets, hinges, magnetic latches, door stops—installed, adjusted, and aligned.",
    },
    {
      t: "Delivery & Haul-Away",
      d: "We deliver materials, remove old units and packaging, protect floors, and leave the work area clean.",
    },
  ];

  const included = [
    "Professional measurement and written quote",
    "Scheduled delivery of materials",
    "Expert installation and adjustments",
    "Jobsite protection and tidy cleanup",
    ];

  const addons = [
    "Painting/priming (doors and casing)",
    "Jamb/frame replacement or widening (non-structural)",
    "Multi-unit & builder packages",
  ];

  return (
    <section id="services" className="scroll-mt-24 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold">Services</h2>
        <p className="text-gray-600 mt-2">
          Interior door sales & professional installation—turnkey from in-home measurement to final walkthrough.
          We supply recognized brands so your doors look and operate perfectly.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((c) => (
            <div key={c.t} className="p-5 rounded-lg border bg-white">
              <h3 className="font-medium">{c.t}</h3>
              <p className="text-sm text-gray-600 mt-1">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="p-5 rounded-lg border bg-white">
            <h3 className="font-medium">What’s included</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
              {included.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-lg border bg-white">
            <h3 className="font-medium">Optional add-ons</h3>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
              {addons.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-medium">Service area:</span> Citrus County and surrounding communities.
          </p>
          <p>
            <span className="font-medium">Typical lead times:</span> In-stock styles scheduled quickly; special orders depend on brand and model.
          </p>
        </div>

        <div className="mt-6">
          <Link href="#contact" className="inline-flex px-5 py-3 rounded-lg bg-black text-white">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
