/**
 * @ Author: firstfu
 * @ Create Time: 2024-08-01 15:40:22
 * @ Description: i18n 設定檔，定義支援的語言和預設語言
 * @ 注意：實際使用時會優先檢查瀏覽器語系，defaultLocale 僅在無法匹配時作為最後的後備選項
 */

export const i18n = {
  defaultLocale: "zh-TW",
  locales: ["en", "zh-TW", "zh-CN"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
