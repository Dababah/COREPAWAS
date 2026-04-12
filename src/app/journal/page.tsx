import styles from './journal.module.css';

export default function JournalPage() {
  const posts = [
    { category: "Market", title: "Analisis XAU/USD: Mengapa Psikologi Lebih Penting Dari Data?", date: "12 April 2026" },
    { category: "Tech", title: "Next.js 16: Fitur Baru yang Mengubah Cara Kita Membangun Web Apps", date: "10 April 2026" },
    { category: "Market", title: "Navigasi BTC di Tengah Volatilitas Global Tahun 2026", date: "05 April 2026" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.bgJournal}></div>
      <header className={styles.header}>
        <h1 className={styles.title}>Core <span className="gradientText">Jurnal</span></h1>
        <p className={styles.subtitle}>Berbagi wawasan seputar teknologi web dan strategi pasar finansial terbaru.</p>
      </header>

      <section className={styles.postGrid}>
        {posts.map((p, idx) => (
          <div key={idx} className={`${styles.postCard} bento`}>
            <span className={styles.category} data-cat={p.category}>{p.category}</span>
            <span className={styles.date}>{p.date}</span>
            <h3>{p.title}</h3>
            <a href="#" className={styles.readMore}>Baca Selengkapnya →</a>
          </div>
        ))}
      </section>

      <section className={styles.comingSoon}>
        <p>Edisi PDF Modul Trading sedang dipersiapkan khusus untuk anggota baru.</p>
      </section>
    </div>
  );
}
