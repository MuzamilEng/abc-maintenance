import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HomeMaintainence = () => {
  return (
    <>
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
            <section className="content_1 section__wrapper ">
              <div className="container">
                <div className="row ">
                  <div className="col-md-12">
                    <div
                      role="region"
                      aria-labelledby="intro"
                      className="section__container"
                    >
                      <div className="section__content ">
                        <h1>SIGN UP FOR A ABC  MAINTENANCE PLAN</h1>
                        <h2>
                          Keep Your Home in Top Shape with Annual Inspections
                          and Discounts on Repairs
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="content_2 section__wrapper img-max-height">
              <div className="container">
                <div className="row ">
                  <div className="col-md-6 mt-5 mt-md-0">
                    <div
                      role="region"
                      aria-labelledby="intro"
                      className="section__container"
                    >
                      <div className="section__content ">
                        <h3>HOW IS THE ABC  PLAN DIFFERENT?</h3>
                        <p>
                          Today’s homeowners are so busy juggling family and
                          careers, home maintenance often goes unmanaged.
                          ABC  provides a dependable approach to home
                          maintenance with the benefits of its membership
                          program. Our home protection plan provides a
                          trustworthy solution that gives you peace of mind when
                          it comes to knowing what needs to be fixed around your
                          home.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="section__img">
                      <div className="section_img_wrapper">
                        <img
                          width={533}
                          height={800}
                          src="/img/mainti1.jpg"
                          className="attachment-full size-full"
                          alt="Man Repairing Cabinet ─ Ann Arbor, MI ─ ABC "
                          decoding="async"
                          fetchpriority="high"
                          // srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/08/home-drill.jpg 533w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/home-drill-200x300.jpg 200w"
                          sizes="(max-width: 533px) 100vw, 533px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="content_2 section__wrapper one-column-list reverse-mobile">
              <div className="container">
                <div className="row flex-row-reverse">
                  <div className="col-md-6 mt-5 mt-md-0">
                    <div
                      role="region"
                      aria-labelledby="intro"
                      className="section__container"
                    >
                      <div className="section__content ">
                        <h3>WORRY-FREE HOME MAINTENANCE SERVICES</h3>
                        <p>
                          HomeSteady’s membership plan takes a proactive
                          approach to maintenance and overall care for your
                          home. Through annual home evaluations, we protect your
                          most valued asset and keep your home functioning as it
                          should. Entrust your routine maintenance to us and
                          leave your worries behind.
                        </p>
                        <h3>
                          WHY CHOOSE ABC  FOR HOME MAINTENANCE PLAN?
                        </h3>
                        <ul className="defaultList">
                          <li>Dependable and Hassle-Free Home Maintenance</li>
                          <li>Transparent Pricing</li>
                          <li>Priority Scheduling</li>
                          <li>Experienced and Trusted Technicians</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <div className="section_img_wrapper">
                        <img
                          // width={800}
                          // height={533}
                          src="/img/mainti2.jpg"
                          className="attachment-full w-[80w] size-full max-h-[70vw] lg:max-h-[30vw]"
                          alt="Handyman Repairing Sink"
                          decoding="async"
                          // srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/08/sink.jpg 800w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/sink-300x200.jpg 300w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/sink-768x512.jpg 768w"
                          sizes="(max-width: 800px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="top-triangle" />
            <section className="content_2 section__wrapper img-max-height blue-bg triangle-above">
              <div className="container">
                <div className="row ">
                  <div className="col-md-6 mt-5 mt-md-0">
                    <div
                      role="region"
                      aria-labelledby="intro"
                      className="section__container"
                    >
                      <div className="section__content ">
                        <h3>
                          THE ABC  PLAN: BENEFITS OF PROACTIVE HOME
                          SERVICES
                        </h3>
                        <p>
                          Service hours accrue monthly and roll over throughout
                          the year. Members can also purchase additional hours
                          at a discounted rate, based on membership tier (see
                          below). Members who pay annually receive an additional
                          10% discount on top of their existing service
                          discount, saving up to 30% off our regular hourly
                          rate.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="section__img">
                      <div className="section_img_wrapper">
                        <img
                          width={800}
                          height={533}
                          // src="../wp-content/uploads/2022/08/bathroom.jpg"
                          src="/img/mainti5.jpg"
                          className="attachment-full size-full"
                          alt="Bathroom"
                          decoding="async"
                          // srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/08/bathroom.jpg 800w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/bathroom-300x200.jpg 300w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/bathroom-768x512.jpg 768w"
                          sizes="(max-width: 800px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="feature_2 section__wrapper blue-bg triangle-below"
              id="membership-tiers"
            >
              <div className="container">
                <div className="row ">
                  <div className="col-md-">
                    <div className="section__container">
                      <div className="section__content "></div>
                    </div>
                  </div>
                  <div className="col-md-12"></div>
                </div>
              </div>
            </section>
            <div className="bottom-triangle" />
            <section className="content_2 section__wrapper img-max-height reverse-mobile">
              <div className="container">
                <div className="row flex-row-reverse">
                  <div className="col-md-6 mt-5 mt-md-0">
                    <div
                      role="region"
                      aria-labelledby="intro"
                      className="section__container"
                    >
                      <div className="section__content ">
                        <h3>INTRODUCTORY MEMBERSHIP</h3>
                        <p>
                          <span className="">
                            Want to try it out for yourself? Take advantage of
                            our introductory offer. We will perform a free home
                            evaluation with an introductory offer purchase and
                            will provide you with a full report of our findings.
                            If you choose to have us perform repairs or
                            upgrades, you’ll save 40% off your first two hours
                            of service. For up-to-date pricing on the Steady
                            Home Plan introductory offer in your area, contact
                            your local ABC  representative&nbsp;
                          </span>
                          <Link to="../contact/index.html" rel="noopener">
                            here!
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="section__img">
                      <div className="section_img_wrapper">
                        <img
                          width={800}
                          height={534}
                          // src="../wp-content/uploads/2022/08/home-1.jpg"
                          src="/img/mainti8.jpg"
                          className="attachment-full size-full"
                          alt="Family Plays in front of home"
                          decoding="async"
                          // srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/08/home-1.jpg 800w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/home-1-300x200.jpg 300w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/home-1-768x513.jpg 768w"
                          sizes="(max-width: 800px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="content_1 section__wrapper "
              id="contact-link-bg"
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
                        <h3
                          className="text-align-center"
                          style={{ textAlign: "center" }}
                        >
                          <Link to="../contact/index.html" type="page">
                            Contact Us Today For More Information On The Steady
                            Home Plan
                          </Link>
                        </h3>
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
        <link
          rel="stylesheet"
          id="assets_css-css"
          to="../wp-content/themes/cybermark/assets/css/assets380f.css?ver=6.5.4"
          type="text/css"
          media="all"
        />
      </>
    </>
  );
};

export default HomeMaintainence;
