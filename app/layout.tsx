import type { Metadata } from "next";
import Link from "next/link";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const head = Lora({ subsets: ["latin"], variable: "--font-head" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: `${site.nama} - Jl. Bhayangkara`, template: `%s | ${site.nama}` },
  description: `Website resmi ${site.nama}: jadwal ibadah, warta jemaat mingguan, renungan harian AI, dan pusat pelayanan jemaat di Purwokerto.`,
};

const menu = [
  ["/", "Beranda"],
  ["/warta", "Warta & Agenda"],
  ["/renungan", "Renungan Harian"],
  ["/layanan", "Layanan Jemaat"],
  ["/persembahan", "Persembahan"],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${head.variable} ${body.variable}`}>
      <body>
        <header className="top">
          <div className="wrap">
            <Link href="/" className="logo-text">
              <span>{site.nama}</span>
              <span className="logo-badge">Purwokerto</span>
            </Link>
            <nav aria-label="Menu utama">
              {menu.map(([href, label]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="wrap">
            <div>
              <b style={{ color: "#ffffff", fontSize: "1.1rem" }}>{site.nama}</b>
              <p style={{ margin: "6px 0 0", color: "#8da69d", fontSize: "0.9rem" }}>{site.alamat}</p>
            </div>
            <div>
              <p style={{ margin: 0 }}>© {new Date().getFullYear()} {site.nama}. Segala kemuliaan bagi Allah.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
