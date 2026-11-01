import { tgl } from "@/lib/format";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata = { title: "Renungan Harian" };

const SUPABASE_URL = "https://krhykwqwxucdhpuskxjw.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyaHlrd3F3eHVjZGhwdXNreGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0ODc3MjUsImV4cCI6MjEwOTA2MzcyNX0.h1WjCb7GuI03W_mC4VDgNvHHFhDF6-qZ3HUaq4tFO_U";

async function getLatestRenungan() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/renungan?select=*&order=tanggal.desc&limit=1`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;
    const items = await res.json();
    return items && items.length > 0 ? items[0] : null;
  } catch {
    return null;
  }
}

export default async function Renungan() {
  const data = await getLatestRenungan();

  return (
    <div className="wrap">
      <section style={{ borderTop: 0, paddingBottom: "70px" }}>
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 40px" }}>
          <span className="hero-tag">Santapan Rohani Hari Ini</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Renungan Harian Jemaat</h1>
          <p className="muted">
            Menemukan kekuatan, hikmat, dan pengharapan baru dalam Firman Tuhan setiap pagi.
          </p>
        </div>

        {!data ? (
          <div className="card" style={{ textAlign: "center", padding: "50px 20px", maxWidth: "680px", margin: "0 auto" }}>
            <p style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--primary)" }}>
              Renungan hari ini sedang dipersiapkan.
            </p>
            <p className="muted" style={{ maxWidth: "460px", margin: "8px auto 24px" }}>
              Sistem AI Vercel Cron akan otomatis menyajikan renungan segar setiap pukul 04.00 WIB.
            </p>
            <Link href="/" className="btn alt">
              Kembali ke Beranda
            </Link>
          </div>
        ) : (
          <article className="renungan-box" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", marginBottom: "16px" }}>
              <span className="renungan-ayat">{data.ayat}</span>
              <span className="muted" style={{ fontSize: "0.9rem" }}>{tgl(data.tanggal)}</span>
            </div>

            <div className="renungan-isi">
              {data.isi.split(/\n\s*\n/).map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "20px", marginTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
              <span className="muted" style={{ fontSize: "0.85rem" }}>
                ✨ Disusun dengan bantuan AI rohani berdasarkan tema Alkitabiah.
              </span>
              <Link href="/warta" className="btn alt" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                Lihat Agenda Warta
              </Link>
            </div>
          </article>
        )}
      </section>
    </div>
  );
}
