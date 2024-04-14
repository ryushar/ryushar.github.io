import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Navbar from "components/nav";

import "styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ryushar.github.io"),
  title: {
    default: "About Me",
    template: "About Me",
  },
  description: "Fullstack developer.",
  openGraph: {
    title: "Tushar",
    description: "Fullstack developer.",
    url: "https://ryushar.github.io",
    siteName: "Tushar",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Tushar",
    card: "summary_large_image",
  },
};

const cx = (...classes: string[]) => classes.filter((x) => x).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
