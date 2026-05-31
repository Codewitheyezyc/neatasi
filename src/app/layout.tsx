import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminDemoPanel from '@/components/AdminDemoPanel';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Neatasi Oil and Gas Services – Making Energy Accessible, Reliable and Sustainable',
  description: 'Neatasi Oil and Gas Services specializes in high-quality petroleum products, oil refining, petroleum supply, offshore and onshore exploration, and pipeline energy infrastructure globally.',
  keywords: 'Neatasi, Oil and Gas Services, Oil Refining, Petroleum Supply, Energy Solutions, Global Oil Logistics, Offshore Exploration, South Sudan, Nigeria, Dubai UAE, Justin Campbell O.',
  openGraph: {
    title: 'Neatasi Oil & Gas Services',
    description: 'Making Energy Accessible, Reliable and Sustainable across global markets.',
    url: 'https://neatasioilserve.com',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased dark`} style={{ colorScheme: 'dark' }}>
      <body className="min-h-full flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        <ThemeProvider>
          {/* Header Navigation */}
          <Header />
          
          {/* Main Page Layout */}
          <main className="flex-grow pt-24 md:pt-28">
            {children}
          </main>

          {/* Footer Component */}
          <Footer />

          {/* Floating Admin Simulator Panel */}
          <AdminDemoPanel />
        </ThemeProvider>
      </body>
    </html>
  );
}
