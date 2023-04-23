import { getServerSession } from 'next-auth'
import '../styles/globals.css'
import Header from './Header'
import { Providers } from './providers'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = getServerSession()
  return (
    <html>
      <head />
      <body>
        <Providers session={session}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
