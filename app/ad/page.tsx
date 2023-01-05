"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Grid } from "antd-mobile";
import { fallback } from "@/utils/tools/fallback";
import { useReuestToGetProfile } from "@/hooks/request/test";

export default function AdPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data } = useReuestToGetProfile();

  return (
    <div>
      <div>{data}</div>
      <div className="grid grid-rows-2 gap-4">
        <div className="relative w-full h-full ">
          <Image
            src="https://dev-o2o-cha-excel-s3-bucket.s3.ap-northeast-1.amazonaws.com/chat_sys/room_line.png"
            alt="Picture of the author"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={fallback}
            priority
          />
        </div>
        <div className="relative w-40 h-40 overflow-hidden">
          <Image
            src="/vercel.svg"
            alt="Picture of the author"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
