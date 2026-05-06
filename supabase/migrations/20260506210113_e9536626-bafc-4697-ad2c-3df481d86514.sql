create table if not exists public.party_wreckers_funnel_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  event_name text not null,
  source_path text,
  destination_url text,
  cta_label text,
  page_title text,
  referrer text,
  anonymous_id text,
  user_agent text,
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists party_wreckers_funnel_events_created_at_idx
  on public.party_wreckers_funnel_events (created_at desc);

create index if not exists party_wreckers_funnel_events_event_name_idx
  on public.party_wreckers_funnel_events (event_name);

create index if not exists party_wreckers_funnel_events_source_path_idx
  on public.party_wreckers_funnel_events (source_path);

alter table public.party_wreckers_funnel_events enable row level security;

drop policy if exists "Service role can insert party wreckers funnel events" on public.party_wreckers_funnel_events;

create policy "Service role can insert party wreckers funnel events"
  on public.party_wreckers_funnel_events
  for insert
  with check (false);

create table if not exists public.party_wreckers_advertiser_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  message text,
  source_path text,
  status text not null default 'new',
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists party_wreckers_advertiser_inquiries_created_at_idx
  on public.party_wreckers_advertiser_inquiries (created_at desc);

alter table public.party_wreckers_advertiser_inquiries enable row level security;

drop policy if exists "Service role can insert party wreckers advertiser inquiries" on public.party_wreckers_advertiser_inquiries;

create policy "Service role can insert party wreckers advertiser inquiries"
  on public.party_wreckers_advertiser_inquiries
  for insert
  with check (false);