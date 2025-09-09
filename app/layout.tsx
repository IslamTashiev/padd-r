import "./globals.css";
import "./rainbowkit.css";
import type { Metadata } from "next";
import { Urbanist, Unbounded } from "next/font/google";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/theme-provider";
import { RainbowProvider } from "@/components/providers/rainbow-provider";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-unbounded",
});

const grtsk = localFont({
  src: "../public/fonts/grtsk-tera-8.ttf",
  variable: "--font-grtsk",
});

export const metadata: Metadata = {
  title: "PADD-R Token - Drive, Dine, Stay",
  description:
    "Your key to real-world rewards in Dubai and beyond. Premium utility token for exclusive access to luxury services.",
  keywords:
    "PADD-R, utility token, Dubai, luxury services, NFT, staking, rewards",
  openGraph: {
    title: "PADD-R Token - Drive, Dine, Stay",
    description: "Your key to real-world rewards in Dubai and beyond.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PADD-R Token - Drive, Dine, Stay",
    description: "Your key to real-world rewards in Dubai and beyond.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} ${unbounded.variable} ${grtsk.variable} font-sans bg-black text-white antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <RainbowProvider>{children}</RainbowProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
