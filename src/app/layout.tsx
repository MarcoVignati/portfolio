import '@/styles/globals.scss';

import PageFooter from '@/components/page-footer/PageFooter';
import PageHeader from '@/components/page-header/PageHeader';

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
          <PageHeader />
          <main className='content-wrapper'>
            {children}
          </main>
          <PageFooter />
        </div>
      </body>
    </html>
  )
}
