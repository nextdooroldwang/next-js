"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import domain from "@/utils/domain";
import { Button, Badge, Space, TabBar, Swiper, SafeArea } from "antd-mobile";
import {
  AntOutline,
  AppOutline,
  UnorderedListOutline,
  MessageFill,
  MessageOutline,
  UserOutline,
} from "antd-mobile-icons";

interface PageProps {
  searchParams?: {
    title: string;
    id: number;
    data?: number;
  };
}

const tabs = [
  {
    key: "home",
    title: "首页",
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: "todo",
    title: "待办",
    icon: <UnorderedListOutline />,
    badge: "5",
  },
  {
    key: "message",
    title: "消息",
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    badge: "99+",
  },
  {
    key: "personalCenter",
    title: "我的",
    icon: <UserOutline />,
  },
];

const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

export default function HomePage({ searchParams }: PageProps) {
  const router = useRouter();
  const pathname = usePathname();
  // const searchParams = useSearchParams();

  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div className="aspect-video" style={{ backgroundColor: color }}>
        {index + 1}
      </div>
    </Swiper.Item>
  ));

  return (
    <div>
      <div style={{ background: "#ace0ff" }}>
        <SafeArea position="top" />
      </div>
      <Swiper loop autoplay defaultIndex={3}>
        {items}
      </Swiper>
      {domain}
      <div className="text-3xl font-bold underline">
        {searchParams?.title}-{searchParams?.data}
      </div>
      <Button>
        <Space className="items-center">
          <AntOutline className="text-[#fb923c]" />
          <span className="text-[#fb923c]">dddd</span>
        </Space>
      </Button>
      <TabBar>
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
      <div style={{ background: "#ffcfac" }}>
        <SafeArea position="bottom" />
      </div>
    </div>
  );
}
