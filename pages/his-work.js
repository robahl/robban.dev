import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/HisWork.module.css';

export default function () {
  return (
    <Layout title="his work">
      <a href="https://github.com/robahl">
        <img
          className={styles.githubLogo}
          src="/github-logo.svg"
          alt="github logo"
        />
      </a>
    </Layout>
  );
}
