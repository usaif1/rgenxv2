// dependencies
import { createClient } from "@supabase/supabase-js";

// db types
import { Database } from "../../database.types";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

const supabaseClient = createClient<Database>(supabaseURL, supabaseAnonKey);

export default supabaseClient;
