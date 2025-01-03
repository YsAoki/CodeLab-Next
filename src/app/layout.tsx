import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "reset-css";
import AppFooter from "./components/(shared)/App/AppFooter";
import AppHeader from "./components/(shared)/App/AppHeader";
import AppProvider from "./components/(shared)/App/AppProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "MY SCHEDULE",
  description: "Next JSで作成されたスケジュール管理アプリケーションです"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppHeader />
        <AppProvider>{children}</AppProvider>
        <AppFooter />
      </body>
    </html>
  );
}
