import '@/styles/globals.scss';
import '@/styles/prism-theme.css';

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
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
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
