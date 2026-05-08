create table if not exists public.party_wreckers_podcast_feed_cache (
  id text primary key default 'current',
  updated_at timestamptz not null default now(),
  source_url text not null,
  payload jsonb not null
);

alter table public.party_wreckers_podcast_feed_cache enable row level security;

drop policy if exists "No public podcast feed cache reads" on public.party_wreckers_podcast_feed_cache;

create policy "No public podcast feed cache reads"
  on public.party_wreckers_podcast_feed_cache
  for select
  using (false);