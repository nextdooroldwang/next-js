import "server-only";
import fetcher from "@/utils/request";

import HomePage from "./home/page";

async function getPosts() {
  const res = await fetcher("/notification/key", { next: { revalidate: 30 } });
  console.log(res);

  // const posts = await res.json();
  return { id: 1, title: "fffwss", data: res?.statusCode ?? "" };
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your Client Component

  return <HomePage searchParams={recentPosts} />;
}
