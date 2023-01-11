import "server-only";
import HomeLayoutComponent from "@/components/client/layout/home";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayoutComponent>{children}</HomeLayoutComponent>;
}
