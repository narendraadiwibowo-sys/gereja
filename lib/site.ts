// Data resmi dan konfigurasi GKJ Purwokerto (Jl. Bhayangkara No. 5)
export const site = {
  nama: "GKJ Purwokerto",
  alamat: "Jl. Bhayangkara No. 5, Purwokerto Lor, Purwokerto Timur, Banyumas, Jawa Tengah 53111",
  telepon: "(0281) 637888",
  email: "gkj.purwokerto@gmail.com",
  mapsEmbed: "https://www.google.com/maps?q=GKJ+Purwokerto+Jl+Bhayangkara+No+5&output=embed",
  waPengurus: "6287834085969", // Nomor WhatsApp pengurus GKJ Purwokerto
  youtube: {
    channelId: "UCj9QOlcXs1TW0yTEbsD4x3w",
    url: "https://www.youtube.com/@GKJPurwokerto",
  },
  instagram: {
    username: "gkj_purwokerto",
    widgetUrl: "", // Bisa diisi URL embed widget SnapWidget / Elfsight jika diinginkan
  },
  rekening: [
    {
      bank: "Bank BRI / BCA (Kas GKJ Purwokerto)",
      nomor: "Silakan konfirmasi ke Tata Usaha",
      atasNama: "GKJ Purwokerto",
    },
  ],
  sejarah:
    "Gereja Kristen Jawa (GKJ) Purwokerto berakar dari perjumpaan dan pertumbuhan iman masyarakat Kristen di Karesidenan Banyumas sejak pertengahan abad ke-19. Berdiri teguh di Jl. Bhayangkara No. 5, GKJ Purwokerto menjadi rumah persekutuan bagi umat untuk memuliakan Tuhan, melestarikan nilai-nilai kebersamaan luhur seperti tradisi Undhuh-Undhuh, serta melayani masyarakat lintas generasi dengan penuh kasih dan pengharapan.",
  visi: "Menjadi jemaat yang berakar, bertumbuh, dan berbuah di dalam Kristus demi mewujudkan damai sejahtera Allah bagi sesama (Padhangmu Sorotna).",
  misi: [
    "Menyelenggarakan peribadahan dan pembinaan iman yang setia pada Firman Tuhan serta kontekstual.",
    "Mengembangkan persekutuan jemaat yang guyub, inklusif, dan saling menguatkan dalam kasih persaudaraan.",
    "Melaksanakan pelayanan diakonia dan kesaksian sosial bagi masyarakat luas di Purwokerto dan sekitarnya.",
    "Memperlengkapi kaum muda dan anak-anak melalui pembinaan rohani yang berdaya tahan dan relevan dengan zaman.",
  ],
};

export const jadwalIbadah = [
  { hari: "Minggu", jam: "08.00 WIB", nama: "Kebaktian Umum / Minggu (On-site & Live Streaming)" },
  { hari: "Minggu", jam: "09.00 WIB", nama: "Ibadah Anak / Sekolah Minggu" },
  { hari: "Sabtu", jam: "18.30 WIB", nama: "Persekutuan Remaja & Pemuda (Kompa)" },
];

export const kegiatan = [
  { tanggal: "2026-11-08", judul: "Ibadah Minggu & Pembinaan Warga Gereja", tempat: "Gedung Utama GKJ Purwokerto" },
  { tanggal: "2026-11-14", judul: "Persekutuan Komisi Pemuda (Kompa)", tempat: "Ruang Pemuda" },
];

// Taruh file PDF di /public/warta/ lalu daftarkan di sini (terbaru di atas)
export const warta = [
  { tanggal: "2026-11-01", judul: "Warta Jemaat Minggu Ini", file: "/warta/warta-terbaru.pdf" },
];

export const layanan = [
  {
    id: "baptisan",
    judul: "Baptisan Kudus & Sidi",
    syarat: [
      "Mengisi formulir pendaftaran baptis anak / sidi.",
      "Fotokopi Surat Baptis orang tua (untuk baptis anak) atau Surat Baptis Anak (untuk sidi).",
      "Fotokopi Kartu Keluarga Warga GKJ Purwokerto.",
      "Mengikuti kelas katekese (pembinaan dasar iman Kristen) hingga tuntas.",
    ],
    prosedur: [
      "Mengambil formulir di Tata Usaha GKJ Purwokerto atau unduh via kantor gereja.",
      "Menyerahkan berkas paling lambat 2 minggu sebelum masa katekese dimulai.",
      "Mengikuti percakapan gerejawi / peneguhan bersama Majelis Gereja.",
      "Pelaksanaan sakramen baptisan / peneguhan sidi dalam kebaktian Minggu.",
    ],
  },
  {
    id: "pernikahan",
    judul: "Pemberkatan Pernikahan",
    syarat: [
      "Kedua calon mempelai sudah menerima Sakramen Baptis Dewasa atau Sidi.",
      "Surat Keterangan Belum Menikah dari kelurahan (Model N1-N4).",
      "Fotokopi KTP, KK, dan Akta Kelahiran kedua calon mempelai.",
      "Pasfoto berdampingan ukuran 4x6 dengan latar belakang merah/biru.",
    ],
    prosedur: [
      "Mendaftarkan rencana pernikahan ke Majelis Gereja minimal 3 bulan sebelum tanggal pemberkatan.",
      "Mengikuti program Konseling & Pastoral Pranikah bersama Pendeta.",
      "Warta pernikahan diumumkan di hadapan jemaat selama 2-3 Minggu berturut-turut.",
      "Pelaksanaan ibadah peneguhan dan pemberkatan pernikahan.",
    ],
  },
  {
    id: "kedukaan",
    judul: "Pelayanan Kedukaan",
    syarat: [
      "Keluarga atau pengurus blok / paguyuban segera melapor kepada Majelis Gereja.",
      "Identitas warga jemaat yang berpulang (Nama lengkap, alamat, blok persekutuan).",
    ],
    prosedur: [
      "Hubungi nomor kontak darurat pengurus / majelis atau datang langsung ke gereja.",
      "Majelis mengkoordinasikan jadwal ibadah penghiburan di rumah duka.",
      "Pendeta dan Majelis memimpin upacara pelepasan jenazah dan pemakaman/kremasi.",
    ],
  },
];

// Referensi saja (teks ayat tidak disimpan; AI hanya menulis renungannya)
export const daftarAyat = [
  "Mazmur 23:1-6", "Yohanes 3:16-17", "Filipi 4:4-9", "Roma 8:28-39", "Yesaya 41:10",
  "Matius 11:28-30", "Amsal 3:5-6", "1 Korintus 13:1-13", "Mazmur 121:1-8", "Yeremia 29:11-13",
  "Efesus 2:8-10", "Yakobus 1:2-8", "Mikha 6:8", "Galatia 5:22-26", "Lukas 15:11-24",
];
