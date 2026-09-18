import Link from "next/link";
import { profile } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="portfolio-container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Practical systems. Meaningful progress.</p>
        <div><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><Link href="/terms">Terms</Link><a href="#main">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
