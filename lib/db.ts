import { createClient } from "@supabase/supabase-js";

// Konfigurasi Supabase resmi GKJ Purwokerto
// URL dan Anon Public Key aman disertakan langsung agar website publik selalu bisa membaca renungan
const DEFAULT_SUPABASE_URL = "https://krhykwqwxucdhpuskxjw.supabase.co";
const DEFAULT_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyaHlrd3F3eHVjZGhwdXNreGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0ODc3MjUsImV4cCI6MjEwOTA2MzcyNX0.h1WjCb7GuI03W_mC4VDgNvHHFhDF6-qZ3HUaq4tFO_U";

export const getSupabase = () => {
  const url = process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
  // Gunakan service role jika ada (untuk write/admin), atau fallback ke anon key
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    DEFAULT_ANON_KEY;

  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
};

export const db = () => {
  const client = getSupabase();
  if (!client) {
    throw new Error("Supabase is not configured.");
  }
  return client;
};
