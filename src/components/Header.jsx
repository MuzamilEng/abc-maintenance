import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <header className="header" role="banner">
        <div className="container-fluid p-0">
          <div
            className="site-header-main row"
            style={{ position: "relative" }}
          >
            <div className="site-branding col-lg-3 col-9">
              <div className="main-logo bg-[#344451] rounded-[0.7vw] w-[10vw] lg:w-[4vw]">
                <a href="/" rel="home" className="bg-[#344451]">
                  <img
                    src="/img/logo2.png"
                    alt="header logo" className="h-[10vw] lg:h-[4vw]"
                  />
                </a>
              </div>
            </div>
            {/* .site-branding */}
            <div
              id="site-header-menu"
              className="site-header-menu col-lg-9 6 col-3"
            >
              <div className="menu-wrapper">
                <div className="header-social">
                  <ul className="social-list"></ul>
                </div>
                <nav
                  id="site-navigation"
                  aria-label="Main Menu"
                  className="main-navigation"
                >
                  <div className="primary-menu">
                    <ul id="menu-main-menu" className="primary-menu">
                      <li
                        id="menu-item-1003311"
                        className={`${
                          location.pathname === "/" ? "current-menu-item" : ""
                        }`}
                      >
                        <Link to="/" aria-current="page">
                          <p className="lg:text-[1vw]">Wellcome</p>
                        </Link>
                      </li>
                      <li
                        id="menu-item-1003312"
                        className={
                          location.pathname === "/home-maintainence"
                            ? "current-menu-item"
                            : ""
                        }
                      >
                        <Link to="/about">
                          <p className="text-[1vw]">About Us</p>
                        </Link>
                      </li>
                      <li
                        id="menu-item-1003318"
                        className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1003318 ${
                          location.pathname === "/painting-services"
                            ? "current-menu-item"
                            : ""
                        }`}
                      >
                        <Link to="/painting-services">
                          <p className="text-[1vw]">Home Repair Services</p>
                        </Link>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-1003319"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003319"
                          >
                            <Link to="/painting-services">
                              <p className="text-[1vw]">PAINTING SERVICES</p>
                            </Link>
                          </li>
                          <li
                            id="menu-item-1003320"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003320"
                          >
                            <a href="#">
                              BATHROOM REPAIR
                            </a>
                          </li>
                          <li
                            id="menu-item-1003321"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003321"
                          >
                            <a href="#">DECK SERVICES</a>
                          </li>
                          <li
                            id="menu-item-1003322"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003322"
                          >
                            <a href="#">DOOR SERVICES</a>
                          </li>
                          <li
                            id="menu-item-1003323"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003323"
                          >
                            <a href="#">
                              DRYWALL REPAIR
                            </a>
                          </li>
                          <li
                            id="menu-item-1003324"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003324"
                          >
                            <a href="#">FENCE REPAIR</a>
                          </li>
                          <li
                            id="menu-item-1003325"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003325"
                          >
                            <a href="#">
                              FLOORING REPAIR
                            </a>
                          </li>
                          <li
                            id="menu-item-1003326"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003326"
                          >
                            <a href="#">TV MOUNTING</a>
                          </li>
                          <li
                            id="menu-item-1003327"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003327"
                          >
                            <a href="#">TILE REPAIR</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-1003313"
                        className={
                          location.pathname === "/portfolio"
                            ? "current-menu-item"
                            : ""
                        }
                      >
                        <Link to="/portfolio">
                          <p className="text-[1vw]">Portfolio</p>
                        </Link>
                      </li>
                    </ul>
                  </div>{" "}
                </nav>
              </div>
              <div className="location-search">
                <Link to="/contact" className="btn btn-primary mr-0">
                  Contact
                </Link>
              </div>
              <div className="mobile-menu">
                <div onClick={() => setShowSidebar(!showSidebar)} className="menubars sticky top-[10vw] right-[7vw]">
                  <div className="menubar top" />
                  <div className="menubar middle" />
                  <div className="menubar bottom" />
                </div>
                <div className="menubackground"></div>
                {showSidebar && <div className="mobile-nav-menu">
                  <div className="menu-main-menu-container">
                    <ul className="menulinks">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1003283 current_page_item menu-item-1003311">
                        <a href="/" aria-current="page" onClick={() => setShowSidebar(false)}>
                          Welcome
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003312">
                        <a href="/about" onClick={() => setShowSidebar(false)}>
                          About Us
                        </a>
                      </li>
                      
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1003313">
                        <a href="/portfolio">Portfolio</a>
                      </li>
                      
                    </ul>
                  </div>{" "}
                  <div className="mobile-location-search">
                    <a
                      href="/contact"
                      className="btn btn-primary mr-0"
                    >
                      Contact
                    </a>
                  </div>
                </div>}
              </div>
            </div>
            {/* .site-header-menu */}
          </div>
          {/* .site-header-main */}
        </div>
      </header>
    </>
  );
};

export default Header;
