import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex-container footer">
            <span className="footer__find">find me in:</span>
            <nav className="flex-container">
                <li className="navbar__a"><Link href={'/'}>_twitter</Link></li>
                <li className="navbar__a"><Link href={'/'}>_linked-in</Link></li>
                <li className="navbar__a navbar__projects"><Link href={'/'}>_github</Link></li>
            </nav>
            <span className="footer__lang">lang</span>
        </footer>
    )
}