# Lovable Prompt: Party Wreckers Funnel Tracking Backend

Apply the Party Wreckers backend changes that are already present in the repo:

1. Apply the migration:
   - `supabase/migrations/20260506120000_party_wreckers_funnel_tracking.sql`

2. Deploy these edge functions with `verify_jwt = false`:
   - `track-party-wreckers-event`
   - `party-wreckers-funnel-report`
   - `send-advertiser-inquiry`

3. Confirm the existing `RESEND_API_KEY` secret is available to `send-advertiser-inquiry`.

4. Create a new secret named `PARTY_WRECKERS_REPORT_SECRET` for the owner-only `/funnel-report` page. Use a long random value and send it back to me after deployment so I can open the report page.

5. Verification steps:
   - Submit a test event to `track-party-wreckers-event` with `event_name: "family_squares_click"` and confirm a row lands in `party_wreckers_funnel_events`.
   - Submit a test advertiser inquiry to `send-advertiser-inquiry` and confirm:
     - a row lands in `party_wreckers_advertiser_inquiries`
     - the email notification still goes to `matt@partywreckers.com`
   - Call `party-wreckers-funnel-report` with the `x-report-secret` header and confirm it returns totals, by_event, top_pages, top_destinations, and latest_events.
   - Clean up any test rows after verification.

Do not change the frontend CTA hierarchy, registration links, or podcast platform links.
