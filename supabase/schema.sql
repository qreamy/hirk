create extension if not exists pgcrypto;

create table if not exists public.sponsor_leads (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  organization_number text not null,
  contact_name text not null,
  email text not null,
  phone text not null,
  website text,
  sponsorship_type text not null check (sponsorship_type in ('1975-klubben','Brons','Silver','Guld','Platina','Vet inte ännu / vill veta mer')),
  message text,
  status text not null default 'new' check (status in ('new','contacted','meeting','interested','won','lost')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.sponsor_leads enable row level security;

create policy "public_can_insert_leads"
on public.sponsor_leads for insert
to anon
with check (status = 'new' and notes is null);

create policy "authenticated_admins_can_read"
on public.sponsor_leads for select
to authenticated
using (true);

create policy "authenticated_admins_can_update"
on public.sponsor_leads for update
to authenticated
using (true) with check (true);

create policy "authenticated_admins_can_delete"
on public.sponsor_leads for delete
to authenticated
using (true);

create index if not exists sponsor_leads_created_at_idx on public.sponsor_leads(created_at desc);
create index if not exists sponsor_leads_status_idx on public.sponsor_leads(status);
create index if not exists sponsor_leads_sponsorship_type_idx on public.sponsor_leads(sponsorship_type);
