import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="robban.dev">
      <p>The content for robban.dev</p>
      <p>
        A nice and cozy <Link href="red">red</Link> background
      </p>
    </Layout>
  );
}
