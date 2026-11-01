import { site } from "@/lib/site";

export const metadata = { title: "Persembahan & Dokumentasi Kegiatan" };

export default function Persembahan() {
  const { channelId, url } = site.youtube;

  return (
    <div className="wrap">
      <section style={{ borderTop: 0 }}>
        <div className="section-head">
          <span className="hero-tag">Dukungan Pelayanan & Galeri</span>
          <h1>Persembahan & Dokumentasi</h1>
          <p>Fasilitas donasi/persembahan digital jemaat serta dokumentasi kegiatan gereja secara daring.</p>
        </div>

        {/* Kotak Persembahan */}
        <div className="grid2" style={{ marginBottom: "40px" }}>
          <div className="card" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "12px" }}>📱 QRIS Persembahan Digital</h2>
            <p className="muted" style={{ fontSize: "0.9rem", marginBottom: "20px" }}>
              Mendukung transaksi dari semua aplikasi perbankan & dompet digital (GoPay, OVO, Dana, ShopeePay, BCA Mobile, dll).
            </p>
            <div style={{ background: "#ffffff", padding: "16px", borderRadius: "12px", border: "1px solid var(--border)", display: "inline-block", boxShadow: "var(--shadow-sm)" }}>
              <img
                src="/qris.png"
                alt="Kode QRIS Persembahan GKJ Purwokerto"
                width={260}
                height={260}
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p className="muted" style={{ fontSize: "0.82rem", marginTop: "12px" }}>
              Pindai QR di atas menggunakan aplikasi mobile banking Anda.
            </p>
          </div>

          <div className="card">
            <h2 style={{ fontSize: "1.3rem", marginBottom: "12px" }}>🏦 Transfer Rekening Bank</h2>
            <p className="muted" style={{ fontSize: "0.9rem", marginBottom: "20px" }}>
              Bagi jemaat yang hendak mentransfer persembahan bulanan, persepuluhan, atau aksi diakonia melalui teller atau ATM:
            </p>
            <ul className="list">
              {site.rekening.map((r) => (
                <li key={r.nomor}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "1.05rem" }}>{r.bank}</span>
                    <span className="logo-badge">Kas Gereja</span>
                  </div>
                  <div style={{ fontSize: "1.15rem", fontFamily: "monospace", letterSpacing: "0.05em", margin: "6px 0", fontWeight: 600 }}>
                    {r.nomor}
                  </div>
                  <span className="muted" style={{ fontSize: "0.9rem" }}>a.n. {r.atasNama}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Live Streaming YouTube */}
        <div className="card" style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
            <div>
              <h2 style={{ fontSize: "1.3rem", margin: 0 }}>🔴 Ibadah Live Streaming</h2>
              <p className="muted" style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>
                Kanal YouTube resmi GKJ Purwokerto untuk ibadah daring dan rekaman khotbah
              </p>
            </div>
            <a className="btn" href={url} target="_blank" rel="noopener noreferrer">
              Buka Kanal YouTube
            </a>
          </div>

          {channelId ? (
            <div style={{ aspectRatio: "16/9", width: "100%", borderRadius: "var(--radius-sm)", overflow: "hidden", background: "#000" }}>
              <iframe
                title="Live streaming YouTube GKJ Purwokerto"
                style={{ width: "100%", height: "100%", border: 0 }}
                src={`https://www.youtube.com/embed/live_stream?channel=${channelId}`}
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <p className="muted">Siaran langsung dapat diakses di kanal resmi YouTube.</p>
          )}
        </div>

        {/* Instagram */}
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <div>
              <h2 style={{ fontSize: "1.3rem", margin: 0 }}>📸 Dokumentasi & Instagram</h2>
              <p className="muted" style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>
                Ikuti foto dan video aktivitas jemaat serta pemuda (Kompa) di Instagram
              </p>
            </div>
            {site.instagram.username && (
              <a
                className="btn alt"
                href={`https://instagram.com/${site.instagram.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{site.instagram.username}
              </a>
            )}
          </div>

          {site.instagram.widgetUrl ? (
            <iframe
              title="Feed Instagram GKJ Purwokerto"
              src={site.instagram.widgetUrl}
              loading="lazy"
              style={{ width: "100%", height: 500, border: 0, borderRadius: "var(--radius-sm)" }}
            />
          ) : (
            <div style={{ background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-sm)", textAlign: "center" }}>
              <p className="muted" style={{ margin: 0 }}>
                Kunjungi Instagram resmi kami di <a href={`https://instagram.com/${site.instagram.username}`} target="_blank" rel="noopener noreferrer"><b>@{site.instagram.username}</b></a> untuk dokumentasi foto kegiatan terkini.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
