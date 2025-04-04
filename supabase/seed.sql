/**
 * @ Author: firstfu
 * @ Create Time: 2024-06-05 15:45:00
 * @ Description: 預先註冊表的初始化數據，用於開發和測試環境
 */

-- 使用事務確保數據一致性
begin;

-- 插入預先註冊的測試數據
insert into public.pre_registrations (email, accepted_terms, ip_address, user_agent)
values
  ('test1@example.com', true, '192.168.1.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'),
  ('test2@example.com', true, '192.168.1.2', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'),
  ('test3@example.com', true, '192.168.1.3', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'),
  ('test4@example.com', true, '192.168.1.4', 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X)'),
  ('test5@example.com', true, '192.168.1.5', 'Mozilla/5.0 (Android 10; Mobile)')
on conflict (email) do nothing;  -- 防止重複插入

-- 模擬部分已轉換為正式用戶
update public.pre_registrations
set
  is_converted = true,
  conversion_date = now() - interval '5 days'
where email = 'test1@example.com';

update public.pre_registrations
set
  is_converted = true,
  conversion_date = now() - interval '3 days'
where email = 'test2@example.com';

commit;