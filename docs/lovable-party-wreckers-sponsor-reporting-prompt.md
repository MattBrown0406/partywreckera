Please apply and publish the Party Wreckers sponsor reporting backend updates.

Context:
- This site now tracks sponsor impressions and sponsor clicks from selective placements on the Episodes page, high-intent blog panels, and the Sponsors page.
- Supabase is handled inside Lovable.
- Do not change any public podcast links, Family Squares links, Freedom Interventions links, forms, or existing advertiser inquiry behavior.

Please do the following:

1. Deploy the updated `track-party-wreckers-event` edge function.
   - Keep `verify_jwt = false`.
   - Confirm the allowlist accepts `sponsor_impression`.
   - Confirm existing events still work, especially:
     - `sponsor_click`
     - `advertiser_package_click`
     - `advertiser_inquiry_start`
     - `advertiser_inquiry_click`
     - `advertiser_email_click`

2. Deploy the updated `party-wreckers-funnel-report` edge function.
   - Keep the existing `x-report-secret` protection using `PARTY_WRECKERS_REPORT_SECRET`.
   - Confirm the response includes these sponsor fields:
     - `totals.sponsor_impressions`
     - `totals.sponsor_clicks`
     - `totals.sponsor_click_through_rate`
     - `sponsor_impressions_by_sponsor`
     - `sponsor_clicks_by_sponsor`
     - `sponsor_placements`
     - `sponsor_pages`

3. Deploy the updated `party-wreckers-revenue-report` edge function.
   - Keep the existing `x-report-secret` protection using `PARTY_WRECKERS_REVENUE_SECRET`.
   - Confirm the response includes:
     - `totals.sponsor_impressions`
     - `totals.sponsor_clicks`
     - `totals.sponsor_click_through_rate`
     - `sponsor_activity_by_sponsor`
     - `sponsor_pages`
     - `sponsor_placements`

4. Verification:
   - Confirm calling both report functions without `x-report-secret` returns `401 Unauthorized`.
   - Trigger one `sponsor_impression` test event and one `sponsor_click` test event.
   - Confirm both rows land in `party_wreckers_funnel_events` with metadata containing:
     - `sponsor_id`
     - `sponsor_name`
     - `placement`
   - Confirm both report functions show the sponsor fields above.
   - Delete the test rows after verification.
