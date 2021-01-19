import Layout from "src/layout";
import "src/styles/global.scss";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
