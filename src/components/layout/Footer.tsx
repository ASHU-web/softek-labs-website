import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services, email } from "@/data/services";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link href="/" className="wordmark footer-wordmark">
              <Image
                src="/images/softek-brand-logo.png"
                alt="Softek Labs"
                width={1024}
                height={174}
                className="brand-logo"
                sizes="230px"
              />
            </Link>
            <p>
              Creative thinking.
              <br />
              Business-building technology.
            </p>
            <a className="email-link" href={`mailto:${email}`}>
              {email} <ArrowUpRight size={16} />
            </a>
          </div>
          <div>
            <h2>Explore</h2>
            <Link href="/#services">What we do</Link>
            <Link href="/#approach">How we work</Link>
            <Link href="/#work">Our work</Link>
            <Link href="/submit-requirement">Start a project</Link>
          </div>
          <div>
            <h2>Our services</h2>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </div>
          <div className="footer-note">
            <span className="status-dot" /> MADE FOR YOUR NEXT CHAPTER
            <p>
              A little more visibility.
              <br />A lot more possibility.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Softek Labs</span>
          <span>Marketing. Content. Technology.</span>
          <div>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-conditions">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
