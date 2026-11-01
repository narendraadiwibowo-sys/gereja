import Link from "next/link";
import { site, jadwalIbadah } from "@/lib/site";

export default function Beranda() {
  return (
    <div className="wrap">
      {/* Hero Section */}
      <section className="hero" style={{ borderTop: 0 }}>
        <div>
          <span className="hero-tag">Gereja Kristen Jawa Purwokerto</span>
          <h1>Gereja yang Hidup, Guyub, & Berbuah</h1>
          <p className="lead">
            Menjadi jemaat yang berakar, bertumbuh, dan berbuah di dalam Kristus demi menghadirkan damai sejahtera bagi sesama di Banyumas.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/renungan">
              📖 Baca Renungan Hari Ini
            </Link>
            <Link className="btn alt" href="/warta">
              Lihat Warta Jemaat
            </Link>
          </div>
        </div>

        <div className="card card-highlight">
          <h2 style={{ fontSize: "1.4rem", marginBottom: "16px" }}>🕒 Jadwal Ibadah Rutin</h2>
          <table>
            <tbody>
              {jadwalIbadah.map((j) => (
                <tr key={j.nama}>
                  <td>{j.hari}, {j.jam}</td>
                  <td>{j.nama}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted" style={{ fontSize: "0.88rem", marginTop: "16px", marginBottom: 0 }}>
            *Ibadah Minggu pagi juga disiarkan secara langsung via YouTube Streaming.
          </p>
        </div>
      </section>

      {/* Profil & Visi Misi */}
      <section id="profil">
        <div className="section-head">
          <h2>Sejarah & Identitas</h2>
          <p>Kilas balik perjalanan iman dan visi pelayanan jemaat GKJ Purwokerto</p>
        </div>

        <div className="card" style={{ marginBottom: "28px" }}>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", margin: 0 }}>
            {site.sejarah}
          </p>
        </div>

        <div className="grid2">
          <div className="card">
            <h3 style={{ color: "var(--primary)" }}>🌱 Visi Gereja</h3>
            <p style={{ marginTop: "12px", color: "var(--text-muted)", lineHeight: "1.7" }}>
              {site.visi}
            </p>
          </div>
          <div className="card">
            <h3 style={{ color: "var(--primary)" }}>✨ Misi Pelayanan</h3>
            <ul style={{ paddingLeft: "20px", margin: "12px 0 0", color: "var(--text-muted)", lineHeight: "1.7" }}>
              {site.misi.map((m) => (
                <li key={m} style={{ marginBottom: "8px" }}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lokasi & Kontak */}
      <section id="lokasi">
        <div className="section-head">
          <h2>Lokasi & Kontak Jemaat</h2>
          <p>Kunjungi atau hubungi sekretariat GKJ Purwokerto</p>
        </div>

        <div className="card" style={{ padding: 0, overflow: "hidden", marginBottom: "20px" }}>
          <iframe
            className="map"
            title="Peta lokasi GKJ Purwokerto"
            src={site.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="card grid2" style={{ padding: "20px 28px" }}>
          <div>
            <b>Alamat:</b>
            <p className="muted" style={{ margin: "4px 0 0" }}>{site.alamat}</p>
          </div>
          <div>
            <b>Kontak & Informasi:</b>
            <p className="muted" style={{ margin: "4px 0 0" }}>
              Telp: {site.telepon} · Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
