import { Providers } from "../components/client/layout/provider";

import "../styles/globals.css";
import { Azeret_Mono } from "@next/font/google";

const inter = Azeret_Mono({ variable: "--font-momo" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
