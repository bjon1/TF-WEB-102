import { createClient } from '@supabase/supabase-js';

const URL = 'https://piihrwmjnwallqgdsjjk.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpaWhyd21qbndhbGxxZ2RzamprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwNjA1NDgsImV4cCI6MjA0NTYzNjU0OH0.5yGn4KCKojSQkV4NimCIylDKo-4CcuoWeoLeR44I-2A';

export const supabase = createClient(URL, API_KEY);
