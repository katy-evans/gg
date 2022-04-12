import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div className="">
      <Head></Head>
      <div className="">
          <Nav />
        <div className="bg-[#222] min-h-fit">{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
