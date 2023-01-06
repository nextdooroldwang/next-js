"use client";

import ErrorBoundary from "@/components/common/error/error-boundary";
import { ConfigProvider, SafeArea } from "antd-mobile";
import jaJP from "antd-mobile/es/locales/ja-JP";
import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <ConfigProvider locale={jaJP}>
          <Suspense fallback={<div>Loading...</div>}>
            <div style={{ background: "#ace0ff" }}>
              <SafeArea position="top" />
            </div>
            {children}
            <div style={{ background: "#ffcfac" }}>
              <SafeArea position="bottom" />
            </div>
          </Suspense>
        </ConfigProvider>
      </ErrorBoundary>
    </RecoilRoot>
  );
}
