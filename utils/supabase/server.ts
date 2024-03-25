import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kcbmrjuuhitvyywdzwfr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjYm1yanV1aGl0dnl5d2R6d2ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwOTU0MDcsImV4cCI6MTk5MDY3MTQwN30.6dQipaMNMq16_VZ6w7GdbLUVxekK2lTF9uUUAQjg7Ig"
);
