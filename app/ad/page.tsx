import "server-only";
import fetcher from "@/utils/request";
import Loading from "@/components/client/loading";
import LoadingComponent from "@/components/common/loading";

async function getArtist(username: string) {
  const res = await fetcher("/test", { next: { revalidate: 30 } });

  // const posts = await res.json();
  return { id: 1, title: "fffwss", data: res.statusCode };
}

async function getArtistAlbums(username: string) {
  const res = await fetcher("/test", { next: { revalidate: 30 } });

  // const posts = await res.json();
  return { id: 1, title: "fffwss", data: res.statusCode };
}

export default async function AdPage({ params: { username = "" } }) {
  const artistData = getArtist(username);
  const albumsData = getArtistAlbums(username);

  // Wait for the promises to resolve
  const [artist, albums] = await Promise.all([artistData, albumsData]);

  return <div>{albums.data}</div>;
}
