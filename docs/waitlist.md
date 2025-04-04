# 等待名單功能實現文檔

## 概述

本文檔詳細說明了血壓監測應用的等待名單功能實現方案。等待名單允許用戶在產品正式發布前提供電子郵件地址，以獲取產品發布通知、專屬優惠以及提前體驗資格。

## 技術架構

- **前端**: Next.js 14 + React 19 + ShadCN UI
- **後端**: Next.js API Routes
- **數據庫**: PostgreSQL (Supabase 託管)
- **身份認證**: Supabase Auth (預留用於用戶註冊轉換)

## 數據表設計

等待名單功能的核心是 `pre_registrations` 表，其結構如下：

```sql
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
```

### 索引與安全設置

- 為 `email`, `created_at`, `is_converted` 欄位創建索引提高查詢效率
- 啟用行級安全性，設定相應政策控制資料訪問權限
- 使用觸發器自動更新 `updated_at` 欄位

## API 接口

### 1. 等待名單 API

**端點**: `POST /api/waitlist`

**請求格式**:

```json
{
  "email": "user@example.com",
  "accepted_terms": true
}
```

**響應格式**:

```json
{
  "success": true,
  "message": "成功加入等待名單，謝謝您的支持！",
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "email": "user@example.com",
    "created_at": "2024-06-05T08:15:30Z"
  }
}
```

**錯誤處理**:

- 電子郵件格式無效
- 未同意條款和條件
- 電子郵件已存在
- 伺服器處理錯誤

### 2. 獲取等待名單統計 API (管理員專用)

**端點**: `GET /api/waitlist`

**響應格式**:

```json
{
  "success": true,
  "data": {
    "total": 150,
    "converted": 25,
    "conversion_rate": "16.67%"
  }
}
```

## 前端實現

等待名單表單位於網站首頁，包含以下元素：

1. 電子郵件輸入框
2. 條款同意複選框
3. 提交按鈕
4. 成功/錯誤訊息顯示

表單提交時進行即時驗證，然後調用 API 完成註冊過程。

## 管理功能

管理員可以通過專用介面查看和管理等待名單的用戶，功能包括：

1. 查看等待名單總人數和轉化率
2. 導出註冊用戶資料用於市場營銷
3. 標記用戶為已轉換狀態

## 部署流程

### 1. 數據庫設置

通過 Supabase 遷移文件建立數據表和政策：

```bash
# 部署數據庫結構
supabase db push

# 開發環境填充測試數據
supabase db reset
```

### 2. 環境變量配置

需要設置以下環境變量：

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 未來擴展

1. **電子郵件通知系統**：自動向等待名單用戶發送更新和優惠信息
2. **用戶轉換追踪**：關聯等待名單記錄與正式用戶帳號
3. **多步驟註冊**：收集更多用戶資料以提供個性化體驗
4. **推薦功能**：實現推薦好友註冊獲取額外優惠的功能

## 測試計劃

1. **單元測試**：API 端點和表單驗證邏輯
2. **集成測試**：前端表單與後端 API 的交互
3. **安全測試**：防止注入攻擊和資料洩漏
4. **性能測試**：高流量下的系統表現

## 進度追蹤

| 階段 | 任務             | 狀態   | 完成日期   |
| ---- | ---------------- | ------ | ---------- |
| 1    | 數據庫設計與遷移 | 完成   | 2024-06-05 |
| 2    | API 開發         | 完成   | 2024-06-05 |
| 3    | 前端表單實現     | 完成   | 2024-06-05 |
| 4    | 管理介面開發     | 待完成 | -          |
| 5    | 電子郵件通知系統 | 待完成 | -          |
| 6    | 測試與優化       | 待完成 | -          |
