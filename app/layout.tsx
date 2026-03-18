import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Shruthi Kodati | Portfolio',
  description: 'Full Stack Developer & Computer Science Graduate Student specializing in Machine Learning and Software Engineering.',
  openGraph: {
    title: 'Shruthi Kodati | Portfolio',
    description: 'Full Stack Developer & Computer Science Graduate Student specializing in Machine Learning and Software Engineering.',
    url: 'https://shruthikodati.com',
    siteName: 'Shruthi Kodati Portfolio',
    images: [
      {
        url: 'https://picsum.photos/seed/portfolio/1200/630',
        width: 1200,
        height: 630,
        alt: 'Shruthi Kodati Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shruthi Kodati | Portfolio',
    description: 'Full Stack Developer & Computer Science Graduate Student specializing in Machine Learning and Software Engineering.',
    images: ['https://picsum.photos/seed/portfolio/1200/630'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#0a0a0e] text-zinc-300 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
