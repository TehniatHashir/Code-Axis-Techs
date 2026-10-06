-- Run this once in Supabase: Dashboard -> SQL Editor -> New query -> paste -> Run

create table if not exists public.leads (
  id         bigint generated always as identity primary key,
  name       text not null,
  email      text not null,
  phone      text,
  message    text not null,
  status     text not null default 'new',   -- new / contacted / won / lost
  created_at timestamptz not null default now()
);

create table if not exists public.subscribers (
  id         bigint generated always as identity primary key,
  email      text not null unique,
  created_at timestamptz not null default now()
);

-- Lock both tables. Only the server (service role key in /api) can read or write.
-- No policies are added on purpose, so the public anon key gets no access at all.
alter table public.leads       enable row level security;
alter table public.subscribers enable row level security;