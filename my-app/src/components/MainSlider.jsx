import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
const MainSlider = () => {
  const services = [
    {
      title: "Full Kitchen and Bathroom Fitting:",
      description: "Transform your kitchen or bathroom with our expert installation and fitting services."
    },
    {
      title: "Driveways and Patio Paving:",
      description: "Enhance your outdoor space with durable and aesthetically pleasing paving solutions."
    },
    {
      title: "House & Office Cleaning:",
      description: "Keep your home or office spotless with our reliable cleaning services."
    },
    {
      title: "All Around Property Maintenance:",
      description: "From minor repairs to major overhauls, we handle all aspects of property maintenance."
    },
    {
      title: "Carpets & Vinyl:",
      description: "Choose from a wide range of carpets and vinyl flooring options, professionally installed to perfection."
    },
    {
      title: "Extensions & Loft Conversions:",
      description: "Maximize your living space with our custom extension and loft conversion services."
    },
    {
      title: "Garden Maintenance:",
      description: "Maintain a beautiful garden all year round with our expert gardening services."
    },
    {
      title: "Removal & House Clearance:",
      description: "Efficient and hassle-free removal and clearance services for your property."
    },
    {
      title: "All Types of Flooring:",
      description: "Whether you need hardwood, laminate, or tile flooring, we've got you covered."
    },
    {
      title: "Painting and Decorating:",
      description: "Refresh your space with our professional painting and decorating services."
    },
    {
      title: "Energy Performance, Electrical Safety & Gas Safety Certificates:",
      description: "Ensure your property meets all safety regulations with our certification services."
    }
  ];
  return (
    <>
      <div id="content" className="main-content" role="main">
        <div id="slideshow-container">
          <div id="home_slider">
            <div className="home-slides">
              <div className="home-slide">
                <img
                  src="wp-content/themes/franchise-corporate/assets/images/slide_1.webp"
                  alt="Family In Front of Home"
                  height={900}
                  width={1920}
                  type="image/jpeg"
                />
              </div>
              <div className="home-slide">
                <img
                  src="wp-content/themes/franchise-corporate/assets/images/slide_2.webp"
                  alt="Handyman Speaks With Client"
                  height={900}
                  width={1920}
                  type="image/jpeg"
                />
              </div>
              <div className="home-slide">
                <img
                  src="wp-content/themes/franchise-corporate/assets/images/slide_3.webp"
                  alt="Two Story House With Lawn"
                  height={900}
                  width={1920}
                  type="image/jpeg"
                />
              </div>
            </div>
          </div>
          <div className="home-slider-text">
            <h2 className=" text-[3vw]">
              WE MAINTAIN PEACE OF MIND ,
              <br />
              ONE HOME AT A TIME
            </h2>
            <p className="text-[3vw]">
              Complete our contact form today to schedule services.
            </p>
            <Link to="/contact" className="btn btn-secondary mr-0">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="wrap" id="text_content">
          <section className="content_2 section__wrapper custom-padding top-block">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h1 className="text-align-left lg:text-[1.5vw] lg:font-bold">
                      Home and Office Maintenance Solutions Across Yorkshire
                      </h1>
                      <p className="text-align-left lg:text-[1vw] lg:font-medium lg:mt-[1vw]">
                      Welcome to ABC Home Services, your go-to provider for comprehensive home and office maintenance solutions across Yorkshire. We specialize in delivering top-notch services tailored to meet your needs, no matter how big or small your project is. Our team of experienced professionals is dedicated to ensuring your complete satisfaction, providing high-quality workmanship at competitive prices.
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
                        src="/img/mainti5.jpg"
                        className="attachment-full size-full"
                        alt="Family Admires Front of Their Home"
                        decoding="async"
                        fetchpriority="high"
                        // srcSet="https://www.ABCservices.com/wp-content/uploads/2022/08/home.jpg 800w, https://www.ABCservices.com/wp-content/uploads/2022/08/home-300x200.jpg 300w, https://www.ABCservices.com/wp-content/uploads/2022/08/home-768x513.jpg 768w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_1 section__wrapper ">
            <div className="flex items-center justify-center w-full">
            <div style={{ marginTop: "2vw" }} className="section__content">
            <h1 className="text-align-left text-center lg:text-[1.5vw] lg:font-bold">Our Services Include:</h1>
            {services.map((service, index) => (
              <div key={index} className="">
                <h2 className="text-center lg:text-[1vw] mt-[1vw] font-bold">{service.title}</h2>
                <p className="text-center lg:text-[1vw] lg:font-medium">{service.description}</p>
              </div>
            ))}
          </div>
          </div>
          </section>
          <section className="content_1 section__wrapper mt-[8vw]">
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h2 className="text-align-left lg:text-[1.5vw] lg:font-bold">
                        OUR SERVICE GUARANTEE
                      </h2>
                      <p className="text-align-left lg:text-[1vw] font-medium lg:mt-[1vw]">
                        ABC  stands behind our technicians and the
                        services they perform by providing a one-year warranty
                        on all our home services. If our home maintenance
                        solutions fall short of your expectations, let us know
                        within one year of the service date, and we will return
                        to your home to make it right.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="feature_2 section__wrapper lg:mt-[1vw]">
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
                        <div className="column-img">
                          <img
                            // src="wp-content/uploads/2022/08/RW-4-3938083b-1-558w.jpg"
                            src="/img/mainti6.jpg"
                            height={373}
                            width={560}
                            alt="Fixing Window Curtain ─ Ann Arbor, MI ─ ABC "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-md-0 mb-5">
                      <div className="column">
                        <div className="column-img">
                          <img
                            // src="wp-content/uploads/2022/08/RW-3-6469f2f3-1-558w.jpg"
                            src="/img/mainti7.jpg"
                            height={373}
                            width={560}
                            alt="Checking Electricity ─ Ann Arbor, MI ─ ABC "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="top-triangle" />
          <section className="content_1 section__wrapper blue-bg triangle-above">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <div
                        id={1706102484}
                        className="dmNewParagraph"
                        data-element-type="paragraph"
                        data-version={5}
                      >
                        <h2 className="text-align-left lg:text-[1.5vw] lg:font-bold">
                          YOUR TRUSTED SOURCE FOR HOME REPAIRS NEAR YOU
                        </h2>
                      </div>
                      <div
                        id={1679930216}
                        className="dmNewParagraph md:text-[1vw] "
                        data-element-type="paragraph"
                        data-version={5}
                      >
                        80% of the nation’s 137 million homes are now at least
                        20 years old, and 40% are at least 50 years old. With
                        age comes the need for a little TLC every now and then.
                        Things can also break or start to malfunction in brand
                        new homes when you least expect it. This is where our
                        trusted technicians can step in to assist you in any
                        home repair services you may need.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_2 section__wrapper blue-bg triangle-below reverse-mobile">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content lg:mt-[1vw]">
                      <h3 className="text-align-left lg:text-[1vw]">
                        NEED HELP WITH HOME REPAIRS?
                      </h3>
                      <h3 className="text-align-left lg:text-[1vw]">
                        OUR HOME REPAIR SERVICES INCLUDE:
                      </h3>
                      <ul className="defaultList ">
                        <li>
                          <Link to="#" type="page">
                            Painting
                          </Link>
                        </li>
                        <li>
                          <Link to="#" type="page">
                            Bathroom Repairs
                          </Link>
                        </li>
                        <li>
                          <Link to="#" type="page">
                            Deck Services
                          </Link>
                        </li>
                        <li>
                          <Link to="#" type="page">
                            Door Services
                          </Link>
                        </li>
                        <li>
                          <Link to="#" type="page">
                            Drywall Repairs
                          </Link>
                        </li>
                        <li>
                          <Link to="#" type="page">
                            Fence Repairs
                          </Link>
                        </li>
                        <li>
                          <Link to="#" type="page">
                            Flooring Repairs
                          </Link>
                        </li>
                        <li>
                          <Link to="#" type="page">
                            TV Mounting
                          </Link>
                        </li>
                        <li>
                          <Link to="#" type="page">
                            Tile Repairs
                          </Link>
                        </li>
                      </ul>
                      <h3 className="text-align-left lg:text-[1vw] lg:mt-[1vw]">
                        BROWSE OUR COMPLETE LIST OF HOME SERVICES
                      </h3>
                      <div className="section__button text-left lg:mt-[1vw]">
                        <Link
                          className="btn btn-primary" // commented link to a pdf file
                          to="#" //https://irp.cdn-website.com/9922685c/files/uploaded/Service_Sheet_8.5x14_ABC_Generic.pdf
                          target="_blank"
                        >
                          HOME REPAIR SERVICES
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section__img">
                    <div className="section_img_wrapper">
                      <img
                        width={800}
                        height={534}
                        // src="wp-content/uploads/2022/08/home2.jpg"
                        src="/img/mainti8.jpg"
                        className="attachment-full size-full"
                        alt="Home Front View"
                        decoding="async"
                        // srcSet="https://www.ABCservices.com/wp-content/uploads/2022/08/home2.jpg 800w, https://www.ABCservices.com/wp-content/uploads/2022/08/home2-300x200.jpg 300w, https://www.ABCservices.com/wp-content/uploads/2022/08/home2-768x513.jpg 768w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bottom-triangle" />
          <section className="content_1 section__wrapper " id="steady-hp">
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h2
                        className="m-text-align-left text-align-center lg:text-[1.5vw] "
                        style={{ textAlign: "center" }}
                      >
                        ABC  MAINTENANCE PLANS
                      </h2>
                      <p>&nbsp;</p>
                      <h3 className="text-align-center lg:text-[1.5vw]">
                        WORRY-FREE HOME SERVICES
                      </h3>
                      <p className="text-align-center lg:text-[1vw] ">
                        ABC's annual membership-based maintenance plan
                        takes a proactive approach to caring for your home.
                        Entrust your routine maintenance to us and leave your
                        worries behind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_2 section__wrapper " id="home-plan">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 className="text-align-left lg:text-[1.5vw]">
                        WHY CHOOSE THE ABC  PLAN?
                      </h3>
                      <p className="text-align-left lg:text-[1vw] ">
                        The ABC  Plan provides homeowners with a
                        dependable home maintenance solution. ABC  Plan
                        members avoid the difficulty of finding a reliable
                        handyman to tackle home repairs as they arise. Members
                        enjoy many perks, including:
                      </p>
                      <p className="text-align-left lg:text-[1vw] lg:mt-[1vw]">
                        ›&nbsp; &nbsp; &nbsp;Dependable and Hassle-Free Home
                        Maintenance
                        <br />
                        ›&nbsp; &nbsp; &nbsp;Discount On Our Hourly Bill Rate
                        <br />
                        ›&nbsp; &nbsp; &nbsp;Priority Scheduling
                        <br />
                        ›&nbsp; &nbsp; &nbsp;Yearly Home Evaluations
                        <br />
                        ›&nbsp; &nbsp; &nbsp;Experienced, Insured, and Trusted
                        Technicians
                      </p>
                      <div
                        id={1722661606}
                        className="u_1722661606 dmNewParagraph"
                        data-element-type="paragraph"
                        data-version={5}
                        data-styletopreserve="{"
                      >
                        <h3 className="text-align-left lg:text-[1.5vw] lg:mt-[1vw]">
                          <span className="">
                            LEARN MORE ABOUT THE ABC  PLAN
                          </span>
                        </h3>
                      </div>
                      <div className="section__button text-left lg:mt-[1vw]">
                        <Link
                          className="btn btn-primary"
                          to="/about"
                          target="_self"
                        >
                          ABC  PLAN
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
                    <div className="section_img_wrapper">
                      <img
                        src="/img/mainti4.jpg" className="w-full object-cover max-h-[75vw] lg:max-h-[35vw]"

                        alt="Bathroom"
                        decoding="async"
                        // srcSet="https://www.ABCservices.com/wp-content/uploads/2022/08/bathroom.jpg 800w, https://www.ABCservices.com/wp-content/uploads/2022/08/bathroom-300x200.jpg 300w, https://www.ABCservices.com/wp-content/uploads/2022/08/bathroom-768x512.jpg 768w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_1 section__wrapper " id="customer-review">
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 style={{ textAlign: "center" }}>Customer Review:</h3>
                      <p style={{ textAlign: "center" }}>
                        <strong>
                          “I have enrolled in the ABC  maintenance plan.
                          Last week was my first home safety check visit from
                          Dustin. Dustin inspected everything such as
                          electrical, plumbing, furnace, etc. to ensure good
                          working order. Everything checked out good except that
                          he needed to change out my furnace filter. Dustin is
                          very trustworthy, professional and knowledgeable. I
                          feel so much safer in my home by having this service!
                        </strong>
                      </p>
                      <p style={{ textAlign: "center" }}>
                        <strong>– Therese (Terri) McBride</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="content_1 section__wrapper "
            id="form-header-line"
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
                      <h3 style={{ textAlign: "center" }}>
                        CONTACT A LOCAL HANDYMAN NEAR ME
                      </h3>
                    </div>
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
                        className="m-text-align-left text-align-center"
                        style={{ textAlign: "center" }}
                      >
                        SCHEDULE AN APPOINTMENT ONLINE TODAY TO DISCUSS YOUR
                        PROJECTS WITH
                        <br />
                        YOUR LOCAL HANDYMAN, ABC .
                      </h2>
                      <h3
                        className="text-align-center"
                        style={{ textAlign: "center" }}
                      >
                        Select a Location to Contact your local ABC .
                      </h3>
                      <p style={{ textAlign: "center" }}>
                        Or Complete Our Contact Form to Connect with your Local
                        ABC  Technicians!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </section>
        </div>
        {/* .wrap */}
      </div>
    </>
  );
};

export default MainSlider;
