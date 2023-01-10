import "server-only";
import fetcher from "@/utils/request";

async function getPosts() {
  const res = await fetcher("/test", { next: { revalidate: 30 } });

  // const posts = await res.json();
  return { id: 1, title: "fffwss", data: res.statusCode };
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your Client Component

  return <div>chat</div>;
}
