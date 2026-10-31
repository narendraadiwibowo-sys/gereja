# GKJ Purwokerto (Next.js)
1. `npm i` lalu salin `.env.example` ke `.env.local` dan isi.
2. Jalankan `supabase.sql` di Supabase SQL Editor.
3. Edit `lib/site.ts` (cari TODO). PDF warta ke `public/warta/`, QRIS ke `public/qris.png`.
4. `npm run dev`. Tes renungan: `curl -H "Authorization: Bearer $CRON_SECRET" localhost:3000/api/renungan/generate`
5. Deploy ke Vercel, isi env var yang sama; cron di `vercel.json` jalan otomatis tiap 04.00 WIB.
