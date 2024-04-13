import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { SWRProvider } from '@/components/swr-provider';
import Header from '@/components/Header';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokedex By Albert Charmelo',
  description: 'A simple Pokedex app built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SWRProvider>
      <html lang="es">
        <body className={poppins.className}>
          <Header />
          {children}
        </body>
      </html>
    </SWRProvider>
  );
}
