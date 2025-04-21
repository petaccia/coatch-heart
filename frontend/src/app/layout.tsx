import type { Metadata } from "next";
import { Inter, Montserrat, Raleway, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coach Heart",
  description: "Application de coaching de football personnalisee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${montserrat.variable} ${raleway.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header />
          <main className="min-h-screen pt-0 lg:pt-16 pb-16 lg:pb-0">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}