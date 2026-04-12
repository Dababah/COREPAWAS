import styles from './digital.module.css';
import Link from 'next/link';

export default function DigitalPage() {
  const services = [
    { title: "Landing Page", desc: "Desain konversi tinggi untuk produk atau personal branding Anda." },
    { title: "Web Application", desc: "Sistem kompleks berbasis Next.js dengan integrasi database performa tinggi." },
    { title: "Integrasi API", desc: "Menghubungkan bisnis Anda dengan ekosistem pembayaran atau penyedia pihak ketiga." },
    { title: "Sistem Kustom", desc: "Solusi unik seperti QR Order Restoran atau dashboard data internal." }
  ];

  const portfolio = [
    { title: "Pengilon Restaurant", tech: "React, Next.js, Framer Motion", desc: "Sistem pemesanan QR Digital dengan UI premium dan terminal dapur real-time." },
    { title: "Nostra Order System", tech: "Next.js, Supabase, Midtrans", desc: "Industrial-grade relational order terminal untuk bisnis kuliner modern." },
  ];

  return (
    <div className={styles.container}>
      {/* Background Animated Elements */}
      <div className={styles.bgNodes}></div>
      <div className="glow" style={{ top: '5%', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 59, 59, 0.05) 0%, transparent 70%)' }}></div>

      <header className={styles.header}>
        <div className={styles.badge}>Ekselensi Digital</div>
        <h1 className={styles.title}>Arsitektur <br/> <span className="gradientText">Digital.</span></h1>
        <p className={styles.subtitle}>Kami tidak hanya membangun website; kami membangun fondasi digital untuk pertumbuhan Anda.</p>
      </header>

      <section className={styles.section}>
        <div className={styles.bentoGrid}>
          {services.map((s, idx) => (
            <div key={idx} className={`${styles.serviceCard} bento`}>
              <div className={styles.serviceIcon}>
                <div className={styles.dot}></div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Portofolio <span className="gradientText">Showcase</span></h2>
        <div className={styles.portfolioGrid}>
          {portfolio.map((p, idx) => (
            <div key={idx} className={`${styles.portfolioCard} glass`}>
              <div className={styles.portfolioTag}>{p.tech}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className={styles.portfolioVisual}></div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`${styles.ctaBox} bento`}>
          <h2>Siap Membangun Sesuatu?</h2>
          <p>Konsultasikan ide Anda secara gratis dan dapatkan solusi IT yang solutif.</p>
          <a href="https://wa.me/yournumber" className={styles.waBtn}>
            Mulai Proyek Anda
          </a>
        </div>
      </section>
    </div>
  );
}
