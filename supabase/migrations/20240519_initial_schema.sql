/**
 * @ Author: firstfu
 * @ Create Time: 2024-05-19 21:02:30
 * @ Description: 初始數據庫架構 - 用戶認證和血壓記錄
 */

-- 創建 profiles 表（用戶個人資料）
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  updated_at TIMESTAMP WITH TIME ZONE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  birthday DATE,
  gender TEXT,
  height NUMERIC,
  weight NUMERIC,
  medical_history TEXT[],
  is_smoker BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 設定 RLS 保護用戶資料表
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 創建基本 Policy - 用戶只能讀取自己的資料
CREATE POLICY "用戶可讀取自己的資料" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

-- 創建基本 Policy - 用戶只能更新自己的資料
CREATE POLICY "用戶可更新自己的資料" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- 創建基本 Policy - 允許用戶註冊時插入資料
CREATE POLICY "允許用戶註冊時插入資料" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- 創建觸發器函數來處理新用戶註冊
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 創建觸發器，當有新用戶註冊時將自動在 profiles 表中添加資料
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 創建血壓記錄表
CREATE TABLE IF NOT EXISTS public.blood_pressure_records (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  systolic INTEGER NOT NULL, -- 收縮壓
  diastolic INTEGER NOT NULL, -- 舒張壓
  pulse INTEGER, -- 脈搏
  measured_at TIMESTAMP WITH TIME ZONE NOT NULL,
  note TEXT,
  measurement_position TEXT, -- 測量姿勢，如：坐姿、臥姿等
  arm TEXT, -- 測量手臂：左、右
  feeling TEXT, -- 測量時的感受
  medication_taken BOOLEAN, -- 是否服藥
  tags TEXT[], -- 標籤
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 設定 RLS 保護血壓記錄表
ALTER TABLE public.blood_pressure_records ENABLE ROW LEVEL SECURITY;

-- 創建基本 Policy - 用戶只能讀取自己的血壓記錄
CREATE POLICY "用戶可讀取自己的血壓記錄" ON public.blood_pressure_records
  FOR SELECT USING (auth.uid() = user_id);

-- 創建基本 Policy - 用戶只能插入自己的血壓記錄
CREATE POLICY "用戶可插入自己的血壓記錄" ON public.blood_pressure_records
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 創建基本 Policy - 用戶只能更新自己的血壓記錄
CREATE POLICY "用戶可更新自己的血壓記錄" ON public.blood_pressure_records
  FOR UPDATE USING (auth.uid() = user_id);

-- 創建基本 Policy - 用戶只能刪除自己的血壓記錄
CREATE POLICY "用戶可刪除自己的血壓記錄" ON public.blood_pressure_records
  FOR DELETE USING (auth.uid() = user_id);

-- 創建提醒表
CREATE TABLE IF NOT EXISTS public.reminders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  reminder_time TIME NOT NULL, -- 提醒時間
  days_of_week INTEGER[], -- 星期幾提醒，例如：[1,3,5]表示週一、週三、週五
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 設定 RLS 保護提醒表
ALTER TABLE public.reminders ENABLE ROW LEVEL SECURITY;

-- 創建基本 Policy - 用戶只能讀取自己的提醒
CREATE POLICY "用戶可讀取自己的提醒" ON public.reminders
  FOR SELECT USING (auth.uid() = user_id);

-- 創建基本 Policy - 用戶只能插入自己的提醒
CREATE POLICY "用戶可插入自己的提醒" ON public.reminders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 創建基本 Policy - 用戶只能更新自己的提醒
CREATE POLICY "用戶可更新自己的提醒" ON public.reminders
  FOR UPDATE USING (auth.uid() = user_id);

-- 創建基本 Policy - 用戶只能刪除自己的提醒
CREATE POLICY "用戶可刪除自己的提醒" ON public.reminders
  FOR DELETE USING (auth.uid() = user_id);

-- 創建醫生表（用於將來擴展功能，允許與醫生共享數據）
CREATE TABLE IF NOT EXISTS public.doctors (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  specialty TEXT,
  contact_info JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 創建用戶-醫生關聯表
CREATE TABLE IF NOT EXISTS public.user_doctors (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  doctor_id UUID REFERENCES public.doctors(id) ON DELETE CASCADE NOT NULL,
  can_view_records BOOLEAN DEFAULT false,
  relationship_start_date DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (user_id, doctor_id)
);

-- 設定 RLS 保護用戶-醫生關聯表
ALTER TABLE public.user_doctors ENABLE ROW LEVEL SECURITY;

-- 創建基本 Policy - 用戶只能讀取自己的醫生關聯
CREATE POLICY "用戶可讀取自己的醫生關聯" ON public.user_doctors
  FOR SELECT USING (auth.uid() = user_id);

-- 創建基本 Policy - 用戶只能插入自己的醫生關聯
CREATE POLICY "用戶可插入自己的醫生關聯" ON public.user_doctors
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 創建基本 Policy - 用戶只能更新自己的醫生關聯
CREATE POLICY "用戶可更新自己的醫生關聯" ON public.user_doctors
  FOR UPDATE USING (auth.uid() = user_id);

-- 創建基本 Policy - 用戶只能刪除自己的醫生關聯
CREATE POLICY "用戶可刪除自己的醫生關聯" ON public.user_doctors
  FOR DELETE USING (auth.uid() = user_id);

-- 添加更新時間戳的觸發器函數
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 添加觸發器到 profiles 表
CREATE TRIGGER update_profiles_modtime
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- 添加觸發器到 blood_pressure_records 表
CREATE TRIGGER update_blood_pressure_records_modtime
  BEFORE UPDATE ON public.blood_pressure_records
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- 添加觸發器到 reminders 表
CREATE TRIGGER update_reminders_modtime
  BEFORE UPDATE ON public.reminders
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- 添加觸發器到 doctors 表
CREATE TRIGGER update_doctors_modtime
  BEFORE UPDATE ON public.doctors
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();

-- 添加觸發器到 user_doctors 表
CREATE TRIGGER update_user_doctors_modtime
  BEFORE UPDATE ON public.user_doctors
  FOR EACH ROW EXECUTE FUNCTION update_modified_column();