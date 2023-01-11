import "server-only";
import fetcher from "@/utils/request";

async function getPosts() {
  const res = await fetcher("/test", { next: { revalidate: 30 } });
  console.log(res);

  // const posts = await res.json();
  return { id: 1, title: "fffwss", data: res.statusCode };
}

export default async function ChatServerComponent() {
  const recentPosts = await getPosts();

  return <div>chat---{recentPosts.data}</div>;
}
