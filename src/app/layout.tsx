import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "~/components/themeProvider";
import { Toaster } from "~/components/ui/toaster";

export const metadata = {
  title: "AI Bot",
  description: "Generated by mind of a simple kid.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
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
