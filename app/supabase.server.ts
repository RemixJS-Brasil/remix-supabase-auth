import { createClient } from "@supabase/supabase-js";
import { getSession } from "./db.server";

export const supabaseClient = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const hasAuthSession = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("access_token")) throw Error("No session");
  supabaseClient.auth.setSession(session.get("access_token"));
};
