"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link
          className="wordmark"
          href="/"
          aria-label="Softek Labs home"
          onClick={close}
        >
          <Image
            src="/images/softek-brand-logo.png"
            alt="Softek Labs"
            width={1024}
            height={174}
            className="brand-logo"
            priority
            sizes="(max-width: 600px) 175px, 230px"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#services">What we do</Link>
          <Link href="/#approach">How we work</Link>
          <Link href="/#work">Our work</Link>
          <Link href="/#faqs">FAQs</Link>
        </nav>
        <Link className="button button-dark nav-cta" href="/submit-requirement">
          Let’s talk <ArrowUpRight size={17} />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav shell"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
          }}
        >
          <Link onClick={close} href="/#services">
            What we do
          </Link>
          <Link onClick={close} href="/#approach">
            How we work
          </Link>
          <Link onClick={close} href="/#work">
            Our work
          </Link>
          <Link onClick={close} href="/#faqs">
            FAQs
          </Link>
          <Link
            className="button button-blue"
            onClick={close}
            href="/submit-requirement"
          >
            Let’s talk <ArrowUpRight size={18} />
          </Link>
        </nav>
      )}
    </header>
  );
}
