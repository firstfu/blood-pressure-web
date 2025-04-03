/**
 * @ Author: firstfu
 * @ Create Time: 2024-05-19 21:08:10
 * @ Description: Apple 登入 API 處理程序
 */

import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/utils/supabase/server";

/**
 * Apple 登入 API - GET 請求處理
 * 用於測試 API 是否正常運作
 */
export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: "success",
    message: "Apple Login API is working",
    timestamp: new Date().toISOString(),
  });
}

/**
 * Apple 登入 API - POST 請求處理
 * 處理從 Flutter 應用發來的 Apple 登入請求
 */
export async function POST(request: NextRequest) {
  try {
    // 解析客戶端傳來的數據
    const body = await request.json();

    // 驗證請求數據
    const { idToken, nonce, name } = body;

    if (!idToken) {
      return NextResponse.json({ status: "error", message: "Apple ID Token 不能為空" }, { status: 400 });
    }

    // 創建伺服器端 Supabase 客戶端
    const supabase = createServerSupabaseClient();

    // 使用 Apple ID Token 進行身份驗證
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "apple",
      token: idToken,
      nonce: nonce,
    });

    if (error) {
      console.error("Apple 登入失敗:", error);
      return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
    }

    // 如果用戶提供了姓名信息，更新用戶資料
    if (name && data.user) {
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          full_name: name,
          updated_at: new Date().toISOString(),
        })
        .eq("id", data.user.id);

      if (updateError) {
        console.error("更新用戶資料失敗:", updateError);
      }
    }

    return NextResponse.json({
      status: "success",
      message: "Apple 登入成功",
      user: {
        id: data.user?.id,
        email: data.user?.email,
      },
      session: {
        access_token: data.session?.access_token,
        refresh_token: data.session?.refresh_token,
        expires_at: data.session?.expires_at,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Apple 登入出現異常:", error);
    return NextResponse.json({ status: "error", message: error.message || "處理請求時發生錯誤" }, { status: 500 });
  }
}
