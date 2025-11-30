import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Fashion OS - Shazam for Style",
  description: "The only platform combining Generative AI, Computer Vision, and Social Graphs for personal styling.",
  keywords: "AI Fashion, Styling, Creator Mode, TikTok, Instagram, Fashion Tech",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}