/**
 * @ Author: firstfu
 * @ Create Time: 2024-05-19 23:15:10
 * @ Description: 伺服器端 Supabase 客戶端工具函數
 */

import { createClient } from "@supabase/supabase-js";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

/**
 * 創建伺服器端 Supabase 客戶端
 * 使用服務角色密鑰，具有較高權限
 * @returns 配置好的 Supabase 客戶端
 */
export function createServerSupabaseClient() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    global: {
      headers: {
        "x-client-info": "nextjs-api",
      },
    },
  });
}

/**
 * 創建伺服器端管理員 Supabase 客戶端
 * 使用服務角色密鑰，具有較高權限
 * 注意：這個客戶端包含 cookie 處理，支援管理操作
 * @returns 配置好的管理員 Supabase 客戶端
 */
export async function createServerAdminSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
      set(name, value, options) {
        try {
          cookieStore.set({
            name,
            value,
            ...options,
          });
        } catch (error) {
          // 管理員客戶端通常不會設置 cookies，但函數是必需的
          console.error("設置 cookie 時出錯:", error);
        }
      },
      remove(name, options) {
        try {
          cookieStore.set({
            name,
            value: "",
            ...options,
            maxAge: 0,
          });
        } catch (error) {
          // 管理員客戶端通常不會刪除 cookies，但函數是必需的
          console.error("刪除 cookie 時出錯:", error);
        }
      },
    },
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    global: {
      headers: {
        "x-client-info": "nextjs-api",
      },
    },
  });
}
