import React from "react";
import Header from "../components/Header";
import MainSlider from "../components/MainSlider";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <>
        {/* Google Tag Manager (noscript) */}

        {/* End Google Tag Manager (noscript) */}
        <Header />
        {/* .header */}
        <MainSlider />
        {/* .site-content */}
        <Footer />
        {/* .site-footer */}
        <link
          rel="stylesheet"
          id="gform_basic-css"
          href="wp-content/plugins/gravityforms/assets/css/dist/basic.min1f6a.css?ver=2.8.12"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="dashicons-css"
          href="wp-includes/css/dashicons.min380f.css?ver=6.5.4"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="assets_css-css"
          href="wp-content/themes/cybermark/assets/css/assets380f.css?ver=6.5.4"
          type="text/css"
          media="all"
        />
      </>
    </>
  );
};

export default Home;
