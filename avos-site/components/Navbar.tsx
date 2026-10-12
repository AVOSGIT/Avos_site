"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { openContactMail } from "@/lib/contact";

const navLinks = [
  { label: "Terminal", href: "#terminal-demo" },
  { label: "Pillars", href: "#pillars" },
  { label: "Architecture", href: "#architecture" },
  { label: "Solutions", href: "#solutions" },
  { label: "Specs", href: "#specs" },
  { label: "Compliance", href: "#compliance" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

/** Smooth-scroll to a hash target, offsetting for the fixed navbar. */
function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  /* Scroll-spy via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visible.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
          let best = "";
          let bestRatio = 0;
          visible.forEach((ratio, key) => {
            if (ratio > bestRatio) { bestRatio = ratio; best = key; }
          });
          if (best) setActiveId(best);
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin: "-70px 0px 0px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Scrolled state for glass background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    openContactMail("Demo Request - AVOS IoT Platform");
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label="AVOS IoT Logo">
              <title>AVOS IoT Logo</title>
              <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" opacity="0.9"/>
              <rect x="13" y="2" width="9" height="9" rx="2" fill="currentColor" opacity="0.5"/>
              <rect x="2" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.5"/>
              <rect x="13" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.9"/>
            </svg>
          </span>
          <span className={styles.logoText}>AVOS</span>
          <span className={styles.logoSub}>AI · IIoT Platform</span>
        </a>

        {/* Desktop Nav */}
        <ul className={styles.links}>
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                  onClick={(e) => { e.preventDefault(); scrollToHash(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA */}
        <div className={styles.right}>
          <a
            href="#contact"
            className={`btn btn-primary ${styles.desktopCta}`}
            id="nav-request-demo"
            onClick={handleDemoClick}
          >
            Request a Demo
          </a>
          {/* Mobile Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="nav-menu-toggle"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.mobileLink} ${isActive ? styles.linkActive : ""}`}
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToHash(link.href); }}
              >
                {link.label}
              </a>
            );
          })}
          <div className={styles.mobileCta}>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={handleDemoClick}
            >
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
