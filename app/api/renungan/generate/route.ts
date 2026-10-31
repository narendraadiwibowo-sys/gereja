import { db } from "@/lib/db";
import { daftarAyat } from "@/lib/site";

export const maxDuration = 60;

// Dipanggil Vercel Cron tiap hari 04.00 WIB. Vercel otomatis kirim "Authorization: Bearer $CRON_SECRET".
export async function GET(req: Request) {
  if (req.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }
  const tanggal = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
  const ayat = daftarAyat[Math.floor(Math.random() * daftarAyat.length)];

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-5-5",
      max_tokens: 900,
      system:
        "Kamu penulis renungan harian untuk jemaat GKJ (Gereja Kristen Jawa). Bahasa Indonesia yang hangat dan sederhana. Tulis TEPAT 3 paragraf, dipisah satu baris kosong, tanpa judul, tanpa markdown. Jangan mengutip bunyi ayat kata per kata; rujuk isinya dengan kata-katamu sendiri. Paragraf 1: konteks ayat. Paragraf 2: makna. Paragraf 3: penerapan hari ini dan doa singkat.",
      messages: [{ role: "user", content: `Tulis renungan harian dari ${ayat}.` }],
    }),
  });
  if (!res.ok) return new Response(await res.text(), { status: 502 });

  const data = await res.json();
  const isi = (data.content as { type: string; text?: string }[]).filter((b) => b.type === "text").map((b) => b.text).join("").trim();

  const { error } = await db().from("renungan").upsert({ tanggal, ayat, isi });
  if (error) return new Response(error.message, { status: 500 });
  return Response.json({ ok: true, tanggal, ayat });
}
