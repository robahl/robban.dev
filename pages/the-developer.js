import Layout from '../components/layout';
import { setTheme } from '../utils/set-theme';

export default function () {
  return (
    <Layout title="the developer">
      <p>
        robert ahlberg. creating the greatest igaming platform money can buy at{' '}
        <a href="https://codebet.com">codebet</a>.
      </p>

      <p>writing.</p>

      <p onClick={() => setTheme('dark')}>the colors may change.</p>
    </Layout>
  );
}
