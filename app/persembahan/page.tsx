import { site } from "@/lib/site";
export const metadata = { title: "Persembahan & Dokumentasi" };

export default function Persembahan() {
  const { channelId, url } = site.youtube;
  return (
    <div className="wrap">
      <section style={{ borderTop: 0 }}>
        <h1>Persembahan</h1>
        <div className="grid2">
          <div>
            <h2>QRIS</h2>
            {/* TODO: taruh gambar QRIS resmi di public/qris.png */}
            <img src="/qris.png" alt="Kode QRIS persembahan GKJ Purwokerto" width={280} height={280} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div>
            <h2>Transfer bank</h2>
            <ul className="list">{site.rekening.map((r) => (
              <li key={r.nomor}><b>{r.bank}</b><br />{r.nomor}<br /><span className="muted">a.n. {r.atasNama}</span></li>
            ))}</ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Ibadah live streaming</h2>
        {channelId && (
          <div style={{ aspectRatio: "16/9", marginBottom: 16 }}>
            <iframe title="Live streaming YouTube" style={{ width: "100%", height: "100%", border: 0, borderRadius: 6 }}
              src={`https://www.youtube.com/embed/live_stream?channel=${channelId}`} allowFullScreen loading="lazy" />
          </div>
        )}
        <a className="btn" href={url} target="_blank" rel="noopener noreferrer">Buka kanal YouTube</a>
      </section>

      <section>
        <h2>Dokumentasi kegiatan</h2>
        {site.instagram.widgetUrl ? (
          <iframe title="Feed Instagram gereja" src={site.instagram.widgetUrl} loading="lazy" style={{ width: "100%", height: 520, border: 0 }} />
        ) : <p className="muted">Feed Instagram belum dihubungkan.</p>}
        {site.instagram.username && (
          <p><a href={`https://instagram.com/${site.instagram.username}`} target="_blank" rel="noopener noreferrer">@{site.instagram.username}</a></p>
        )}
      </section>
    </div>
  );
}
