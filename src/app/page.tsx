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

      {/* Floating Buttons */}
      <div className={styles.floatingContainer}>
        <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer" className={`${styles.floatBtn} ${styles.floatWa}`} title="Tanya Mas Fawwas (Web)">
           <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="https://t.me/yourgroup" target="_blank" rel="noopener noreferrer" className={`${styles.floatBtn} ${styles.floatTg}`} title="Join Grup Belajar (Trading)">
           <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.891 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.257.257-.527.257l.215-3.048 5.548-5.013c.242-.213-.054-.331-.376-.117L8.396 11.23 5.44 10.308c-.642-.2-.656-.642.134-.95l11.566-4.458c.535-.195 1.003.125.851.721z"/></svg>
        </a>
      </div>

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
