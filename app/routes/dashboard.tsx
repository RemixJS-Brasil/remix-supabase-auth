import { redirect, type LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "~/db.server";
import { supabaseClient } from "~/supabase.server";

export const loader = async ({ request }: LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("access_token")) {
    throw redirect("/login");
  }

  const { data, error } = await supabaseClient.auth.getUser(
    session.get("access_token")
  );

  if (!error) {
    supabaseClient.auth.setSession(session.get("access_token"));

    const { data: employees } = await supabaseClient
      .from("employees")
      .select("employee_id, last_name")
      .limit(2);
    return json({ employees, data });
  } else {
    return json({ error });
  }
};

export default function Dashboard() {
  const data = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Supabase data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
