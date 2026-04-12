import styles from './about.module.css';

export default function AboutPage() {
  const faqs = [
    { q: "Apa arti nama 'Core Pawas'?", a: "Core melambangkan fondasi logika IT (coding) dan stabilitas finansial. Pawas adalah panggilan personal saya, melambangkan bimbingan yang bersahabat dan personal." },
    { q: "Apakah jasa web terbuka untuk luar kota?", a: "Tentu, kami melayani klien dari mana saja secara jarak jauh dengan proses yang transparan dan profesional." },
    { q: "Berapa biaya bergabung di komunitas trading?", a: "Bergabung melalui IB XM Core Pawas tidak dipungut biaya. Fokus kami adalah tumbuh bersama melalui edukasi dan ekosistem yang sehat." },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.bgOverlay}></div>
      <section className={styles.intro}>
        <div className={styles.introText}>
          <h1 className={styles.title}>Di Jantung <br/><span className="gradientText">Pertumbuhan.</span></h1>
          <p className={styles.bio}>
            Halo, saya **Pawas**. Seorang mahasiswa IT yang mendalami software development sekaligus praktisi di pasar finansial. 
            Core Pawas lahir untuk menjembatani dua dunia: presisi pemrograman dan peluang di market.
          </p>
          <p className={styles.bio}>
            Visi saya adalah membangun ekosistem di mana setiap anggotanya bisa berkembang secara digital dan finansial secara bersamaan.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <h2 className={styles.sectionTitle}>Nilai Komunitas</h2>
        <div className={styles.valueGrid}>
          <div className={`${styles.valueCard} bento`}>
            <h3>Berbagi Tanpa Batas</h3>
            <p>Di keluarga Core Pawas, pengetahuan adalah aset bersama yang terus dipupuk.</p>
          </div>
          <div className={`${styles.valueCard} bento`}>
            <h3>Disiplin Logika</h3>
            <p>Baík dalam barisan kode maupun pergerakan harga, disiplin adalah kunci kesuksesan.</p>
          </div>
          <div className={`${styles.valueCard} bento`}>
            <h3>Hasil Nyata</h3>
            <p>Kami berorientasi pada eksekusi: website yang berjalan dan portofolio yang tumbuh.</p>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <h2 className={styles.sectionTitle}>Pertanyaan Umum</h2>
        <div className={styles.faqList}>
          {faqs.map((f, idx) => (
            <div key={idx} className={`${styles.faqItem} glass`}>
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
