'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Digital', path: '/digital' },
    { name: 'Financial', path: '/financial' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarPill}>
        <div className={styles.logo}>
          <Link href="/">
            C<span>P</span>
          </Link>
        </div>
        <div className={styles.links}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`${styles.link} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className={styles.action}>
          <a href="https://wa.me/yournumber" className={styles.btnNav}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
