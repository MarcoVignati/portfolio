import './PageHeader.scss';

export default function PageHeader() {
  return (
    <header className="header">
      <span>marco-vignati</span>
      <nav className="flex">
        <li><a href="/">_hello</a></li>
        <li><a href="/about-me">_about-me</a></li>
        <li><a href="/projects" className="projects">_projects</a></li>
        <li><a href="/contact-me" className="contact">_contact-me</a></li>
      </nav>
    </header>
  )
}