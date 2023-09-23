import '@/styles/globals.scss';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marco Vignati',
  description: "Marco Vignati's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='page-wrapper'>
          <main className='content-wrapper'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
