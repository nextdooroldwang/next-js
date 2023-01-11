"use client";
import "antd-mobile/es/global";
import { Badge, TabBar } from "antd-mobile";
import {
  AppOutline,
  UnorderedListOutline,
  MessageFill,
  MessageOutline,
  UserOutline,
} from "antd-mobile-icons";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

const tabs = [
  {
    key: "index",
    title: "ホーム",
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: "chat",
    title: "チャット占い",
    icon: <UnorderedListOutline />,
    badge: "5",
  },
  {
    key: "consult",
    title: "相談ルーム",
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    badge: "99+",
  },
  {
    key: "my",
    title: "マイベージ",
    icon: <UserOutline />,
  },
];

export default function HomeLayoutComponent({
  children,
  layoutParams,
}: {
  children: React.ReactNode;
  layoutParams?: {
    chat: number;
    my: number;
    home: number;
    consult: number;
  };
}) {
  const router = useRouter();
  const pathname = useSelectedLayoutSegment();
  return (
    <section>
      {children}
      <TabBar
        className="fixed left-0 right-0 bottom-0 bg-white border-t"
        activeKey={pathname}
        onChange={(value) => router.push(`/home/${value}`)}
      >
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
    </section>
  );
}
