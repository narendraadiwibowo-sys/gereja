import { kegiatan, warta } from "@/lib/site";
import { tgl } from "@/lib/format";

export const metadata = { title: "Warta & Agenda Kegiatan" };

export default function Warta() {
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
  const akan = kegiatan.filter((k) => k.tanggal >= today).sort((a, b) => a.tanggal.localeCompare(b.tanggal));

  return (
    <div className="wrap">
      <section style={{ borderTop: 0 }}>
        <div className="section-head">
          <span className="hero-tag">Informasi & Pengumuman</span>
          <h1>Warta & Kalender Kegiatan</h1>
          <p>Agenda persekutuan kepanitiaan dan unduhan warta jemaat mingguan GKJ Purwokerto</p>
        </div>

        <div className="grid2">
          {/* Agenda Kegiatan */}
          <div className="card">
            <h2 style={{ fontSize: "1.3rem", display: "flex", alignItems: "center", gap: "8px" }}>
              📅 Agenda & Kegiatan Terdekat
            </h2>
            {akan.length === 0 ? (
              <p className="muted" style={{ marginTop: "16px" }}>Belum ada kegiatan terjadwal dalam waktu dekat.</p>
            ) : (
              <ul className="list">
                {akan.map((k) => (
                  <li key={k.judul + k.tanggal}>
                    <b style={{ fontSize: "1.05rem" }}>{k.judul}</b>
                    <div style={{ marginTop: "6px", display: "flex", gap: "12px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      <span>🗓️ {tgl(k.tanggal)}</span>
                      <span>📍 {k.tempat}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Unduh Warta Mingguan */}
          <div className="card">
            <h2 style={{ fontSize: "1.3rem", display: "flex", alignItems: "center", gap: "8px" }}>
              📑 Warta Jemaat Mingguan (PDF)
            </h2>
            <p className="muted" style={{ fontSize: "0.9rem", margin: "8px 0 16px" }}>
              Unduh berkas warta jemaat untuk membaca laporan keuangan, pokok doa, dan susunan liturgi ibadah.
            </p>
            <ul className="list">
              {warta.map((w) => (
                <li key={w.file} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                  <div>
                    <b>{w.judul}</b>
                    <p className="muted" style={{ margin: "2px 0 0", fontSize: "0.85rem" }}>{tgl(w.tanggal)}</p>
                  </div>
                  <a className="btn alt" style={{ padding: "8px 16px", fontSize: "0.88rem" }} href={w.file} download>
                    📥 Unduh PDF
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
