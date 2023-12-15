import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'
import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import NavBar from '@/components/navbar'
const orbitron = Orbitron({  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marvel App',
  description:
    'Marvel App is a web application that allows users to view information about Marvel characters, comics, and series.',
}





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} bg-no-repeat bg-marvel-red bg-contain `} >
        <CssBaseline />
        <NavBar />
        <div className=' '>

          <AppRouterCacheProvider >{children}</AppRouterCacheProvider>
        </div>
      </body>
    </html>
  )
}
