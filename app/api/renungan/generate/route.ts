import { db } from "@/lib/db";
import { daftarAyat } from "@/lib/site";

export const maxDuration = 60;

// Daftar model dengan urutan fallback otomatis
const MODELS = [
  "gemini-3.5-flash",
  "gemini-3.6-flash",
  "gemini-3.7-flash",
  "gemini-3.8-flash",
];

// Dipanggil Vercel Cron tiap hari 04.00 WIB. Vercel otomatis kirim "Authorization: Bearer $CRON_SECRET".
export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const tanggal = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
  const ayat = daftarAyat[Math.floor(Math.random() * daftarAyat.length)];

  const geminiApiKey = process.env.GEMINI_API_KEY;
  if (!geminiApiKey) {
    return new Response("GEMINI_API_KEY is not configured", { status: 500 });
  }

  const prompt = `Tulis renungan harian Kristen untuk jemaat GKJ (Gereja Kristen Jawa) dari ${ayat}. Gunakan bahasa Indonesia yang hangat, bersahaja, dan menguatkan. Tulis TEPAT 3 paragraf, dipisah satu baris kosong, tanpa judul, dan jangan gunakan format markdown tebal atau bintang (*). Jangan mengutip bunyi ayat kata per kata. 
Paragraf 1: pengantar konteks ayat secara reflektif. 
Paragraf 2: makna teologis bagi perjalanan hidup beriman sehari-hari. 
Paragraf 3: penerapan praktis hari ini serta ditutup dengan doa singkat satu kalimat.`;

  let isi = "";
  let lastError = "";

  // Coba model secara berurutan jika ada model yang sedang sibuk (503/high demand)
  for (const model of MODELS) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiApiKey}`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 900,
            },
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        if (text) {
          isi = text;
          break;
        }
      } else {
        lastError = await res.text();
      }
    } catch (err: any) {
      lastError = err?.message || "Network error";
    }
  }

  if (!isi) {
    return new Response(`Gagal menghasilkan renungan dari Gemini: ${lastError}`, { status: 502 });
  }

  const { error } = await db().from("renungan").upsert({ tanggal, ayat, isi });
  if (error) return new Response(error.message, { status: 500 });

  return Response.json({ ok: true, tanggal, ayat, isi });
}
