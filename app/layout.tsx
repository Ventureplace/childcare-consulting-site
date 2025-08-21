import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Family Childcare Consulting for Children with Special Needs | Early Intervention Support",
  description:
    "Expert family childcare consulting specializing in special needs children. Early intervention strategies, social emotional development, speech & language, behavior support, early math & literacy, and sensory processing for home daycare providers.",
  keywords: "family childcare consulting, special needs children, early intervention strategies, social emotional development, speech and language, behavior intervention support, early math and literacy, sensory processing, home daycare, childcare provider training",
  openGraph: {
    title: "Family Childcare Consulting for Children with Special Needs",
    description: "Expert consulting and early intervention strategies for family childcare providers supporting children with special needs.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Childcare Consulting for Children with Special Needs",
    description: "Expert consulting and early intervention strategies for family childcare providers supporting children with special needs.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
