import Image from 'next/image';
import Link from 'next/link';
import styles from './digital.module.css';

export default function DigitalPage() {
  return (
    <main className={styles.container}>
      <div className={styles.bgNodes}></div>

      {/* Hero Section */}
      <section className={`${styles.hero} fade-in`}>
        <div className={styles.badge}>Masa Depan Bisnis Anda Dimulai di Sini</div>
        <h1 className={styles.title}>
          Bikin Bisnis Anda Naik Kelas dengan <span className="gradientText">Website Canggih</span> & Anti Lemot.
        </h1>
        <p className={styles.subtitle}>
          "Zaman sekarang, kalau bisnis nggak ada di internet, rasanya seperti toko tanpa papan nama. 
          Core Pawas hadir untuk membangunkan &apos;rumah digital&apos; yang profesional, sangat cepat dibuka, dan pastinya aman. 
          Anda fokus urus jualan, biar urusan teknologi saya yang bereskan."
        </p>
        <Link href="https://wa.me/yourphone" className={styles.ctaBtn}>
          Konsultasi Website Gratis
        </Link>
      </section>

      {/* Importance Section */}
      <section className={styles.importanceSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Strategy</span>
          <h2>Mengapa Bisnis Anda Wajib Punya Website di 2026?</h2>
        </div>
        
        <div className={styles.importanceGrid}>
          <div className={`${styles.importanceCard} bento`}>
            <h3>Toko yang Buka 24 Jam</h3>
            <p>"Website itu seperti karyawan paling rajin. Dia tidak pernah tidur, tetap melayani calon pembeli meskipun Anda sedang istirahat."</p>
          </div>
          <div className={`${styles.importanceCard} bento`}>
            <h3>Membangun Kepercayaan (Trust)</h3>
            <p>"Orang lebih percaya beli di bisnis yang punya website resmi. Website bikin brand Anda terlihat &apos;serius&apos; dan berkelas."</p>
          </div>
          <div className={`${styles.importanceCard} bento`}>
            <h3>Jangkauan Luas</h3>
            <p>"Tanpa website, pelanggan Anda cuma orang sekitar. Dengan website, siapa pun di Indonesia bisa menemukan bisnis Anda."</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Services</span>
          <h2>Layanan Unggulan Kami</h2>
        </div>
        
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceCard} bento`}>
            <h3>Website Jualan (Landing Page)</h3>
            <p>"Cocok buat Anda yang jualan satu produk atau jasa khusus. Fokusnya satu: bikin orang yang lihat langsung pengen klik tombol beli atau hubungi WhatsApp Anda."</p>
            <div className={styles.serviceUse}>
              <strong>Kegunaan:</strong> Promosi produk, jasa kursus, atau pendaftaran event.
            </div>
          </div>
          <div className={`${styles.serviceCard} bento`}>
            <h3>Website Profil Bisnis (Company Profile)</h3>
            <p>"Tunjukkan siapa Anda dan apa hebatnya bisnis Anda. Cocok untuk UMKM, kantor, atau personal branding supaya tampil lebih profesional."</p>
            <div className={styles.serviceUse}>
              <strong>Kegunaan:</strong> Menampilkan portofolio, sejarah bisnis, dan daftar layanan lengkap.
            </div>
          </div>
          <div className={`${styles.serviceCard} bento`}>
            <h3>Sistem Menu & Kasir Digital (QR Order)</h3>
            <p>"Khusus buat Anda pemilik resto atau kafe. Pelanggan tinggal scan QR, pilih menu, dan pesan langsung dari HP. Otomatis, cepat, dan rapi."</p>
            <div className={styles.serviceUse}>
              <strong>Kegunaan:</strong> Efisiensi operasional dan database pelanggan yang rapi.
            </div>
          </div>
        </div>
      </section>

      {/* Technical Edge */}
      <section className={styles.techSection}>
        <div className={styles.techGrid}>
          <div className={styles.techText}>
            <span className={styles.badge}>Technical Edge</span>
            <h2>Rahasia Dapur Kami: Mengapa Website Kami Lebih Unggul?</h2>
            
            <div className={styles.techList} style={{ marginTop: '40px' }}>
              <div className={styles.techItem}>
                <h4>Kecepatan Kilat</h4>
                <p>Website terbuka kurang dari 2 detik dengan Next.js & React.</p>
              </div>
              <div className={styles.techItem}>
                <h4>Keamanan Berlapis</h4>
                <p>Sebagai Network Security Specialist, saya berikan &apos;pagar&apos; yang kuat untuk data Anda.</p>
              </div>
              <div className={styles.techItem}>
                <h4>Database Modern</h4>
                <p>Penyimpanan data rapi dan sangat cepat menggunakan Supabase/MongoDB.</p>
              </div>
              <div className={styles.techItem}>
                <h4>Tampilan Sempurna</h4>
                <p>Tampilan cantik dan gampang dipakai di layar HP sekecil apa pun.</p>
              </div>
            </div>

            <div style={{ marginTop: '40px', display: 'flex', gap: '20px', opacity: 0.5 }}>
               <Image src="/file.svg" alt="Next.js" width={40} height={40} />
               <Image src="/window.svg" alt="Tailwind" width={40} height={40} />
               <Image src="/globe.svg" alt="Supabase" width={40} height={40} />
            </div>
          </div>
          <div className={styles.techVisual}>
             <Image src="/mockup.png" alt="Website Mockup" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>The Process</span>
          <h2>Alur Kerja: Anda Terima Beres, Kami Yang Kerja</h2>
        </div>
        <div className={styles.processGrid}>
          <div className={`${styles.processCard} glass`}>
            <div className={styles.processNumber}>01</div>
            <h3>Ngobrol Santai (Konsultasi)</h3>
            <p>Ceritakan bisnis Anda butuh apa. Saya kasih saran terbaik dan perkiraan biayanya.</p>
          </div>
          <div className={`${styles.processCard} glass`}>
            <div className={styles.processNumber}>02</div>
            <h3>Proses Rakit (Development)</h3>
            <p>Saya mulai membangun website Anda. Anda akan dapat update berkala.</p>
          </div>
          <div className={`${styles.processCard} glass`}>
            <div className={styles.processNumber}>03</div>
            <h3>Uji Coba (Testing)</h3>
            <p>Sebelum rilis, kita tes bareng. Pastikan semua tombol jalan dan loading super cepat.</p>
          </div>
          <div className={`${styles.processCard} glass`}>
            <div className={styles.processNumber}>04</div>
            <h3>Serah Terima & Bimbingan</h3>
            <p>Website rilis! Saya kasih panduan cara pakainya sampai Anda mahir.</p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className={styles.offerSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>Special Offer</span>
          <h2>Investasi Terbaik Untuk Bisnis Anda</h2>
        </div>
        <div className={styles.offerGrid}>
          <div className={`${styles.offerCard} glass`}>
            <h3>Gratis Domain & Hosting</h3>
            <p>Saya kasih gratis untuk tahun pertama. Anda nggak perlu pusing sewa lahan digital.</p>
          </div>
          <div className={`${styles.offerCard} glass`}>
            <h3>Gratis SSL (Gembok Aman)</h3>
            <p>Supaya website Anda dipercaya Google dan pelanggan dengan tanda gembok keamanan.</p>
          </div>
          <div className={`${styles.offerCard} glass`}>
            <h3>Bantuan Update Isi</h3>
            <p>Hubungi saya kapan saja, saya bantu secara gratis untuk update awal konten Anda.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <h2>Jangan Tunggu Kompetitor Mendahului Anda.</h2>
        <Link href="https://wa.me/yourphone" className={styles.ctaBtn}>
          Hubungi Mas Fawwas Sekarang
        </Link>
        <p className={styles.smallNote}>Tanya-tanya dulu gratis, nggak harus langsung pesan kok. Mari kita ngobrol santai!</p>
      </section>
    </main>
  );
}
