import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import VerbattleChat from "../VerbattleChat";
import ContentProtection from "../components/verbattle/ContentProtection";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Verbattle",
  description: "Verbattle-inspired landing page built with Next.js",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <ContentProtection />
        {children}
        <VerbattleChat />
      </body>
    </html>
  );
}
