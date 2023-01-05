"use client";

import ErrorBoundary from "@/components/common/error/error-boundary";
import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}
