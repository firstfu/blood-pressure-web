/**
 * @ Author: firstfu
 * @ Create Time: 2024-04-08 13:27:45
 * @ Description: 多語言圖片處理工具，根據當前語系和顯示模式選擇對應的圖片
 */

import type { Locale } from "@/app/i18n/settings";

// 顯示模式類型
export type DisplayMode = 'light' | 'dark';

/**
 * 根據語系和顯示模式獲取對應的圖片路徑
 * @param imagePath 原始圖片路徑（不含語系目錄）
 * @param locale 當前語系
 * @param mode 顯示模式 (light 或 dark)
 * @returns 完整的圖片路徑，包含語系和顯示模式目錄
 */
export function getLocalizedImagePath(imagePath: string, locale: Locale, mode: DisplayMode = 'light'): string {
  // 如果路徑已經包含語系和模式目錄，則直接返回
  if (imagePath.includes(`/${locale}/${mode}/`)) {
    return imagePath;
  }

  // 獲取圖片檔名
  const fileName = imagePath.split("/").pop() || "";
  // 檔案的擴展名
  const fileExt = fileName.split(".").pop() || "";
  // 檔案名稱（不含擴展名）
  const baseName = fileName.replace(`.${fileExt}`, "");
  // 基礎路徑（不含檔名）
  const basePath = imagePath.replace(fileName, "");

  // 如果路徑中已包含語系目錄，但沒有模式目錄
  if (imagePath.includes(`/${locale}/`) && !imagePath.includes(`/${mode}/`)) {
    // 從路徑中提取語系後的部分
    const pathParts = imagePath.split(`/${locale}/`);
    return `${pathParts[0]}/${locale}/${mode}/${pathParts[1]}`;
  }

  // 構建語系化和適應顯示模式的圖片路徑
  return `${basePath}${locale}/${mode}/${fileName}`;
}

/**
 * 獲取多個圖片的語系化和顯示模式適應路徑
 * @param images 原始圖片數組
 * @param locale 當前語系
 * @param mode 顯示模式 (light 或 dark)
 * @returns 語系化和顯示模式適應後的圖片數組
 */
export function getLocalizedImages<T extends { src: string }>(images: T[], locale: Locale, mode: DisplayMode = 'light'): T[] {
  return images.map(image => ({
    ...image,
    src: getLocalizedImagePath(image.src, locale, mode),
  }));
}