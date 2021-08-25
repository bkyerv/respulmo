import Layout from "../components/Layout";

import "../styles/design_tokens.css";
import "../styles/utilities.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
