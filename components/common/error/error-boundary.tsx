import { ErrorBlock } from "antd-mobile";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children?: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.group();
    console.log("ErrorBoundary catch a error:");
    console.info("error", error);
    console.info("error info", errorInfo);
    console.groupEnd();
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return (
        <div className="flex justify-center items-center">
          <ErrorBlock fullPage status="default" title="" description="" />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
