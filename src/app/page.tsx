'use client';

import Image from 'next/image';
import Link from 'next/link';
import Ticker from '@/components/Ticker';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Ticker />
      <div className={styles.gridOverlay}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="fade-in">
          <div className={styles.badge}>Selamat Datang di Masa Depan Anda</div>
          <h1 className={styles.title}>
            Mau Bisnis Lebih Modern & Punya <span className="gradientText">Penghasilan Tambahan</span> yang Terarah?
          </h1>
          <div className={styles.story}>
            <p>
              "Selamat datang! Saya <strong>Fawwas</strong>. Di sini, saya membantu Anda membereskan dua hal penting: 
              membuat website keren supaya jualan Anda makin laris, dan berbagi cara pintar mengelola uang di dunia 
              trading agar tidak sekadar &apos;coba-coba&apos;. Kita bangun pelan-pelan, dengan cara yang benar dan sistem yang kuat."
            </p>
          </div>
          
          <div className={styles.ctaGroup}>
            <Link href="https://wa.me/yourphone" className={styles.btnGreen}>
              Mas Fawwas, Saya Mau Tanya Soal Website
            </Link>
            <Link href="https://t.me/yourgroup" className={styles.btnGold}>
              Saya Mau Belajar Trading yang Masuk Akal
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Analysis */}
      <section className={styles.problemSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Analysis</span>
          <h2>Pernah Merasakan Ini?</h2>
          <p>"Kadang, Jalan Sendirian Itu Memang Berat..."</p>
        </div>
        
        <div className={styles.problemGrid}>
          <div className={`${styles.problemCard} bento`}>
            <h3>Jualan Capek di Chat Terus?</h3>
            <p>"Punya produk bagus tapi jualan cuma lewat status WA atau chat manual? Capek kan balas satu-satu? Calon pembeli juga sering ragu kalau bisnis Anda belum punya &apos;rumah resmi&apos; di internet."</p>
          </div>
          <div className={`${styles.problemCard} bento`}>
            <h3>Takut Teknologi (Gaptek)?</h3>
            <p>"Mau bikin web tapi takut harganya selangit atau takut ditipu karena nggak paham istilah teknis? Di sini, saya jelaskan semuanya pakai bahasa manusia. Anda nggak perlu belajar coding, biar saya yang kerjakan."</p>
          </div>
          <div className={`${styles.problemCard} bento`}>
            <h3>Trauma Investasi Bodong?</h3>
            <p>"Pernah ikut-ikutan trading karena iming-iming cepat kaya, tapi ujung-ujungnya malah modal habis? Pasar Emas dan Bitcoin itu kejam kalau kita cuma modal tebak-tebakan. Anda butuh strategi dan peta."</p>
          </div>
        </div>
      </section>

      {/* Digital Engine Solution */}
      <section className={styles.solutionSection}>
        <div className={styles.solutionContent}>
          <div className={styles.solutionText}>
            <span className={styles.badge}>01 — DIGITAL ENGINE</span>
            <h2>Membangun Toko Digital Anda</h2>
            <p>Saya nggak cuma bikin website biar &apos;kelihatan bagus&apos;, tapi supaya website itu benar-benar membantu bisnis Anda.</p>
            
            <div className={styles.featureList}>
              <div className={`${styles.featureItem} glass`}>
                <h4>Anti Lemot</h4>
                <p>Website terbuka kurang dari 2 detik dengan teknologi Next.js.</p>
              </div>
              <div className={`${styles.featureItem} glass`}>
                <h4>HP Friendly</h4>
                <p>Tampilan tetap cantik dan rapi di layar HP sekecil apa pun.</p>
              </div>
              <div className={`${styles.featureItem} glass`}>
                <h4>Keamanan Tinggi</h4>
                <p>Data Anda dan pelanggan aman dari gangguan orang iseng.</p>
              </div>
              <div className={`${styles.featureItem} glass`}>
                <h4>Pantau Sendiri</h4>
                <p>Ganti harga atau foto dengan sekali klik. Gampang banget!</p>
              </div>
            </div>

            <div style={{ marginTop: '40px', display: 'flex', gap: '20px', opacity: 0.5 }}>
               <Image src="/file.svg" alt="Next.js" width={30} height={30} />
               <Image src="/window.svg" alt="React" width={30} height={30} />
               <Image src="/globe.svg" alt="Supabase" width={30} height={30} />
            </div>
          </div>
          <div className={styles.solutionVisual}>
            <Image src="/hero-core.png" alt="Digital Engine" fill className={styles.visualImage} />
          </div>
        </div>
      </section>

      {/* Financial Alpha Solution */}
      <section className={styles.solutionSection} style={{ background: 'rgba(255,138,0,0.02)' }}>
        <div className={styles.solutionContent} style={{ direction: 'rtl' }}>
          <div className={styles.solutionText} style={{ direction: 'ltr' }}>
            <span className={styles.badge} style={{ color: 'var(--accent-gold)', borderColor: 'var(--accent-gold)' }}>02 — FINANCIAL ALPHA</span>
            <h2>Navigasi Finansial</h2>
            <p>Trading itu bukan judi, trading itu dagang. Bedanya, yang kita dagangkan adalah nilai mata uang, emas, atau bitcoin.</p>
            
            <div className={styles.expertPoints} style={{ marginTop: '30px' }}>
              <div className={styles.expertPoint}>
                <h4>Strategi yang Jujur</h4>
                <p>"Saya nggak janjikan Anda kaya dalam semalam. Tapi saya ajarkan gimana cara baca grafik yang benar."</p>
              </div>
              <div className={styles.expertPoint}>
                <h4>Terpercaya (XM)</h4>
                <p>"Saya pribadi pakai XM karena mereka jujur dalam urusan uang dan sudah terpercaya bertahun-tahun."</p>
              </div>
              <div className={styles.expertPoint}>
                <h4>Bimbingan Komunitas</h4>
                <p>"Saya temani Anda di grup supaya Anda nggak merasa berjuang sendirian di market yang keras."</p>
              </div>
            </div>
          </div>
          <div className={styles.solutionVisual}>
             <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, var(--accent-gold) 0%, transparent 70%)', opacity: 0.1 }}></div>
             <Image src="/hero-core.png" alt="Financial Alpha" fill className={styles.visualImage} />
          </div>
        </div>
      </section>

      {/* About Fawwas */}
      <section className={styles.expertSection}>
        <div className={styles.expertGrid}>
          <div style={{ position: 'relative', height: '500px' }}>
            <Image src="/pawas.png" alt="Fawwas" fill style={{ objectFit: 'cover', borderRadius: '32px' }} />
          </div>
          <div className={styles.expertInfo}>
            <span className={styles.badge}>Founder</span>
            <h2>Kenapa Harus Sama Fawwas?</h2>
            <div className={styles.expertPoints}>
              <div className={styles.expertPoint}>
                <h4>Saya Praktisi Langsung</h4>
                <p>"Website ini saya buat sendiri, trading ini saya lakukan sendiri. Pengalaman nyata, bukan teori."</p>
              </div>
              <div className={styles.expertPoint}>
                <h4>Keamanan Prioritas</h4>
                <p>"Keahlian saya di keamanan jaringan saya terapkan ke website Anda. Tidur tenang, data aman."</p>
              </div>
              <div className={styles.expertPoint}>
                <h4>Pelayanan Teman</h4>
                <p>"Anda bicara langsung dengan saya di Yogyakarta. Santai, sopan, dan siap diskusi kapan saja."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className={styles.valueSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Exclusive Bonus</span>
          <h2>Hadiah Spesial Buat Anda Hari Ini</h2>
          <p>"Kalau Anda Gabung Sekarang, Ada Bonusnya:"</p>
        </div>
        
        <div className={styles.bonusGrid}>
          <div className={`${styles.bonusCard} glass`}>
            <h3>Ngobrol Strategi Gratis</h3>
            <p>Konsultasi 15-20 menit lewat telepon atau chat untuk masa depan bisnis Anda.</p>
          </div>
          <div className={`${styles.bonusCard} glass`}>
            <h3>PDF &apos;The Core Blueprint&apos;</h3>
            <p>Panduan dasar trading bahasa gampang dan langkah jelas untuk pemula.</p>
          </div>
          <div className={`${styles.bonusCard} glass`}>
            <h3>Grup Keluarga Core Pawas</h3>
            <p>Akses ke grup Telegram untuk update info teknologi dan peluang trading harian.</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <h3>CORE PAWAS © 2026</h3>
          <p>"Berdomisili di Yogyakarta, siap menjangkau Anda di mana pun berada."</p>
        </div>
        <div style={{ textAlign: 'right', opacity: 0.6 }}>
           <p>Building your digital and financial future with discipline and logic.</p>
        </div>
      </footer>
    </main>
  );
}
