import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PRECIMET H.C.E. - Usługi kooperacji i outsourcing produkcji',
  description: 'Profesjonalne usługi kooperacyjne i outsourcing produkcji. Laserowe cięcie blach, gięcie, obróbka CNC, spawanie i montaż.',
  keywords: 'laserowe cięcie, obróbka CNC, spawanie, montaż, outsourcing produkcji, Łódź',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
