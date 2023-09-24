import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GuessColor',
  description: 'Play with colours! Choose the correct colour and get points. You can copy the colour and use wherever you want',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`bg-rose-200 ${inter.className}`}>{children}</body>
    </html>
  )
}
