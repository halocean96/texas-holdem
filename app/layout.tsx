import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "텍사스 홀덤",
  description: "ai와 함께 하는 텍사스 홀덤",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
