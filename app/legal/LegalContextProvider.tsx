"use client";

// @ Author: firstfu
// @ Create Time: 2024-03-27 14:45:22
// @ Description: 法律頁面 Context 提供者組件，標識用戶是否在法律頁面中

import { createContext, ReactNode } from "react";

// 創建一個 context 來標識當前是否在法律頁面
export const LegalPageContext = createContext(false);

export default function LegalContextProvider({ children }: { children: ReactNode }) {
  return <LegalPageContext.Provider value={true}>{children}</LegalPageContext.Provider>;
}
