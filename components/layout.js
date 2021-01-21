import React, { useEffect } from 'react';
import cn from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title, className }) {
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();

    return () => window.removeEventListener('resize', appHeight);
  }, []);

  return (
    <div className={cn(styles.container, className)}>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.frame}>
        <header className={styles.header}>
          <Link href="/the-developer">the developer</Link>
          <Link href="/his-work">his work</Link>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
