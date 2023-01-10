import HomeLayoutComponent from "@/components/common/layout/home";

async function getPosts() {}

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayoutComponent>{children}</HomeLayoutComponent>;
}
