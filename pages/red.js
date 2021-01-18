import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Red.module.css';

export default function Red() {
  return (
    <Layout
      title="So nice and calm red background"
      className={styles.background}>
      What a nice and cozy red background. Let's never go{' '}
      <Link href="/">back</Link>.
    </Layout>
  );
}
