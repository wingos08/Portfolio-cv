import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Quentin Maudry — Portfolio",
  description:
    "Étudiant en 3e année à l'École de Commerce de Gambach. Recherche stage MPC 3+1 — 2026-2027.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${dmSans.variable} h-full`}
    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap" />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  )
}
