import './page.scss';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='projects_layout'>
      <aside className="projects_aside">
        <input type="checkbox" /><br></br><br></br>
        <input type="checkbox" /><br></br><br></br>
        <input type="checkbox" /><br></br><br></br>
        <input type="checkbox" /><br></br><br></br>
        <input type="checkbox" /><br></br><br></br>
      </aside>
      <section>
        <div className="projects_grid">
          {children}
        </div>
      </section>
    </main>
  )
}