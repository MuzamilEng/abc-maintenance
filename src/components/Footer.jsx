import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <div
                className="footer-branding"
                id="footer-branding"
                aria-label="footer_branding"
              >
                <a href="/" rel="home">
                  <img
                    src="/img/logo2.png"
                    alt="ABC "
                    width={250}
                    height={71}
                  />
                </a>
              </div>
            </div>
            <div className="">
              <div className="footer-content text-center">
                <p id="footer-large-text">
                  We maintain peace of mind, one home at a time{" "}
                </p>
                <p>
                  Each ABC  location is independently owned and operated
                  and services may vary by location.
                </p>
                <p>
                  Some services subject to state or local licensing and may not
                  be available at all locations. Please contact your local
                  ABC  for availability.
                </p>
                <p className="footer-max-width">
                  Content, including images, displayed on this website is
                  protected by copyright laws. Downloading, republication,
                  retransmission or reproduction of content on this website is
                  strictly prohibited.{" "}
                  <a href="#">Terms of Use</a> |{" "}
                  <a href="#">Privacy Policy</a> |{" "}
                  <a href="#">ADA Compliance</a>
                </p>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  aria-describedby="new-window-0"
                  className="cybermark"
                  style={{ textDecoration: "none", fontSize: 12 }}
                >
                  Built By CyberMark
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
