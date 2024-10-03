import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "블로그 만들기",
  description: "블로그 만들기",
  icons: {
    icon: '/png/beulping.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
      >
        {children}
      </body>
    </html>
  );
}
