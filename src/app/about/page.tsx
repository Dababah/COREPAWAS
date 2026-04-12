import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={`${styles.hero} fade-in`}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/about-fawwas.png" 
            alt="Muhammad Fawwaz Ali" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Halo, Saya Fawwas!</span>
          <h1>Bantu Bisnis Anda Tumbuh & Jadi Teman Diskusi <span className="gradientText">Kelola Keuangan</span> yang Logis.</h1>
          <p className={styles.story}>
            "Halo! Saya Muhammad Fawwaz Ali. Banyak orang bilang sukses itu soal keberuntungan atau hasil instan. 
            Tapi buat saya, sukses itu soal perbaikan kecil yang dilakukan terus-menerus. 
            Di sini, saya nemenin Anda buat bangun website bisnis yang beneran hasilin progres dan belajar trading dengan cara yang jujur."
          </p>
          <Link href="#filosofi" className="btnNavy" style={{ background: 'var(--accent-red)', color: '#fff', padding: '16px 32px', borderRadius: '12px', fontWeight: '700' }}>
            Kenali Saya Lebih Dekat
          </Link>
        </div>
      </section>

      {/* Filosofi Section */}
      <section id="filosofi" className={styles.principleSection}>
        <span className={styles.badge}>Filosofi 1%</span>
        <h2>Kenapa Saya Nggak Percaya &apos;Instan&apos;?</h2>
        <div className={styles.principleText}>
          <p><strong>"Gak Perlu Langsung Meledak, Cukup 1% Lebih Baik Tiap Hari."</strong></p>
          <p>Pernah denger prinsip Atomic Habits? Intinya simpel banget: kalau kita bisa jadi 1% lebih baik aja tiap harinya, dalam setahun kita bakal tumbuh 37 kali lipat lebih hebat.</p>
          <p style={{ marginTop: '20px' }}>
            Prinsip ini yang jadi &quot;nyawa&quot; di Core Pawas. Saya nggak mau nawarin Anda website yang &apos;ajaib&apos; langsung bikin kaya, atau cara trading yang bikin saldo meledak dalam semalam. 
            Saya lebih percaya bangun sistem yang kuat. Sedikit demi sedikit, tapi nggak berhenti. Karena buat saya, hasil yang awet itu datang dari kebiasaan yang bener, bukan cuma hoki sesaat.
          </p>
        </div>
      </section>

      {/* Cerita Awal */}
      <section className={styles.storyGrid}>
        <div className={styles.storyCard}>
          <span className={styles.badge}>Our Origin</span>
          <h3>Belajar dari Logika Koding & &apos;Sekolah Mahal&apos; di Market.</h3>
          <p className={styles.story}>
            Sebagai mahasiswa Teknologi Informasi, hidup saya isinya logika. Saya suka segala sesuatu yang teratur. 
            Tapi jujur aja, pas awal-awal saya nyoba dunia trading, saya sempet lupa sama logika itu. 
            Saya pengennya cepet untung, eh... yang ada malah dapet &apos;sekolah mahal&apos; alias pernah ngerasain rugi.
          </p>
        </div>
        <div className={`${styles.storyCard} bento`} style={{ padding: '60px' }}>
          <p className={styles.story}>
            Momen rugi itu bikin saya mikir: &quot;Lho, trading kan bisnis. Harusnya ada sistemnya, kayak bikin program komputer.&quot; 
            Saya balik lagi ke cara pikir programmer. Saya perbaiki cara trading saya dikit-dikit (prinsip 1% tadi), fokus jaga modal, 
            dan akhirnya sadar kalau market itu memang soal untung dan rugi yang harus dikelola dengan kepala dingin. 
            Pengalaman inilah yang pengen saya bagikan ke Anda lewat Core Pawas.
          </p>
        </div>
      </section>

      {/* What I Do */}
      <section className={styles.servicesDetail}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
           <h2 style={{ fontSize: '3rem' }}>Apa yang Saya Lakukan Buat Anda?</h2>
        </div>
        
        <div className={styles.detailGrid}>
          <div className={`${styles.detailBox} glass`}>
            <h3>A. Website Bisnis</h3>
            <p style={{ marginBottom: '30px', opacity: 0.7 }}>"Bukan Pajangan, Tapi Mesin Pertumbuhan"</p>
            <div className={styles.pointList}>
              <div className={styles.pointItem}>
                <h4>Bikin Anda Kelihatan Profesional</h4>
                <p>Website itu langkah 1% pertama biar orang percaya kalau bisnis Anda bukan bisnis &apos;kemarin sore&apos;.</p>
              </div>
              <div className={styles.pointItem}>
                <h4>Bikin Pelanggan Nyaman</h4>
                <p>Saya pastiin web Anda enteng banget dibuka di HP. Kecepatan adalah kunci pelanggan betah.</p>
              </div>
              <div className={styles.pointItem}>
                <h4>Bisa Anda Kelola Sendiri</h4>
                <p>Saya nggak mau Anda ketergantungan. Saya bikinin sistem yang gampang Anda utak-atik buat update jualan.</p>
              </div>
            </div>
          </div>

          <div className={`${styles.detailBox} glass`}>
            <h3>B. Trading Disiplin</h3>
            <p style={{ marginBottom: '30px', opacity: 0.7 }}>"Realita di Atas Mimpi"</p>
            <div className={styles.pointList}>
              <div className={styles.pointItem}>
                <h4>Jujur Soal Risiko</h4>
                <p>Di sini kita ngomong blak-blakan. Trading itu ada untung dan rugi. Saya ajarkan cara supaya rugi nggak bikin bangkrut.</p>
              </div>
              <div className={styles.pointItem}>
                <h4>Kekuatan Sabar (Compound Interest)</h4>
                <p>Profit dikit kalau dikumpulin terus-menerus bakal jadi gede banget. Konsistensi di atas segalanya.</p>
              </div>
              <div className={styles.pointItem}>
                <h4>Mental yang Kuat</h4>
                <p>Saya dampingi Anda supaya nggak gampang emosi pas harga lagi nggak sesuai harapan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className={styles.lifestyleSection}>
        <div className={styles.storyCard}>
          <span className={styles.badge}>Behind the Scenes</span>
          <h3>Gym & Kedisiplinan Harian</h3>
          <p className={styles.story}>
            "Kedisiplinan saya nggak cuma pas di depan laptop aja. Setiap hari saya sempetin ke Gym. Di sana saya belajar kalau otot nggak bakal tumbuh kalau cuma latihan sekali. Harus rutin, beban ditambah dikit-dikit tiap hari.
          </p>
          <p className={styles.story}>
            Prinsip &apos;1% lebih kuat&apos; di gym ini yang saya bawa pas lagi ngerjain website Anda atau pas lagi analisa market. Saya tinggal di Yogyakarta, kota yang ngajarin saya kalau keramahan dan kejujuran itu modal utama."
          </p>
        </div>
        <div className="bento" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
          <h4>"Don't sungkan untuk ajak diskusi!"</h4>
        </div>
      </section>

      {/* My Promise */}
      <section className={styles.promiseSection}>
        <h2 style={{ fontSize: '2.5rem' }}>Janji Saya Buat Anda</h2>
        <div className={styles.promiseGrid}>
          <div className={`${styles.promiseCard} bento`}>
            <h4>Nggak Ada Janji Manis</h4>
            <p>Saya bakal jujur soal risiko. Strategi saya logis, bukan sulap.</p>
          </div>
          <div className={`${styles.promiseCard} bento`}>
            <h4>Edukasi Terus</h4>
            <p>Saya pengen Anda paham &quot;kenapa&quot;-nya, bukan cuma sekadar ikut-ikutan.</p>
          </div>
          <div className={`${styles.promiseCard} bento`}>
            <h4>Amanah</h4>
            <p>Kepercayaan Anda adalah tanggung jawab besar yang saya jaga banget.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '100px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Siap Jadi Lebih Baik dari Kemarin?</h2>
        <p style={{ opacity: 0.6, marginBottom: '40px' }}>Jangan biarkan bisnis Anda jalan di tempat. Mari kita bangun sistem yang beneran tumbuh.</p>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="https://wa.me/yourphone" className="btnGreen" style={{ background: '#25d366', color: '#000', padding: '18px 40px', borderRadius: '14px', fontWeight: '800' }}>
            Ngobrol Soal Website (WhatsApp)
          </Link>
          <Link href="https://t.me/yourgroup" className="btnGold" style={{ background: '#ffc107', color: '#000', padding: '18px 40px', borderRadius: '14px', fontWeight: '800' }}>
            Gabung Komunitas Trading (Telegram)
          </Link>
        </div>
      </section>
    </main>
  );
}
