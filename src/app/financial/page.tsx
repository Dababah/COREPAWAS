import styles from './financial.module.css';

export default function FinancialPage() {
  const steps = [
    { num: "01", title: "Registrasi", desc: "Buka akun riil melalui link IB XM resmi Core Pawas." },
    { num: "02", title: "Verifikasi", desc: "Kirim Account ID Anda ke Telegram pribadi untuk validasi." },
    { num: "03", title: "Terima Hadiah", desc: "Dapatkan Modul Trading PDF Eksklusif dengan wawasan pasar nyata." },
    { num: "04", title: "Gabung Komunitas", desc: "Akses penuh ke Hub Trader Core Pawas / XM." }
  ];

  return (
    <div className={styles.container}>
       {/* Background Animated Elements */}
       <div className={styles.bgCharts}></div>
       <div className="glow" style={{ top: '10%', right: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 138, 0, 0.05) 0%, transparent 70%)' }}></div>

      <header className={styles.header}>
        <div className={styles.badge}>Hub Finansial</div>
        <h1 className={styles.title}>Hub <span className="gradientText">Trading</span> Elit.</h1>
        <p className={styles.subtitle}>Navigasi pasar global dengan sistem canggih dan komunitas yang solid.</p>
      </header>

      <section className={styles.section}>
        <div className={`${styles.pBox} bento`}>
          <div className={styles.pLabel}>FILOSOFI KAMI</div>
          <h2 className="gradientText">Logika di Atas Keberuntungan.</h2>
          <p>
            "Di Core Pawas, kami memandang trading sebagai bisnis performa tinggi. Fokus utama kami adalah Gold (XAU/USD) dan BTC, menggunakan manajemen risiko tingkat lanjut dan sistem berbasis data. Kami tidak berjudi; kami mengeksekusi."
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Perjalanan Onboarding</h2>
        <div className={styles.pathGrid}>
          {steps.map((s, idx) => (
            <div key={idx} className={`${styles.pathCard} glass`}>
              <div className={styles.pathNum}>{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaGrid}>
        <div className={`${styles.ibDetail} bento`}>
           <h3>Kemitraan IB (XM)</h3>
           <p>Bergabunglah dengan jaringan eksklusif dengan bimbingan, pembaruan pasar harian, dan indikator kepemilikan.</p>
           <a href="https://www.xmidbroker.tech/referral?token=ZzxMp7RJS-TWe2LBLUYGZg" target="_blank" rel="noopener noreferrer" className={styles.btnXM}>
            Daftar Akun Sekarang
          </a>
        </div>
        <div className={`${styles.telegramLink} glass`}>
          <h3>Konfirmasi Identitas</h3>
          <p>Setelah mendaftar, kirim ID Anda untuk memulai proses verifikasi.</p>
          <a href="https://t.me/yourtelegram" className={styles.btnTele}>
            Kirim ID ke Telegram
          </a>
        </div>
      </section>
    </div>
  );
}
