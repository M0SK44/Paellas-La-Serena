import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Importamos la fuente Poppins con varios grosores
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Paellas La Serena - La Combinación Perfecta de Sabor y Armonía",
  description: "Auténticas paellas españolas con mariscos frescos. Delivery en La Serena y Coquimbo.",
  generator: "M0SK4",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
