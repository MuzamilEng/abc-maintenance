import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
const Contact = () => {
  return (
    <>
      <>
        <Header />
        {/* .header */}
        <div id="content" className="main-content" role="main">
          <div className="wrap">
            <section className="content_1 section__wrapper " id="contact-anner">
              <div className="container">
                <div className="row ">
                  <div className="col-md-12">
                    <div
                      role="region"
                      aria-labelledby="intro"
                      className="section__container"
                    >
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="contact_4 section__wrapper ">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-12">
                    <div className="section__container">
                      <div className="section__content">
                        <h2
                          className="text-align-center"
                          style={{ textAlign: "center" }}
                        >
                          Select a Location to Contact your local ABC .
                        </h2>
                        <h2 style={{ textAlign: "center" }}>
                          Or Complete Our Contact Form to Connect with your
                          Local ABC Technicians!
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row flex-row-reverse align-items-center">
                  <div className="col-12 ">
                    <div className="section__container">
                      <div className="contact_4_form section__form">
                        <div className="section__form_wrapper">
                          <div
                            className="gf_browser_chrome gform_wrapper gravity-theme gform-theme--no-framework"
                            data-form-theme="gravity-theme"
                            data-form-index={0}
                            id="gform_wrapper_2"
                          >
                            <ContactForm />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* .wrap */}
        </div>
        {/* .site-content */}
        <Footer />
        {/* .site-footer */}
      </>
    </>
  );
};

export default Contact;
