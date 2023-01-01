import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex-container footer">
            <span className="footer__find">find me in:</span>
            <nav className="flex-container">
                <li className="navbar__a"><Link href={'/'}>Twitter</Link></li>
                <li className="navbar__a"><Link href={'/'}>Linked-in</Link></li>
                <li className="navbar__a navbar__projects"><Link href={'/'}>Github</Link></li>
            </nav>
            <span className="footer__lang">lang</span>
        </footer>
    )
}