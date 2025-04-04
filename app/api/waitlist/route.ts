/**
 * @ Author: firstfu
 * @ Create Time: 2024-04-05 05:50:34
 * @ Description: 等待名單的 API 端點，提供註冊功能和資料驗證
 */

import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/utils/supabase/server";
import { WaitlistRequest, WaitlistResponse } from "@/lib/types/waitlist";

/**
 * 等待名單 API
 * 接收用戶的電子郵件並加入等待名單
 */
export async function POST(req: NextRequest): Promise<NextResponse<WaitlistResponse>> {
  try {
    // 獲取請求數據
    const requestData: WaitlistRequest = await req.json();
    const { email, accepted_terms } = requestData;

    // 基本資料驗證
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "電子郵件不能為空",
          error: "EMAIL_REQUIRED",
        },
        { status: 400 }
      );
    }

    // 簡單的電子郵件格式驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "請提供有效的電子郵件地址",
          error: "INVALID_EMAIL",
        },
        { status: 400 }
      );
    }

    // 檢查是否同意條款
    if (!accepted_terms) {
      return NextResponse.json(
        {
          success: false,
          message: "請同意我們的條款和條件",
          error: "TERMS_NOT_ACCEPTED",
        },
        { status: 400 }
      );
    }

    // 獲取客戶端 IP 地址和用戶代理
    const xForwardedFor = req.headers.get("x-forwarded-for") || "未知";
    const userAgent = req.headers.get("user-agent") || "未知";

    // 創建 Supabase 客戶端
    const supabase = createServerSupabaseClient();

    // 檢查電子郵件是否已存在
    const { data: existingRegistration, error: checkError } = await supabase
      .from("pre_registrations")
      .select("id, email, created_at")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      return NextResponse.json(
        {
          success: false,
          message: "檢查郵件時出錯，請稍後再試",
          error: checkError.message,
        },
        { status: 500 }
      );
    }

    if (existingRegistration) {
      return NextResponse.json(
        {
          success: true,
          message: "您已成功加入等待名單",
          data: {
            id: existingRegistration.id,
            email: existingRegistration.email,
            created_at: existingRegistration.created_at,
          },
        },
        { status: 200 }
      );
    }

    // 將數據插入 Supabase
    const { data, error } = await supabase
      .from("pre_registrations")
      .insert([
        {
          email,
          accepted_terms,
          ip_address: xForwardedFor,
          user_agent: userAgent,
        },
      ])
      .select("id, email, created_at")
      .single();

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: "加入等待名單失敗，請稍後再試",
          error: error.message,
        },
        { status: 500 }
      );
    }

    // 返回成功響應
    return NextResponse.json(
      {
        success: true,
        message: "成功加入等待名單，謝謝您的支持！",
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "處理您的請求時發生錯誤",
        error: error instanceof Error ? error.message : "未知錯誤",
      },
      { status: 500 }
    );
  }
}

/**
 * 獲取等待名單數量的 API (僅限管理員)
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    // 創建 Supabase 客戶端
    const supabase = createServerSupabaseClient();

    // 獲取當前用戶
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // 檢查是否為管理員
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "未授權訪問",
          error: "UNAUTHORIZED",
        },
        { status: 401 }
      );
    }

    // 檢查是否有管理員權限（這裡需要根據您的用戶角色結構調整）
    const { data: userRole } = await supabase.from("profiles").select("role").eq("id", user.id).single();

    if (!userRole || userRole.role !== "admin") {
      return NextResponse.json(
        {
          success: false,
          message: "無權訪問此資源",
          error: "FORBIDDEN",
        },
        { status: 403 }
      );
    }

    // 計算等待名單總數
    const { data: totalData, error: countError } = await supabase.from("pre_registrations").select("id", { count: "exact", head: true });

    // 計算已轉換用戶數
    const { data: convertedData, error: convertedError } = await supabase.from("pre_registrations").select("id", { count: "exact", head: true }).eq("is_converted", true);

    if (countError || convertedError) {
      return NextResponse.json(
        {
          success: false,
          message: "獲取等待名單數量失敗",
          error: (countError || convertedError)?.message,
        },
        { status: 500 }
      );
    }

    const total = totalData?.length ?? 0;
    const converted = convertedData?.length ?? 0;

    // 返回數據
    return NextResponse.json(
      {
        success: true,
        data: {
          total,
          converted,
          conversion_rate: total ? Number((converted / total) * 100).toFixed(2) + "%" : "0%",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "處理您的請求時發生錯誤",
        error: error instanceof Error ? error.message : "未知錯誤",
      },
      { status: 500 }
    );
  }
}