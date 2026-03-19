import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nami Sushi | Modern Sushi Landing",
  description:
    "Frontend scaffold for a youthful, modern sushi landing page with combo-first storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
