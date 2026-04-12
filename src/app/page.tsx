'use client';

import Image from 'next/image';
import Ticker from '@/components/Ticker';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Ticker />
      
      {/* Dynamic Background Elements */}
      <div className={styles.gridOverlay}></div>
      <div className="glow" style={{ top: '5%', left: '15%', width: '70vw', height: '70vh', background: 'radial-gradient(circle, rgba(255, 59, 59, 0.08) 0%, transparent 60%)' }}></div>
      <div className="glow" style={{ bottom: '-10%', right: '5%', width: '60vw', height: '60vh', background: 'radial-gradient(circle, rgba(255, 138, 0, 0.05) 0%, transparent 60%)' }}></div>

      {/* Hero Section */}
      <section className={`${styles.hero} fade-in`}>
        <div className={styles.heroTop}>
          <div className={styles.badge}>Pusat Pertumbuhan Digital & Finansial</div>
          <h1 className={styles.title}>
            Arsitek <br /> 
            <span className="gradientText">Digital & Finansial</span> <br />
            Masa Depan.
          </h1>
          <p className={styles.description}>
            Kami merancang dan membangun solusi teknologi tinggi dengan pendekatan personal. 
            Menyatukan presisi IT dengan penguasaan finansial untuk melejitkan potensi Anda.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/digital" className={styles.btnPrimary}>Jelajahi Layanan</Link>
            <Link href="/financial" className={styles.btnSecondary}>Pusat Market</Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <Image 
            src="/hero-core.png" 
            alt="Visual Core Pawas" 
            width={1200} 
            height={800} 
            priority
            className={styles.mainImage}
          />
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className={styles.bentoSection}>
        <div className={styles.bentoGrid}>
          {/* Digital Core */}
          <div className={`${styles.bentoMain} bento`}>
            <div className={styles.gridPattern}></div>
            <div className={styles.bentoContent}>
              <span className={styles.bentoLabel}>01 — DIGITAL CORE</span>
              <h2>Membangun <br/>Masa Depan Web.</h2>
              <p>Dari landing page konversi tinggi hingga aplikasi web kelas industri. Kami membangun mesin yang menggerakkan bisnis Anda.</p>
              <Link href="/digital" className={styles.bentoLink}>Lihat Proyek →</Link>
            </div>
          </div>

          {/* Stats */}
          <div className={`${styles.bentoStat} bento`}>
            <h3>95%</h3>
            <p>Tingkat Keberhasilan</p>
          </div>
          <div className={`${styles.bentoStat} bento`} style={{ borderColor: 'var(--accent-orange)' }}>
            <h3>120+</h3>
            <p>Member Aktif</p>
          </div>

          {/* Financial Hub */}
          <div className={`${styles.bentoAlt} bento`}>
            <div className={styles.chartOverlay}></div>
            <div className={styles.bentoContent}>
              <span className={styles.bentoLabel}>02 — FINANCIAL HUB</span>
              <h2>Penguasaan <br/>Finansial.</h2>
              <p>Sistem trading strategis untuk XAU/USD dan BTC. Bergabunglah dengan komunitas yang dibangun di atas data dan disiplin.</p>
              <Link href="/financial" className={styles.bentoLink}>Masuk Hub →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className={styles.philosophySection}>
        <div className={`${styles.philosophyCard} glass`}>
          <div className={styles.philosophyHeader}>
             <div className={styles.quoteIcon}>“</div>
             <h2>Di Core Pawas, Anda adalah bagian dari ekosistem tempat kita berbagi teknologi dan peluang untuk tumbuh bersama.</h2>
          </div>
          <div className={styles.founder}>
            <div className={styles.avatar}></div>
            <div>
              <strong>Pawas</strong>
              <span>Founder & Lead Architect</span>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <h3>CORE PAWAS</h3>
          <p>© 2026. Hak Cipta Dilindungi.</p>
        </div>
        <div className={styles.footerLinks}>
          <Link href="/about">Tentang</Link>
          <Link href="/journal">Jurnal</Link>
          <a href="#">Kontak</a>
        </div>
      </footer>
    </main>
  );
}
