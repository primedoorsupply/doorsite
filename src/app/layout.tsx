import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata = {
  title: "PrimeDoor Home — Interior Door Sales & Installation",
  description: "Measurement, supply and installation of interior doors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900">
        <SiteHeader />
        {/* Spacer to avoid content under the fixed header */}
        <div aria-hidden className="h-20 md:h-24" />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
