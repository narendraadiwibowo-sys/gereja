import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import Header from "./Header";
import "./globals.css";

const head = Lora({ subsets: ["latin"], variable: "--font-head" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: `${site.nama} - Jl. Bhayangkara`, template: `%s | ${site.nama}` },
  description: `Website resmi ${site.nama}: jadwal ibadah, warta jemaat mingguan, renungan harian AI, dan pusat pelayanan jemaat di Purwokerto.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${head.variable} ${body.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />

        <main>{children}</main>

        <footer>
          <div className="wrap">
            <div>
              <b style={{ color: "#ffffff", fontSize: "1.1rem" }}>{site.nama}</b>
              <p style={{ margin: "6px 0 0", color: "#8da69d", fontSize: "0.9rem" }}>{site.alamat}</p>
            </div>
            <div>
              <p style={{ margin: "8px 0 0" }}>© {new Date().getFullYear()} {site.nama}. Segala kemuliaan bagi Allah.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
