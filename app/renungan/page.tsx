import { getSupabase } from "@/lib/db";
import { tgl } from "@/lib/format";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata = { title: "Renungan Harian" };

export default async function Renungan() {
  const supabase = getSupabase();
  const data = supabase
    ? (await supabase.from("renungan").select("*").order("tanggal", { ascending: false }).limit(1).maybeSingle()).data
    : null;

  return (
    <div className="wrap prose">
      <section style={{ borderTop: 0 }}>
        <h1>Renungan Harian</h1>
        {!data ? <p className="muted">Renungan hari ini belum tersedia. Silakan kembali beberapa saat lagi.</p> : (
          <>
            <p className="muted">{tgl(data.tanggal)}</p>
            <h2>{data.ayat}</h2>
            {data.isi.split(/\n\s*\n/).map((p: string, i: number) => <p key={i}>{p}</p>)}
            <p className="muted" style={{ marginTop: 32, fontSize: ".9rem" }}>Renungan ini disusun dengan bantuan AI. Bacalah ayatnya langsung di Alkitab Anda.</p>
          </>
        )}
      </section>
    </div>
  );
}
