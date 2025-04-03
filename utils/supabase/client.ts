/**
 * @ Author: firstfu
 * @ Create Time: 2024-05-19 23:20:10
 * @ Description: 客戶端 Supabase 工具函數
 */

import { createBrowserClient } from "@supabase/ssr";

/**
 * 創建客戶端 Supabase 客戶端
 * 用於在瀏覽器中運行的客戶端組件
 * @returns 配置好的 Supabase 客戶端
 */
export function createBrowserSupabaseClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
}
