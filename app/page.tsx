import fetcher from "@/utils/request";
import { NextWebVitalsMetric } from "next/app";
import "server-only";

import HomePage from "./home/page";

async function getPosts() {
  const res = await fetcher("/test", { next: { revalidate: 30 } });
  console.log(res);

  const data = await res.json();

  // const posts = await res.json();
  return { id: 1, title: "wss", data: data.statusCode };
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your Client Component

  return <HomePage searchParams={recentPosts} />;
}
