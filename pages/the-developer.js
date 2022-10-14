import Layout from '../components/layout';
import { setTheme } from '../utils/set-theme';

export default function TheDeveloper() {
  return (
    <Layout title="the developer">
      <p>
        robert ahlberg. creating the greatest apps money can buy at{' '}
        <a href="https://www.pixelpappa.com" target="__blank">
          pixelpappa
        </a>
        .
      </p>

      <p>writing.</p>

      <p onClick={() => setTheme('dark')}>the colors may change.</p>
    </Layout>
  );
}
