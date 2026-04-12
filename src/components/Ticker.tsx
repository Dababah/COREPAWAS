'use client';

import React, { useEffect, useState } from 'react';
import styles from './Ticker.module.css';

export default function Ticker() {
  const [prices, setPrices] = useState({ btc: '...', gold: '...' });

  useEffect(() => {
    // Mock prices as placeholder, in real app could use a free API like Binance/CoinGecko
    const interval = setInterval(() => {
      setPrices({
        btc: (60000 + Math.random() * 5000).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        gold: (2300 + Math.random() * 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      });
    }, 5000);
    
    setPrices({
      btc: '$69,420.00',
      gold: '$2,345.50'
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerContent}>
        <span>BTC/USD: <span className={styles.price}>{prices.btc}</span></span>
        <span className={styles.dot}>•</span>
        <span>XAU/USD (Gold): <span className={styles.price}>{prices.gold}</span></span>
        <span className={styles.dot}>•</span>
        <span className={styles.status}>Market Status: Operational</span>
        <span className={styles.dot}>•</span>
        <span>CORE PAWAS: At the heart of your digital and financial growth.</span>
      </div>
      <div className={styles.tickerContent} aria-hidden="true">
        <span>BTC/USD: <span className={styles.price}>{prices.btc}</span></span>
        <span className={styles.dot}>•</span>
        <span>XAU/USD (Gold): <span className={styles.price}>{prices.gold}</span></span>
        <span className={styles.dot}>•</span>
        <span className={styles.status}>Market Status: Operational</span>
        <span className={styles.dot}>•</span>
        <span>CORE PAWAS: At the heart of your digital and financial growth.</span>
      </div>
    </div>
  );
}
