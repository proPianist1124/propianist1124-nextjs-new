import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "proPianist1124",
  description: "cool nextjs and sveltekit developer fr fr",
}

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang = "en">
      <body className = {inter.className}>
        <nav>
          <Link href = "/" style = {{ color: "var(--color)" }}>
            <h2>Title</h2>
          </Link>
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href = "/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}

export default RootLayout