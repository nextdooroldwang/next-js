"use client";

import { Button, ErrorBlock } from "antd-mobile";
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <ErrorBlock fullPage status="default" title="" description="" />
        <Button
          onClick={() => {
            startTransition(() => {
              router.refresh();
              reset();
            });
          }}
          color="warning"
          fill="outline"
        >
          Refresh
        </Button>
      </div>
    </div>
  );
}
