import './globals.css'

import AppBar from './components/AppBar'
import { SessionProvider } from './stores/SessionProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AppBar />
          <div className="flex flex-row items-center justify-center mt-8">{children}</div>
        </SessionProvider>
      </body>
    </html>
  )
}
