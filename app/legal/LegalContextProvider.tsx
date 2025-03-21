"use client";

// @ Author: firstfu
// @ Create Time: 2024-08-13 14:30:25
// @ Description: 法律頁面 Context 提供者組件

import { createContext, ReactNode } from "react";

// 創建一個 context 來標識當前是否在法律頁面
export const LegalPageContext = createContext(false);

export default function LegalContextProvider({ children }: { children: ReactNode }) {
  return <LegalPageContext.Provider value={true}>{children}</LegalPageContext.Provider>;
}
