/**
 * @ Author: firstfu
 * @ Create Time: 2024-04-08 13:27:45
 * @ Description: 多語言圖片處理工具，根據當前語系選擇對應的圖片
 */

import type { Locale } from "@/app/i18n/settings";

/**
 * 根據語系獲取對應的圖片路徑
 * @param imagePath 原始圖片路徑（不含語系目錄）
 * @param locale 當前語系
 * @returns 完整的圖片路徑，包含語系目錄
 */
export function getLocalizedImagePath(imagePath: string, locale: Locale): string {
  // 如果路徑已經包含語系目錄，則直接返回
  if (imagePath.includes(`/${locale}/`)) {
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

  // 構建語系化的圖片路徑
  return `${basePath}${locale}/${fileName}`;
}

/**
 * 獲取多個圖片的語系化路徑
 * @param images 原始圖片數組
 * @param locale 當前語系
 * @returns 語系化後的圖片數組
 */
export function getLocalizedImages<T extends { src: string }>(images: T[], locale: Locale): T[] {
  return images.map(image => ({
    ...image,
    src: getLocalizedImagePath(image.src, locale),
  }));
}