Please apply and publish the Party Wreckers sponsor prospect admin backend update.

Context:
- Supabase is handled inside Lovable.
- Public podcast, registration, Family Squares, Freedom Interventions, and sponsor click/impression flows should not be changed.
- This update adds owner-only sponsor prospect management for advertiser inquiries.
- No database migration is required. The existing `party_wreckers_advertiser_inquiries.status` column is used for pipeline status, and internal notes / next action are stored in the existing `metadata` JSON column.

Please do the following:

1. Deploy the new `party-wreckers-advertiser-admin` edge function.
   - Set `verify_jwt = false`.
   - Protect it with the existing `PARTY_WRECKERS_REPORT_SECRET`.
   - Require the request header `x-report-secret` to match `PARTY_WRECKERS_REPORT_SECRET`.
   - Use the service role key server-side only.

2. Function behavior:
   - `POST` body `{ "action": "list" }`
     - Return the latest 100 rows from `party_wreckers_advertiser_inquiries`.
     - Include: `id`, `created_at`, `name`, `email`, `company`, `message`, `source_path`, `status`, `metadata`.
   - `POST` body `{ "action": "update", "id": "...", "status": "...", "metadata_patch": { ... } }`
     - Allow statuses: `new`, `contacted`, `proposal_sent`, `negotiating`, `sold`, `lost`.
     - Merge `metadata_patch` into the existing row metadata.
     - Return the updated prospect row.

3. Deploy the updated `send-advertiser-inquiry` function.
   - Keep existing behavior.
   - Also store and email `inventoryInterest` / `metadata.inventory_interest` when present.

4. Verification:
   - Calling `party-wreckers-advertiser-admin` without `x-report-secret` returns `401 Unauthorized`.
   - Calling it with the correct header and `{ "action": "list" }` returns advertiser prospects.
   - Updating a test/temporary prospect status to `contacted` and adding `sponsor_notes` / `next_action` stores those values in the row.
   - If a test row is created for verification, delete it after testing.
