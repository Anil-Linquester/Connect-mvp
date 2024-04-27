import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oircfstddwhrnnxaxeuo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pcmNmc3RkZHdocm5ueGF4ZXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMTM0NjksImV4cCI6MjAyOTY4OTQ2OX0.21JL4DIuElH3dFEeDMuGpoWGB1yX7wUJ2VNTWgGxlWk';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
