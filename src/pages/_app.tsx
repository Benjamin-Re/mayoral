import ContextWrapper from '../../components/context';
import Layout from '../../components/layout';
import '../../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  );
}
