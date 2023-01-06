import "server-only";
import fetcher from "@/utils/request";

import HomeLayoutComponent from "@/components/common/layout/home";

async function getPosts() {
  const res = await fetcher("/test", { cache: "no-store" });

  // const posts = await res.json();
  return { id: 1, title: "fffwss", data: res.statusCode };
}

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const recentPosts = await getPosts();

  return <HomeLayoutComponent>{children}</HomeLayoutComponent>;
}
