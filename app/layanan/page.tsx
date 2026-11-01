import { layanan, site } from "@/lib/site";

export const metadata = { title: "Pusat Layanan Jemaat" };

export default function Layanan() {
  return (
    <div className="wrap">
      <section style={{ borderTop: 0 }}>
        <div className="section-head">
          <span className="hero-tag">Administrasi & Pelayanan Kasih</span>
          <h1>Pusat Pelayanan Jemaat</h1>
          <p>Informasi persyaratan dan prosedur pengajuan layanan sakramen, pernikahan, dan kedukaan di GKJ Purwokerto.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {layanan.map((l) => (
            <article key={l.id} id={l.id} className="card card-highlight">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "1.4rem", margin: 0 }}>{l.judul}</h2>
                <a
                  className="btn whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://wa.me/${site.waPengurus}?text=${encodeURIComponent(`Shalom Pengurus GKJ Purwokerto, saya ingin menanyakan informasi dan formulir terkait layanan ${l.judul}.`)}`}
                >
                  💬 Hubungi Majelis via WhatsApp
                </a>
              </div>

              <div className="grid2">
                <div style={{ background: "var(--bg-subtle)", padding: "20px", borderRadius: "var(--radius-sm)" }}>
                  <h3 style={{ fontSize: "1.05rem", color: "var(--primary)", marginTop: 0 }}>📋 Syarat Berkas</h3>
                  <ul style={{ paddingLeft: "18px", margin: "10px 0 0", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                    {l.syarat.map((s) => (
                      <li key={s} style={{ marginBottom: "6px" }}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: "var(--bg-subtle)", padding: "20px", borderRadius: "var(--radius-sm)" }}>
                  <h3 style={{ fontSize: "1.05rem", color: "var(--primary)", marginTop: 0 }}>📍 Tata Cara & Alur Prosedur</h3>
                  <ol style={{ paddingLeft: "18px", margin: "10px 0 0", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                    {l.prosedur.map((s) => (
                      <li key={s} style={{ marginBottom: "6px" }}>{s}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
