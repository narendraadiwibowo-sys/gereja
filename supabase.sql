create table if not exists renungan (
  tanggal date primary key,
  ayat text not null,
  isi text not null,
  created_at timestamptz default now()
);
