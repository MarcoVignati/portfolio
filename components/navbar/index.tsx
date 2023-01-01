import Link from "next/link"

export default function NavBar() {
    return (
        <header className="flex-container navbar">
            <span className="navbar_name">marco-vignati</span>
            <nav className="flex-container navbar__nav">
                <li className="navbar__a"><Link href={'/'}>_hello</Link></li>
                <li className="navbar__a"><Link href={'/about'}>_about-me</Link></li>
                <li className="navbar__a navbar__projects"><Link href={'/projects'}>_projects</Link></li>
                <li className="navbar__a navbar__contact"><Link  href={'/contact'}>_contact-me</Link></li>
            </nav>
        </header>
    )
}