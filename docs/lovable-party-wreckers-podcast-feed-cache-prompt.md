# Lovable Prompt: Party Wreckers Podcast Feed Cache

Apply the Party Wreckers podcast feed cache backend changes that are already present in the repo.

1. Apply this migration:
   - `supabase/migrations/20260508162000_party_wreckers_podcast_feed_cache.sql`

2. Deploy these edge functions with `verify_jwt = false`:
   - `get-party-wreckers-podcast-feed`
   - `refresh-party-wreckers-podcast-feed`

3. Confirm the existing `FOLLOWUP_AUTOMATION_SECRET` secret is available to `refresh-party-wreckers-podcast-feed`.
   - If it does not exist in this project yet, create a long random value and store it as `FOLLOWUP_AUTOMATION_SECRET`.

4. Run a one-time refresh:
   - Call `refresh-party-wreckers-podcast-feed` with header `x-automation-secret: <FOLLOWUP_AUTOMATION_SECRET>`.
   - Confirm the response returns `ok: true` and an episode count.
   - Confirm one row exists in `party_wreckers_podcast_feed_cache` with `id = current`.

5. Schedule a daily cron inside Lovable/Supabase:
   - Name: `refresh-party-wreckers-podcast-feed-daily`
   - Schedule: daily at 10:30 UTC
   - Target function: `refresh-party-wreckers-podcast-feed`
   - Include header: `x-automation-secret: <FOLLOWUP_AUTOMATION_SECRET>`

6. Verification:
   - Call `get-party-wreckers-podcast-feed` and confirm it returns the podcast payload with real episode durations.
   - Open `/episodes` and confirm the page still loads immediately.
   - Confirm no episode duration displays as `0 min`.

Do not change the public CTA hierarchy, sponsor links, podcast platform links, or audio playback behavior.
