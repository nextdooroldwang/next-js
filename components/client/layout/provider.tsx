"use client";
import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "@/components/error-boundary";

import "antd-mobile/es/global";
import { ConfigProvider } from "antd-mobile";
import jaJP from "antd-mobile/es/locales/ja-JP";
import LoadingComponent from "@/components/common/loading";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <ConfigProvider locale={jaJP}>
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="w-screen h-screen flex justify-center items-center">
                <LoadingComponent />
              </div>
            }
          >
            {children}
          </Suspense>
        </ErrorBoundary>
      </ConfigProvider>
    </RecoilRoot>
  );
}
