import React, { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import Sponsors from "./Sponsors";
import { motion } from "framer-motion";
import screenfull from "screenfull";

const Layout = ({ children, router }) => {
  useEffect(() => {
    document.body.addEventListener("dblclick", () => screenfull.toggle());
  }, []);
  return (
    <>
      <Header />
      <Nav />
      <Main>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: { opacity: 0 },
            pageAnimate: { opacity: 1 },
          }}
        >
          {children}
        </motion.div>
      </Main>
      <Sponsors />
      <Footer />
    </>
  );
};

export default Layout;
