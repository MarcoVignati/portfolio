import './about.scss'

import Folder1 from '@/components/icons/folders/Folder1'
import Folder2 from '@/components/icons/folders/Folder2'
import Folder3 from '@/components/icons/folders/Folder3'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='about_page'>
      <aside className='about_aside'>
        <a href="/about-me/bio"><Folder1 /> bio</a>
        <a href="/about-me/interests"><Folder2 /> interests</a>
        <a href="/about-me/education"><Folder3 /> education</a>
      </aside>
      <section>
        {children}
      </section>
    </section>
  )
}