export const tgl = (iso: string) =>
  new Date(iso + "T00:00:00+07:00").toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
