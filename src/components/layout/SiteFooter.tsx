export default function SiteFooter() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 grid gap-2 md:flex md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} PrimeDoor. All rights reserved.</p>
        <p>Serving Citrus County and surrounding areas.</p>
      </div>
    </footer>
  );
}
