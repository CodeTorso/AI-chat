import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "~/components/themeProvider";
import { Toaster } from "~/components/ui/toaster";
import Head from "next/head";

export const metadata = {
  title: "AI Bot",
  description: "Generated by mind of a simple kid.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        forcedTheme="dark"
      >
        <body className="min-h-screen bg-gray-950">
          {children}
        </body>
        <Toaster />
      </ThemeProvider>
    </html>
  );
}
