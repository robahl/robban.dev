import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/HisWork.module.css';

export default function () {
  return (
    <Layout title="his work">
      <a href="https://github.com/robahl">
        <Image
          className={styles.githubLogo}
          src="/github-logo.svg"
          alt="github logo"
          layout="fill"
        />
      </a>
    </Layout>
  );
}
