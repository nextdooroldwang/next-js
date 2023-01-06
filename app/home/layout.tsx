import HomeLayoutComponent from "@/components/common/layout/home";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayoutComponent>{children}</HomeLayoutComponent>;
}
