import { db } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!db) {
    return Response.json(
      { ok: false, error: "DATABASE_URL is not configured." },
      { status: 500 }
    );
  }

  try {
    await db.execute(sql`select 1`);
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Health check error:", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
