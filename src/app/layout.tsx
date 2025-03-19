import { ThemeProvider } from 'next-themes';
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from './footer'
import { Header } from './header'
import 'typeface-roboto';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jarwin Jeo Diño",
  description: "A goal-oriented and results-driven Bachelor of Computer Science graduate who exerts optimal effort in providing the highest standard of service at all times.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="profile.png" type="image/x-icon"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="min-h-screen w-full bg-zinc-100/90 dark:bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-950 tracking-tight antialiased" >
            <Header/>
            {children}
            <Footer />
          </div>
          
          </ThemeProvider>
      </body>
    </html>
  );
}
