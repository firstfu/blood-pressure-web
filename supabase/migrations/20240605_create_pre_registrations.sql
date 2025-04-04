/**
 * @ Author: firstfu
 * @ Create Time: 2024-06-05 15:40:00
 * @ Description: 預先註冊表的結構定義，包含電子郵件、註冊時間和相關設置
 */

-- 創建預先註冊的表格
create table if not exists public.pre_registrations (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  ip_address text,
  user_agent text,
  accepted_terms boolean not null default false,
  is_converted boolean not null default false,
  converted_user_id uuid references auth.users(id),
  conversion_date timestamptz
);

-- 為電子郵件欄位加入索引，提高查詢效率
create index if not exists pre_registrations_email_idx on public.pre_registrations (email);

-- 為 created_at 欄位加入索引，方便根據註冊時間排序
create index if not exists pre_registrations_created_at_idx on public.pre_registrations (created_at);

-- 為轉換欄位加入索引，便於分析轉化率
create index if not exists pre_registrations_is_converted_idx on public.pre_registrations (is_converted);

-- 設置行級安全性 (RLS)
alter table public.pre_registrations enable row level security;

-- 創建相關政策 (Policies)

-- 1. 管理員可以查看所有資料
create policy "Admins can select pre_registrations"
  on public.pre_registrations
  for select to authenticated
  using (
    exists (
      select 1 from auth.users
      where auth.users.id = auth.uid()
      and auth.users.role = 'admin'
    )
  );

-- 2. 插入新預先註冊記錄的政策 (公開)
create policy "Anyone can insert pre_registrations"
  on public.pre_registrations
  for insert to anon
  with check (true);

-- 3. 管理員可以更新預先註冊記錄
create policy "Admins can update pre_registrations"
  on public.pre_registrations
  for update to authenticated
  using (
    exists (
      select 1 from auth.users
      where auth.users.id = auth.uid()
      and auth.users.role = 'admin'
    )
  );

-- 4. 管理員可以刪除預先註冊記錄
create policy "Admins can delete pre_registrations"
  on public.pre_registrations
  for delete to authenticated
  using (
    exists (
      select 1 from auth.users
      where auth.users.id = auth.uid()
      and auth.users.role = 'admin'
    )
  );

-- 添加觸發器，自動更新 updated_at 欄位
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_pre_registrations_updated_at
before update on public.pre_registrations
for each row
execute function public.update_updated_at_column();

-- 遷移回滾腳本
-- drop trigger if exists update_pre_registrations_updated_at on public.pre_registrations;
-- drop function if exists public.update_updated_at_column();
-- drop policy if exists "Admins can delete pre_registrations" on public.pre_registrations;
-- drop policy if exists "Admins can update pre_registrations" on public.pre_registrations;
-- drop policy if exists "Anyone can insert pre_registrations" on public.pre_registrations;
-- drop policy if exists "Admins can select pre_registrations" on public.pre_registrations;
-- drop index if exists pre_registrations_is_converted_idx;
-- drop index if exists pre_registrations_created_at_idx;
-- drop index if exists pre_registrations_email_idx;
-- drop table if exists public.pre_registrations;