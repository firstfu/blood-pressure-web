/**
 * @ Author: firstfu
 * @ Create Time: 2024-05-19 20:45:01
 * @ Description: Apple 登入 API 路由
 */

import { NextRequest, NextResponse } from "next/server";

/**
 * GET 方法處理 Apple 登入請求
 *
 * @param request - NextRequest 請求物件
 * @returns NextResponse 回應物件
 */
export async function GET(request: NextRequest) {
  try {
    // 這裡只是一個簡單的示例，實際 Apple 登入會需要更多邏輯
    const response = {
      status: "success",
      message: "Hello World - Apple Login API",
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Apple Login API Error:", error);
    return NextResponse.json({ status: "error", message: "發生錯誤，請稍後再試" }, { status: 500 });
  }
}

/**
 * POST 方法處理 Apple 登入請求
 *
 * @param request - NextRequest 請求物件
 * @returns NextResponse 回應物件
 */
export async function POST(request: NextRequest) {
  try {
    // 從請求中獲取資料
    const data = await request.json();

    // 這裡只是一個簡單的示例，實際 Apple 登入會需要驗證 token 等邏輯
    const response = {
      status: "success",
      message: "Hello World - Apple Login API POST",
      receivedData: data,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Apple Login API Error:", error);
    return NextResponse.json({ status: "error", message: "發生錯誤，請稍後再試" }, { status: 500 });
  }
}
