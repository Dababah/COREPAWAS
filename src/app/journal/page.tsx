import Link from 'next/link';
import styles from './journal.module.css';

export default function JournalPage() {
  const posts = [
    {
      category: "💻 Tech & Code",
      date: "Des 12, 2026",
      readTime: "5 min read",
      title: "Kenapa Website yang Kencang Lebih Penting daripada Website yang Ribet?",
      excerpt: "Banyak orang pengen webnya penuh animasi, tapi lupa kalau pelanggan bakal kabur kalau loadingnya lebih dari 3 detik. Di jurnal ini, saya share gimana saya optimasi sistem supaya tetap ringan tapi kelihatan mewah...",
      insight: "1% lebih cepat, 100% lebih nyaman buat pelanggan."
    },
    {
      category: "📊 Market Review",
      date: "Des 08, 2026",
      readTime: "8 min read",
      title: "Evaluasi XAU/USD Minggu Ini: Belajar dari Kesalahan Entry.",
      excerpt: "Minggu ini saya sempat loss karena kegabah entry sebelum konfirmasi. Di sini saya bedah kenapa itu terjadi dan gimana saya perbaiki manajemen risikonya buat minggu depan. Trading itu maraton, bukan sprint...",
      insight: "Rugi itu biaya sekolah, yang penting nggak boleh jatuh di lubang yang sama."
    },
    {
      category: "🧠 Mindset & Habits",
      date: "Des 05, 2026",
      readTime: "4 min read",
      title: "Gym, Koding, dan Trading: Tiga Hal yang Butuh Disiplin yang Sama.",
      excerpt: "Nggak ada otot yang jadi dalam sehari, nggak ada web yang sempurna dalam sekejap, dan nggak ada trader pro tanpa ribuan jam di depan chart. Ini alasan kenapa saya pilih konsistensi daripada intensitas sesaat...",
      insight: "Konsistensi adalah mata uang sesungguhnya di dunia pertumbuhan."
    }
  ];

  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.hero} fade-in`}>
        <h1>Jurnal <span className="gradientText">Core Pawas</span></h1>
        <p className={styles.subtitle}>
          "Di sini saya mendokumentasikan apa yang saya pelajari setiap hari. 
          Mulai dari urusan koding, keamanan sistem, sampai evaluasi trading—baik pas lagi untung maupun pas lagi ruginya. 
          Semua saya tulis jujur apa adanya."
        </p>
      </section>

      {/* Category Filter */}
      <div className={styles.filter}>
        <button className={styles.filterBtnActive + ' ' + styles.filterBtn}>All Posts</button>
        <button className={styles.filterBtn}>Tech & Code</button>
        <button className={styles.filterBtn}>Market Review</button>
        <button className={styles.filterBtn}>Mindset & Habits</button>
      </div>

      {/* Post List */}
      <section className={styles.postList}>
        {posts.map((post, idx) => (
          <article key={idx} className={styles.postCard}>
            <div className={styles.postMeta}>
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2>{post.title}</h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <div className={styles.keyInsight}>
              <strong>Key Insight:</strong> {post.insight}
            </div>
          </article>
        ))}
      </section>

      {/* Footer Section */}
      <section className={styles.footerSection}>
        <p>
          "Jurnal ini adalah bukti bahwa saya juga manusia yang terus bertumbuh. 
          Kalau ada catatan yang bermanfaat, silakan diambil. 
          Kalau mau diskusi soal isinya, jangan sungkan buat sapa saya lewat WhatsApp!"
        </p>
        <Link href="https://wa.me/yourphone" className="btnGreen" style={{ display: 'inline-block', marginTop: '40px', background: '#25d366', color: '#000', padding: '16px 32px', borderRadius: '12px', fontWeight: '800' }}>
          Ngobrol di WhatsApp
        </Link>
      </section>
    </main>
  );
}
