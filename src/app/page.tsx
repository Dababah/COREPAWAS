import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Background Mega Text like in the image */}
      <div className="megaText">PAWAS</div>

      {/* Hero Section - Portfolio Style */}
      <section className={styles.hero}>
        <div className={styles.heroVisual}>
          {/* Decorative lines at top like in image branding */}
          <div className={styles.topBranding}>
            <span>Core Pawas design © 2026 | all rights reserved</span>
          </div>

          <div className={styles.portraitContainer}>
            {/* Placeholder for Expert Portrait - styled as a premium frame */}
            <div className={styles.portraitWrapper}>
              <div className={styles.mistGlow}></div>
              {/* You can replace this with your actual image path */}
              <div className={styles.portraitPlaceholder}>
                <Image 
                  src="/fawwas-bg.png" /* Assuming this asset exists or using placeholder styling */
                  alt="Ahmad Fawwas"
                  fill
                  className={styles.portraitImg}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className="badge">DIGITAL AGENCY & FINANCIAL HUB</div>
          <h1 className={styles.title}>
            Digital <span className="gradientText">Portfolio</span><br/>
            Expert - <span className={styles.highlight}>2026</span>
          </h1>
          <p className={styles.story}>
            Membantu bisnis naik kelas dengan website canggih dan mendampingi 
            para trader mencapai Financial Freedom dengan strategi yang teruji.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/digital" className={styles.btnGreen}>
              Our Services →
            </Link>
            <Link href="/about" className={styles.btnGold}>
              About Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid - Experience Services */}
      <section className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2>Dedicated to <span className="gradientText">Igniting</span><br/>Business Growth</h2>
        </div>
        
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <div className={styles.iconBox}>⚡</div>
            <h3>Modern Facilities</h3>
            <p>Teknologi terbaru untuk performa website tanpa batas.</p>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.iconBox}>💎</div>
            <h3>Expert Team</h3>
            <p>Dukungan dari profesional yang berpengalaman di bidangnya.</p>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.iconBox}>🌐</div>
            <h3>Diverse Offering</h3>
            <p>Solusi lengkap mulai dari Web Dev hingga Financial Trading.</p>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.iconBox}>🎯</div>
            <h3>Fitness Focus</h3>
            <p>Ketepatan strategi dalam mencapai goal bisnis Anda.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.expertSection}>
        <div className={styles.expertGrid}>
          <div className={styles.expertInfo}>
            <div className="badge">EXPERIENCE</div>
            <h2>Experience <span className="gradientText">Reliable</span><br/>Digital Services</h2>
            <p>
              Kami tidak hanya membangun website, kami membangun identitas digital 
              yang meyakinkan dan sistem finansial yang menguntungkan.
            </p>
            <Link href="/digital" className={styles.btnGreen}>
              Learn More
            </Link>
          </div>
          <div className={styles.expertVisual}>
            <div className={styles.visualStack}>
              <div className={`${styles.visualCard} glass`}>
                <h3>25+</h3>
                <p>Years of Combined Expertise</p>
              </div>
              <div className={`${styles.visualCard} glass`}>
                <h3>500+</h3>
                <p>Happy Global Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
