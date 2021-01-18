import React from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>Some header</header>
      <main>{children}</main>
      <footer className={styles.footer}>Some footer</footer>
    </div>
  );
}
