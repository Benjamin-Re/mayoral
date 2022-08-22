import ContextWrapper from '../../components/context';
import Layout from '../../components/layout';
import '../../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Layout>
        {/*The Component prop is the active page*/}
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  );
}
