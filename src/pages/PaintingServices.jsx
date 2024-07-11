import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const PaintingServices = () => {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        &lt;iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-5QRLS6Q";
        height="0" width="0"
        style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <Header />
      {/* .header */}
      <div id="content" className="main-content mt-[3vw]" role="main">
        <div className="wrap">
          <section
            className="content_1 section__wrapper "
            id="HomeRepairServices"
          >
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h1 className="text-[3vw] font-bold">
                        PAINTING SERVICES FROM ABC 
                      </h1>
                      <h2 className="font-bold text-[1.5vw]">
                        Interior and Exterior Painting to Bring New Life to Your
                        Home
                      </h2>
                      <p className="font-medium text-[1vw]">
                        Nothing livens up your home inside and out like a fresh
                        coat of paint! Make your home reflect your unique taste
                        and personality by reimagining its color scheme and
                        giving your space an entirely new feel. At ABC ,
                        we offer interior and exterior painting services that
                        bring your vision to life. Combined with our
                        professional deck staining services, homeowners can give
                        their whole property a fresh look!
                      </p>
                      <p className="font-medium text-[1vw]">
                        Let’s get started.&nbsp;
                        <Link
                          to="/contact"
                          className="text-blue-950"
                          type="page"
                        >
                          Contact ABC 
                        </Link>
                        &nbsp;today to schedule your painting or staining
                        project estimate!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_2 section__wrapper one-column-list reverse-mobile">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 className="lg:text-[1.5vw] font-bold">
                        Interior Painting Services
                      </h3>
                      <p className="font-medium lg:text-[1vw]">
                        Can a handyman do painting? You bet! Our technicians are
                        trained, licensed, and insured to tackle many of your
                        home projects, including interior painting projects. We
                        can cover much more than just walls. We can also help
                        with:
                      </p>
                      <ul className="defaultList list-disc lg:flex lg:flex-col lg:gap-[1vw] lg:mt-[1vw]">
                        <li className="text-[1vw]">Cabinet painting</li>
                        <li className="text-[1vw]">
                          Trim and crown molding painting
                        </li>
                        <li className="text-[1vw]">Touch-up painting</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section__img">
                    <div className="section_img_wrapper">
                      <img
                        width={1920}
                        height={1280}
                        src="/img/paint1.jpg"
                        className="attachment-full size-full"
                        alt="Handyman Paints a Wall"
                        decoding="async"
                        fetchpriority="high"
                        // srcSet="https://www.ABCservices.com/wp-content/uploads/2022/08/painting.jpg 1920w, https://www.ABCservices.com/wp-content/uploads/2022/08/painting-300x200.jpg 300w, https://www.ABCservices.com/wp-content/uploads/2022/08/painting-1024x683.jpg 1024w, https://www.ABCservices.com/wp-content/uploads/2022/08/painting-768x512.jpg 768w, https://www.ABCservices.com/wp-content/uploads/2022/08/painting-1536x1024.jpg 1536w"
                        sizes="(max-width: 1920px) 100vw, 1920px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="top-triangle" />
          <section
            className="feature_2 section__wrapper blue-bg triangle-above triangle-below"
            id="features-text"
          >
            <div className="container">
              <div className="row ">
                <div className="col-md-">
                  <div className="section__container">
                    <div className="section__content "></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row justify-content-center">
                    <div className="col-md-6 mb-md-0 mb-5">
                      <div className="column">
                        <div className="column-text">
                          <h3 className="lg:text-[1.5vw] lg:font-bold">
                            Handyman Exterior Painting Services
                          </h3>
                          <p className="lg:text-[1.5vw] ">
                            The exterior of your house provides people with
                            their first impression of your home. Keeping it in
                            good condition is one of the most cost-effective
                            ways to protect a home’s value. When you need a hand
                            touching up areas of your home’s exterior paint, our
                            teams can get the job done quickly and offer results
                            that will stand up to weather and general
                            wear-and-tear. Our handyman painters can work with
                            any exterior materials, including wood, stucco, and
                            vinyl siding
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-md-0 mb-5">
                      <div className="column">
                        <div className="column-text">
                          <h3
                            id={1104284693}
                            className="dmNewParagraph lg:text-[1.5vw] lg:font-bold"
                            data-element-type="paragraph"
                            data-version={5}
                          >
                            Professional Deck Staining
                          </h3>
                          <div
                            id={1123564176}
                            className="dmNewParagraph lg:text-[1.5vw] "
                            data-element-type="paragraph"
                            data-version={5}
                          >
                            Staining your deck is the best way to protect your
                            investment, enhance the deck’s appearance, and
                            reduce the risk of damages or fading. Depending on
                            what type of wood your deck was built with,
                            homeowners should expect to re-stain their decks
                            every two to three years. Some factors that
                            influence how often you will need to stain your deck
                            include things like snow and ice build-up, exposure
                            to direct sunlight, and humidity. Even leaves and
                            tree sap can influence how often your deck will need
                            treatment.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bottom-triangle" />
          <section className="content_2 section__wrapper reverse-mobile">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 className="lg:text-[1.5vw] lg:font-bold">
                        Handyman Painters Near Me
                      </h3>
                      <p className="lg:text-[1vw] lg:leading-loose ">
                        No matter what your painting needs, trust our
                        experienced technicians to bring quality workmanship to
                        every project. From repainting your living room to
                        retouching the exterior paint before listing it for
                        sale, you’re just one appointment away from getting the
                        job done. Contact ABC  today to request your
                        customized estimate.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section__img">
                    <div className="section_img_wrapper">
                      <img
                        width={800}
                        height={600}
                        src="/img/paint3.jpg"
                        className="attachment-full size-full"
                        alt="Handyman Paints a Wall"
                        decoding="async"
                        // srcSet="https://www.ABCservices.com/wp-content/uploads/2022/08/painting-2.jpg 800w, https://www.ABCservices.com/wp-content/uploads/2022/08/painting-2-300x225.jpg 300w, https://www.ABCservices.com/wp-content/uploads/2022/08/painting-2-768x576.jpg 768w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="accordionfaqs"
            className="section__wrapper custom_accordion "
          >
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div className="faq-header">
                    <h3
                      className="text-align-center m-text-align-left text-[2vw] font-bold"
                      style={{ textAlign: "center" }}
                    >
                      FAQs
                    </h3>
                  </div>
                  <div className="accordion" id="accordionfaqs">
                    {" "}
                    <div className="card">
                      <div className="card-header" id="heading-1">
                        <h3 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left accordionTitle lg:text-[2vw] lg:font-bold"
                            type="button"
                            data-toggle="collapse"
                            data-target="#accordionfaqs-collapse-1"
                            aria-expanded="false"
                            aria-controls="accordionfaqs-collapse-1 "
                          >
                            How much paint do I need?{" "}
                          </button>
                        </h3>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="heading-2">
                        <h3 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left accordionTitle "
                            type="button"
                            data-toggle="collapse"
                            data-target="#accordionfaqs-collapse-2"
                            aria-expanded="false"
                            aria-controls="accordionfaqs-collapse-2"
                          >
                            How long does paint last?{" "}
                          </button>
                        </h3>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="heading-3">
                        <h3 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left accordionTitle"
                            type="button"
                            data-toggle="collapse"
                            data-target="#accordionfaqs-collapse-3"
                            aria-expanded="false"
                            aria-controls="accordionfaqs-collapse-3"
                          >
                            How often should I repaint the exterior of my home?{" "}
                          </button>
                        </h3>
                      </div>
                    </div>
                  </div>{" "}
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
      <link
        rel="stylesheet"
        id="assets_css-css"
        href="../wp-content/themes/cybermark/assets/css/assets380f.css?ver=6.5.4"
        type="text/css"
        media="all"
      />
    </>
  );
};

export default PaintingServices;
