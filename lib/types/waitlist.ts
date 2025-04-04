/**
 * @ Author: firstfu
 * @ Create Time: 2024-04-05 05:49:21
 * @ Description: 等待名單相關的類型定義
 */

/**
 * 等待名單資料的資料庫結構
 */
export interface Waitlist {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  ip_address: string | null;
  user_agent: string | null;
  accepted_terms: boolean;
  is_converted: boolean;
  converted_user_id: string | null;
  conversion_date: string | null;
}

/**
 * 等待名單表單資料
 */
export interface WaitlistFormData {
  email: string;
  accepted_terms: boolean;
}

/**
 * 等待名單請求的資料
 */
export interface WaitlistRequest {
  email: string;
  accepted_terms: boolean;
  ip_address?: string;
  user_agent?: string;
}

/**
 * 等待名單響應的資料
 */
export interface WaitlistResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    email: string;
    created_at: string;
  };
  error?: string;
}