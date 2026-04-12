import Image from 'next/image';
import Link from 'next/link';
import styles from './financial.module.css';

export default function FinancialPage() {
  return (
    <main className={styles.container}>
      <div className={styles.bgPattern}></div>

      {/* Hero Section */}
      <section className={`${styles.hero} fade-in`}>
        <div className={styles.badge}>FINANCIAL ALPHA (Panduan Trading Cerdas)</div>
        <h1 className={styles.title}>
          Capek Rugi Terus di Market? <br />
          Saatnya Trading Pakai <span className="gradientText">Ilmu,</span> Bukan Pakai <span style={{ color: 'var(--accent-red)' }}>Perasaan.</span>
        </h1>
        <p className={styles.subtitle}>
          "Selamat datang di Core Pawas. Di sini, saya nggak bakal kasih janji muluk soal cepat kaya. 
          Saya di sini buat bantu Anda yang ingin belajar cara mengelola modal secara profesional. 
          Kita bicara strategi yang masuk akal, bukan sekadar keberuntungan."
        </p>
        <Link href="https://t.me/yourgroup" className={styles.goldBtn}>
          Ambil Modul Belajar & Join Komunitas (Telegram)
        </Link>
        <p className={styles.counter}>Sudah 100+ trader bergabung di jalur disiplin ini.</p>
      </section>

      {/* Problem Section */}
      <section className={styles.problemSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>The Reality</span>
          <h2>Mengapa Banyak Orang Gagal & Uangnya Habis?</h2>
        </div>
        
        <div className={styles.problemGrid}>
          <div className={`${styles.problemCard} bento`}>
            <h3>Terjebak &apos;Sinyal&apos; Buta</h3>
            <p>"Ikut grup berbayar yang katanya jago, tapi pas kita ikut malah Margin Call (modal habis). Trading tanpa tahu alasannya itu sama saja seperti nyetir mobil sambil tutup mata."</p>
          </div>
          <div className={`${styles.problemCard} bento`}>
            <h3>Emosi yang Berantakan</h3>
            <p>"Pasar nggak pernah ngancurin uang Anda, emosi Anda yang melakukannya. Takut ketinggalan (FOMO) atau panik adalah penyakit yang harus kita sembuhkan bareng-bareng."</p>
          </div>
          <div className={`${styles.problemCard} bento`}>
            <h3>Pilih Tempat yang Salah</h3>
            <p>"Banyak yang terjebak di broker abal-abal yang susah tarik uang atau harganya dimanipulasi. Memilih kendaraan yang salah bikin Anda nggak akan pernah sampai."</p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className={styles.strategySection}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Our Strategy</span>
          <h2>Ikuti Jejak Si &apos;Ikan Paus&apos; (Pemain Besar)</h2>
          <p>Di Core Pawas, kita pakai logika: bukan indikator warna-warni yang bikin pusing.</p>
        </div>
        
        <div className={styles.bentoGrid}>
          <div className={`${styles.bentoCard} ${styles.bentoMain} bento`}>
            <div className={styles.glowNode}></div>
            <h3>Membaca Struktur Pasar</h3>
            <p>Kita belajar melihat di mana &apos;pemain besar&apos; menaruh uang mereka. Kita ikut arus mereka, bukan melawannya. Presisi adalah segalanya.</p>
          </div>
          <div className={`${styles.bentoCard} bento`}>
            <h3>Aturan Main 1%</h3>
            <p>Hitung risiko secara matematika. Satu kesalahan nggak boleh ngerusak seluruh modal Anda. Kita main panjang, bukan main sekali habis.</p>
          </div>
          <div className={`${styles.bentoCard} bento`}>
            <h3>Fokus di Emas & Bitcoin</h3>
            <p>Dari ribuan aset, kita fokus dalami Emas (XAU) dan Bitcoin (BTC). Spesialisasi adalah kunci profit berkelanjutan.</p>
          </div>
        </div>
      </section>

      {/* Trust Section (XM) */}
      <section className={styles.trustSection}>
        <div className={styles.trustGrid}>
          <div className={styles.trustImage}>
            <Image src="/financial-chart.png" alt="Gold Trading Chart" width={600} height={400} style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.trustPoints}>
            <span className={styles.badge} style={{ width: 'fit-content' }}>Vehicle of Choice</span>
            <h2>Kenapa Saya Pilih XM?</h2>
            <p>"Sebagai orang IT yang fokus di keamanan, saya sangat cerewet soal tempat simpan uang."</p>
            
            <div className={styles.trustItem}>
              <h4>Izin Jelas & Mendunia</h4>
              <p>Uang Anda disimpan di akun terpisah (segregated). Keamanan modal Anda adalah harga mati.</p>
            </div>
            <div className={styles.trustItem}>
              <h4>Eksekusi Secepat Kilat</h4>
              <p>Beda satu detik itu pengaruh banget. Di XM, transaksi secepat kilat tanpa drama harga.</p>
            </div>
            <div className={styles.trustItem}>
              <h4>Tarik Uang Tanpa Ribet</h4>
              <p>Deposit dan tarik profit lewat bank lokal Indonesia sangat cepat. Likuiditas Anda terjaga.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Flow */}
      <section className={styles.flowSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>How to Start</span>
          <h2>Alur Bergabung: Cara Mulai yang Gampang</h2>
        </div>
        <div className={styles.flowGrid}>
          <div className={`${styles.flowCard} bento`}>
            <div className={styles.flowNumber}>1</div>
            <h3>Bikin Pondasi</h3>
            <p>Daftar akun trading melalui link XM resmi di jaringan Core Pawas.</p>
          </div>
          <div className={`${styles.flowCard} bento`}>
            <div className={styles.flowNumber}>2</div>
            <h3>Konfirmasi ID</h3>
            <p>Kirim ID Akun ke Telegram. Saya pastikan isinya orang yang beneran mau belajar.</p>
          </div>
          <div className={`${styles.flowCard} bento`}>
            <div className={styles.flowNumber}>3</div>
            <h3>Dapat &apos;Buku Sakti&apos;</h3>
            <p>Dapat Modul PDF eksklusif (The Blueprint). Panduan praktek cari duit harian.</p>
          </div>
          <div className={`${styles.flowCard} bento`}>
            <div className={styles.flowNumber}>4</div>
            <h3>Masuk Grup &apos;Keluarga&apos;</h3>
            <p>Bedah pasar bareng harian dan tumbuh jadi trader mandiri di komunitas.</p>
          </div>
        </div>
      </section>

      {/* Unique Value Section */}
      <section className={styles.valueGrid}>
        <div className={`${styles.valueCard} glass`}>
          <span className={styles.badge}>Logic</span>
          <h3>Logika Programmer</h3>
          <p>"Saya melihat pasar seperti baris kode: harus logis dan terukur. Saya ajarkan &apos;algoritma&apos; berpikir trader sukses."</p>
        </div>
        <div className={`${styles.valueCard} glass`}>
          <span className={styles.badge}>Integrity</span>
          <h3>Nggak Ada Titip Dana</h3>
          <p>"Saya nggak mau pegang uang Anda. Saya kasih &apos;pancing&apos; dan &apos;jaringnya&apos;, lalu saya ajari cara mancingnya."</p>
        </div>
        <div className={`${styles.valueCard} glass`}>
          <span className={styles.badge}>Support</span>
          <h3>Dampingan Langsung</h3>
          <p>"Anda bicara sama Fawwas. Saya dampingi supaya Anda nggak jatuh ke lubang yang sama."</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <h2>Putuskan Sekarang!</h2>
        <Link href="https://t.me/yourgroup" className={styles.goldBtn}>
          Daftar XM & Ambil Modul Gratis Sekarang
        </Link>
        <div className={styles.disclaimer}>
          <p><strong>Pesan Penting:</strong> Trading itu ada risikonya (Market Risk). Belajarlah dengan bijak dan gunakan uang yang memang siap untuk dikelola secara profesional. Core Pawas tidak bertanggung jawab atas kerugian finansial pribadi.</p>
        </div>
      </section>
    </main>
  );
}
