import { kegiatan, warta } from "@/lib/site";
import { tgl } from "@/lib/format";
export const metadata = { title: "Warta & Kegiatan" };

export default function Warta() {
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
  const akan = kegiatan.filter((k) => k.tanggal >= today).sort((a, b) => a.tanggal.localeCompare(b.tanggal));
  return (
    <div className="wrap">
      <section style={{ borderTop: 0 }}>
        <h1>Warta & Kegiatan</h1>
        <div className="grid2">
          <div>
            <h2>Kegiatan terdekat</h2>
            {akan.length === 0 ? <p className="muted">Belum ada kegiatan terjadwal.</p> : (
              <ul className="list">{akan.map((k) => (
                <li key={k.judul + k.tanggal}><b>{k.judul}</b><br /><span className="muted">{tgl(k.tanggal)} · {k.tempat}</span></li>
              ))}</ul>
            )}
          </div>
          <div>
            <h2>Warta jemaat</h2>
            <ul className="list">{warta.map((w) => (
              <li key={w.file}><b>{w.judul}</b><br />
                <a className="btn alt" style={{ marginTop: 8 }} href={w.file} download>Unduh PDF</a></li>
            ))}</ul>
          </div>
        </div>
      </section>
    </div>
  );
}
