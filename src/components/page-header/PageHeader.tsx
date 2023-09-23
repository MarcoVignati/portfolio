'use client'

import './PageHeader.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function PageHeader() {

  const pathname = usePathname();

  return (
    <header className="header">
      <span>marco-vignati</span>
      <nav className="flex">
        <li><Link className={pathname == "/" ? "active" : ""} href="/">_hello</Link></li>
        <li><Link className={pathname == "/about-me" ? "active" : ""} href="/about-me">_about-me</Link></li>
        <li><Link className={pathname == "/projects" ? "active" : ""} id="projects" href="/projects">_projects</Link></li>
        <li><Link className={pathname == "/contact-me" ? "active" : ""} id="contact" href="/contact-me">_contact-me</Link></li>
      </nav>
    </header>
  )
}