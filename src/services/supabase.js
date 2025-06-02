import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://eihywtagtwoxflamzbsl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpaHl3dGFndHdveGZsYW16YnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MzU3MTMsImV4cCI6MjA2NDIxMTcxM30.Do_QEkcPzSzq1CT23Rspy3xEKspDpXn-bNfAZZEyY0w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
