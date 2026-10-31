import { layanan, site } from "@/lib/site";
export const metadata = { title: "Layanan Jemaat" };

export default function Layanan() {
  return (
    <div className="wrap">
      <section style={{ borderTop: 0 }}>
        <h1>Layanan Jemaat</h1>
        {layanan.map((l) => (
          <article key={l.id} id={l.id} style={{ padding: "28px 0", borderTop: "1px solid var(--kabut)" }}>
            <h2>{l.judul}</h2>
            <div className="grid2">
              <div><h3>Syarat</h3><ul>{l.syarat.map((s) => <li key={s}>{s}</li>)}</ul></div>
              <div><h3>Prosedur</h3><ol>{l.prosedur.map((s) => <li key={s}>{s}</li>)}</ol></div>
            </div>
            <a className="btn" href={`https://wa.me/${site.waPengurus}?text=${encodeURIComponent(`Shalom, saya ingin bertanya tentang layanan ${l.judul}.`)}`}>
              Chat pengurus lewat WhatsApp
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
