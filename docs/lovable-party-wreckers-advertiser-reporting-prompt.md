# Lovable Prompt: Party Wreckers Advertiser Reporting

Apply the Party Wreckers advertiser/reporting changes already present in the repo.

1. Deploy these updated edge functions with `verify_jwt = false`:
   - `track-party-wreckers-event`
   - `send-advertiser-inquiry`
   - `party-wreckers-funnel-report`
   - `party-wreckers-revenue-report`

2. Confirm these event names are accepted by `track-party-wreckers-event`:
   - `advertiser_package_click`
   - `advertiser_inquiry_start`
   - `advertiser_inquiry_click`
   - `advertiser_email_click`

3. Verify advertiser inquiry handling:
   - Submit a test sponsor inquiry with a `packageInterest` value.
   - Confirm a row lands in `party_wreckers_advertiser_inquiries`.
   - Confirm the row metadata includes `package_interest`.
   - Confirm the owner email includes the package interest.
   - Clean up the test row after verification.

4. Verify owner reporting:
   - Call `party-wreckers-funnel-report` with the `x-report-secret` header.
   - Confirm the response includes:
     - `advertiser_inquiry_starts`
     - `advertiser_package_clicks`
     - `advertiser_email_clicks`
     - `listener_lead_pages`
     - `listener_lead_destinations`
     - `advertiser_pages`
     - `sponsor_package_interest`
   - Call `party-wreckers-revenue-report` with the `x-report-secret` header.
   - Confirm it includes advertiser intent and listener lead page breakdowns.

Do not change public CTA URLs, podcast playback, Family Squares links, or Freedom Interventions links.
