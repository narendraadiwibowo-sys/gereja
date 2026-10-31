import Link from "next/link";
import { site, jadwalIbadah } from "@/lib/site";

export default function Beranda() {
  return (
    <div className="wrap">
      <div className="hero">
        <div>
          <h1>{site.nama}</h1>
          <p className="lead">Jemaat yang bertumbuh dalam iman, pengharapan, dan kasih di Jl. Bhayangkara.</p>
          <Link className="btn" href="/renungan">Baca renungan hari ini</Link>
        </div>
        <div>
          <h2>Jadwal ibadah</h2>
          <table><tbody>
            {jadwalIbadah.map((j) => (
              <tr key={j.nama}><td>{j.hari}, {j.jam}</td><td>{j.nama}</td></tr>
            ))}
          </tbody></table>
        </div>
      </div>

      <section className="prose" id="profil">
        <h2>Sejarah singkat</h2><p>{site.sejarah}</p>
        <div className="grid2" style={{ marginTop: 32 }}>
          <div><h3>Visi</h3><p>{site.visi}</p></div>
          <div><h3>Misi</h3><ul>{site.misi.map((m) => <li key={m}>{m}</li>)}</ul></div>
        </div>
      </section>

      <section id="lokasi">
        <h2>Lokasi & Kontak</h2>
        <p className="muted">
          {site.alamat}
          {site.telepon && <> · Telp: {site.telepon}</>}
          {site.email && <> · Email: <a href={`mailto:${site.email}`}>{site.email}</a></>}
        </p>
        <iframe className="map" title="Peta lokasi gereja" src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </div>
  );
}
