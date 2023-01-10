import "server-only";
import fetcher from "@/utils/request";
import HomeIndexComponent from "@/components/home";

async function getPosts() {
  const res = await fetcher("/test", { next: { revalidate: 30 } });
  console.log(res);

  // const posts = await res.json();
  return { id: 1, title: "fffwss", data: res.statusCode };
}

export default async function HomePage() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your Client Component

  return <HomeIndexComponent searchParams={recentPosts} />;
}
