import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bli partner till Hittarps Ridklubb | Företag & Sponsring',
  description: 'Bli partner till Hittarps Ridklubb och stötta lokal barn- och ungdomsidrott i Helsingborg. Läs om 1975-klubben och våra partnerskap.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sv"><body>{children}</body></html>
}
