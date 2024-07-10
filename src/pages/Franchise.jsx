import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Franchise = () => {
  const servicesExamples = [
    {
      title: "Kitchens & Bathrooms",
      description: "Our team has successfully renovated numerous kitchens and bathrooms, delivering stylish and functional spaces that meet our clients' unique needs and preferences."
    },
    {
      title: "Driveways & Patios",
      description: "We have transformed outdoor areas with our expert paving services, creating beautiful and durable driveways and patios that enhance curb appeal and usability."
    },
    {
      title: "Property Maintenance",
      description: "From routine maintenance tasks to major property upgrades, we have helped homeowners and businesses maintain their properties in top condition."
    },
    {
      title: "Flooring Solutions",
      description: "Our extensive experience in flooring ensures that we can provide and install the perfect flooring solution for any room, adding both beauty and value to your property."
    },
    {
      title: "Painting & Decorating",
      description: "Our skilled painters and decorators have brought new life to countless homes and offices, creating inviting and vibrant environments."
    }
  ];
  
  
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
      <div id="content" className="main-content" role="main">
        <div className="wrap" id="text_content">
          <section
            className="page__banner"
            style={{
              backgroundImage:
                'url("/img/mainti6.jpg")',
            }}
          >
            <div className="container">
              <div className="page__banner-inner"></div>
            </div>
          </section>
          <section className="content_1 section__wrapper " id="top-block">
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container lg:mt-[3vw]"
                  >
                    <div className="section__content ">
                      <h1 className="lg:text-[2vw] lg:font-bold">
                      Our Portfolio
                      </h1>
                      <h2 className="lg:text-[1.5vw]">
                      At ABC Home Services, we take pride in the quality of our work and the satisfaction of our clients. Here are some of the projects we have completed across Yorkshire:
                      </h2>
                      <div style={{ marginTop: "2vw" }} className="section__content">
                      {servicesExamples.map((service, index) => (
                        <div key={index}>
                          <h2 className="text-align-left mt-[1vw] lg:text-[1.5vw] font-bold">{service.title}</h2>
                          <p className="text-align-left lg:text-[1vw] lg:font-medium ">{service.description}</p>
                        </div>
                      ))}
                      <p className="text-align-left lg:text-[1vw] lg:font-medium ">
                        For more examples of our work and to see how we can help with your next project, get in touch with us at <Link to="mailto:abcmaintenance@gmail.com">abcmaintenance@gmail.com</Link>. Whether you need a minor repair or a major renovation, we are here to provide the expert service you deserve.
                      </p>
                    </div>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw]">
                        ABC  is the only franchise of its kind in the
                        growing home improvement and repair industry. If you
                        have a passion for home improvements and you are looking
                        to own a scalable business with a short startup time and
                        low, initial investment, this is your opportunity.
                      </p>
                      <div className="section__button text-left lg:mt-[2vw]">
                        <Link
                          className="btn btn-primary"
                          to="#lets-get-started"
                          target="_self"
                        >
                          LEARN MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_1 section__wrapper ">
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content lg:mt-[4vw]">
                      <h3 className="lg:text-[1.5vw]">
                        <strong>Why ABC ?</strong>
                      </h3>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        Today’s homeowners are so busy juggling family and
                        careers, home maintenance often goes unmanaged. When
                        home repairs get pushed aside, minor issues can become
                        more expensive problems. HomeSteady’s solution is the
                        ABC  Membership Plan.
                      </p>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw]">
                        The ABC  Plan was created to provide homeowners
                        with a dependable solution to home maintenance and
                        repairs while saving them both time and money.
                      </p>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        For a monthly membership fee, ABC  Plan members
                        receive priority access to HomeSteady’s experienced and
                        insured home technicians and a monthly block of service
                        hours to be used towards HomeSteady’s core maintenance
                        and repair services. Any unused hours rollover to the
                        next month allowing homeowners the choice of monthly
                        maintenance or accruing hours to cover larger home
                        repair projects. It is like having your own personal
                        home repairman!
                      </p>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        ABC  is the only home repair franchise of its kind
                        that offers the benefits of a membership model in the
                        home improvement space. Membership creates repeat
                        business opportunities to get “back in the home” and win
                        more business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_2 section__wrapper one-column-list lg:mt-[3vw]">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 className="lg:text-[1.5vw]">
                        <strong>
                          Be the Boss of a Franchise in a Booming Industry
                        </strong>
                      </h3>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        The home improvement and repair industry is worth more
                        than $400 billion annually, and is growing due to these
                        key factors:
                      </p>
                      <ul className="lg:text-[1.2vw] list-disc lg:ml-[3vw] lg:mt-[1vw]">
                        <li>
                          Total homeowners’ equity has nearly doubled in the
                          past five years
                        </li>
                        <li>
                          80% of the nation’s 137 million homes are now at least
                          20 years old, and 40% are at least 50 years old
                        </li>
                        <li>
                          Millennials tend to buy older homes that need repairs
                          and complete more home improvement projects each year
                          than any other age group
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section__img">
                    <div className="section_img_wrapper">
                      <img
                        width={2560}
                        height={1707}
                        // src="../wp-content/uploads/2022/09/Franchise_BeTheBossOf-scaled.jpg"
                        src="/img/mainti5.jpg"
                        className="attachment-full size-full"
                        alt="Handyman installs cabinets"
                        decoding="async"
                        fetchpriority="high"
                        // srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_BeTheBossOf-scaled.jpg 2560w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_BeTheBossOf-300x200.jpg 300w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_BeTheBossOf-1024x683.jpg 1024w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_BeTheBossOf-768x512.jpg 768w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_BeTheBossOf-1536x1024.jpg 1536w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_BeTheBossOf-2048x1365.jpg 2048w"
                        sizes="(max-width: 2560px) 100vw, 2560px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_1 section__wrapper ">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 className="lg:text-[1.5vw]">
                        Your Future in Frachising
                      </h3>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        With a unique business model that differentiates us from
                        our competitors, ABC  is poised to disrupt the
                        home services sector.
                      </p>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        Not only will you earn revenue from the jobs your
                        technicians perform, but you can also earn revenue
                        through membership sales. No other franchise concept in
                        this space offers this kind of recuring revenue model.
                      </p>
                      <h3 className="lg:text-[1.5vw] lg:mt-[1vw]">
                        Systems &amp; Support
                      </h3>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        Our support team at Franworth is a Best-in-Class
                        franchise growth firm. With over 500 years of experience
                        in franchise leadership and support, our team of
                        veterans will guide and support you through business
                        startup and throughout business ownership.
                      </p>
                      <div className="section__button text-left lg:mt-[2vw]">
                        <Link
                          className="btn btn-primary"
                          to="#gform_3"
                          target="_self"
                        >
                          BECOME A ABC  FRANCHISEE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_2 section__wrapper one-column-list">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 className="lg:text-[1.5vw] lg:mt-[1vw] lg:font-bold">
                        Your Role as An Owner
                      </h3>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        As a ABC  business owner, you are <em>NOT</em> the
                        technician. Your role is to hire technicians to perform
                        ABC  repair and maintenance services.
                      </p>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        As the business owner, you will:
                      </p>
                      <ul className="lg:text-[1.2vw] lg:list-disc lg:ml-[2vw] lg:mt-[1vw]">
                        <li>
                          Manage your marketing investment to generate leads
                        </li>
                        <li>Sell memberships (by you or an employee)</li>
                        <li>
                          Schedule appointments with customers (by you or an
                          employee)
                        </li>
                        <li>
                          Ensure your team provides exceptional service and
                          excellent customer service on every job
                        </li>
                        <li>Lead your team and drive your business</li>
                      </ul>
                      <div className="section__button text-left mt-[2vw]">
                        <Link
                          className="btn btn-primary"
                          to="/contact"
                          target="_self"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section__img">
                    <div className="section_img_wrapper">
                      <img
                        width={2386}
                        height={1686}
                        // src="../wp-content/uploads/2022/09/Franchise_YourRoleAsAnOwner.jpg"
                        src="/img/mainti3.jpg"
                        className="attachment-full size-full"
                        alt="ABC  handyman talks with client"
                        decoding="async"
                        // srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_YourRoleAsAnOwner.jpg 2386w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_YourRoleAsAnOwner-300x212.jpg 300w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_YourRoleAsAnOwner-1024x724.jpg 1024w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_YourRoleAsAnOwner-768x543.jpg 768w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_YourRoleAsAnOwner-1536x1085.jpg 1536w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_YourRoleAsAnOwner-2048x1447.jpg 2048w"
                        sizes="(max-width: 2386px) 100vw, 2386px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_1 section__wrapper one-column-list">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 className="lg:text-[1.5vw] lg:mt-[1vw] lg:font-bold">
                        Is ABC  the Right Fit for You?
                      </h3>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        You do not need a background in home services or
                        construction to be a successful ABC  business
                        owner. We are looking for individuals who are passionate
                        about entrepreneurship and the following characteristics
                        and experience:
                      </p>
                      <ul className="lg:text-[1.2vw] lg:list-disc lg:ml-[2vw] lg:mt-[1vw]">
                        <li>Management experience</li>
                        <li>Comfortable directing workers in the trades</li>
                        <li>Disciplined, optimistic, persuasive</li>
                        <li>Customer service focused</li>
                        <li>Financial acumen to “control the books”</li>
                      </ul>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        If this sounds like you, then you may be the right fit
                        for a ABC  franchise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_2 section__wrapper ">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 className="lg:text-[1.5vw] lg:mt-[1vw] lg:font-bold">
                        Available Territories
                      </h3>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        ABC  is expanding. With franchise opportunities
                        available across the United States, ABC  is
                        looking for driven people who want to be in business for
                        themselves, but not by themselves. If you have great
                        aptitude and a great attitude, and if you are ready to
                        reach your dreams through entrepreneurship, contact us
                        today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section__img">
                    <div className="section_img_wrapper">
                      <img
                        width={400}
                        height={247}
                        src="../wp-content/uploads/2022/09/us-map.jpg"
                        className="attachment-full size-full"
                        alt="Map of the United States"
                        decoding="async"
                        srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/09/us-map.jpg 400w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/us-map-300x185.jpg 300w"
                        sizes="(max-width: 400px) 100vw, 400px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="content_2 section__wrapper "
            id="lets-get-started"
          >
            <div className="container">
              <div className="row ">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 className="lg:text-[1.5vw] lg:mt-[1vw] lg:font-bold">
                        Let’s Get Started
                      </h3>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        If you are interested in opening your own ABC  and
                        learning more about the next steps, please submit an
                        inquiry, and someone from our team will be in touch
                        soon.
                      </p>
                      <p className="lg:text-[1.2vw] lg:leading-[2vw] lg:mt-[1vw]">
                        If we both determine it is the right fit, our onboarding
                        specialists will work closely with you to ensure a
                        seamless startup process by providing detailed insights
                        and advice every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section__img">
                    <div className="section_img_wrapper">
                      <img
                        width={2560}
                        height={1579}
                        // src="../wp-content/uploads/2022/09/Franchise_LetsGetStarted-scaled.jpg"
                        src="/img/mainti1.jpg"
                        className="attachment-full size-full"
                        alt="ABC  Van"
                        decoding="async"
                        // srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_LetsGetStarted-scaled.jpg 2560w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_LetsGetStarted-300x185.jpg 300w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_LetsGetStarted-1024x632.jpg 1024w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_LetsGetStarted-768x474.jpg 768w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_LetsGetStarted-1536x947.jpg 1536w, https://www.homesteadyservices.com/wp-content/uploads/2022/09/Franchise_LetsGetStarted-2048x1263.jpg 2048w"
                        sizes="(max-width: 2560px) 100vw, 2560px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section class="section__wrapper" id="franchise-map-form">
	<div class="container">
		<div class="row">
      <h3>Open Your Own ABC </h3>
			
			
			<div class="col-12">
                           <img src="" alt="header logo" /> */}
        </div>
      </div>
      --&gt;
      {/* .wrap */}
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
  );
};

export default Franchise;
