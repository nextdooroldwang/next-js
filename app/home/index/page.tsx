"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import domain from "@/utils/request/domain";
import { Button, Space, Swiper, SafeArea } from "antd-mobile";
import { AntOutline } from "antd-mobile-icons";
import Link from "next/link";
import HomeLayout from "../layout";

interface PageProps {
  searchParams?: {
    title: string;
    id: number;
    data?: number;
  };
}

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
      <Swiper loop autoplay defaultIndex={3}>
        {items}
      </Swiper>
      {domain}
      <Link className="text-3xl font-bold text-[#fb923c]" href="/ad">
        {searchParams?.title}-{searchParams?.data}
      </Link>

      <Button>
        <Space className="items-center">
          <AntOutline className="text-[#fb923c]" />
          <span className="text-[#fb923c]">dddd</span>
        </Space>
      </Button>
    </div>
  );
}
