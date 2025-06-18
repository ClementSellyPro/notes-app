import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ytazupprnjrdyygreqhv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0YXp1cHBybmpyZHl5Z3JlcWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NDgyODksImV4cCI6MjA2NTAyNDI4OX0.T3DbUAJrltq4iGH1fdWNLIBNHf2E4U-NPAGR8N26S9M';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);