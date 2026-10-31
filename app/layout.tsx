import type { Metadata } from "next";
import Link from "next/link";
import { Lora, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const head = Lora({ subsets: ["latin"], variable: "--font-head" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: `${site.nama}`, template: `%s | ${site.nama}` },
  description: `Website resmi ${site.nama}: jadwal ibadah, warta jemaat, renungan harian, dan layanan jemaat.`,
};

const menu = [["/", "Beranda"], ["/warta", "Warta & Kegiatan"], ["/renungan", "Renungan"], ["/layanan", "Layanan Jemaat"], ["/persembahan", "Persembahan"]];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${head.variable} ${body.variable}`}>
      <body>
        <header className="top"><div className="wrap">
          <b>{site.nama}</b>
          <nav aria-label="Menu utama">{menu.map(([h, l]) => <Link key={h} href={h}>{l}</Link>)}</nav>
        </div></header>
        <main>{children}</main>
        <footer><div className="wrap">© {new Date().getFullYear()} {site.nama} · {site.alamat}</div></footer>
      </body>
    </html>
  );
}
