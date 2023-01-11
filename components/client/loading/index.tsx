"use client";
import { SpinLoading } from "antd-mobile";

export default function LoadingClientComponent() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SpinLoading color="primary" />
    </div>
  );
}
