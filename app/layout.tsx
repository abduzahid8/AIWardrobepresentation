import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Fashion OS - $10B Market Opportunity',
  description: 'Shazam for Style.  Transform how 2B people shop for clothes.  AI500 Stage 1 Winner.',
  keywords: 'AI, Fashion, Startup, Creator Mode, Vector Search, Llama 3',
  openGraph: {
    title: 'AI Fashion OS - Revolutionary Fashion Platform',
    description: 'Turn any creator outfit into your perfect look in seconds.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}