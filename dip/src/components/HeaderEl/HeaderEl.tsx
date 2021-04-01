import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "../../redux/action/actions";
import { Spring, animated } from "react-spring/renderprops";
//import SlideToggleContent from "../effects/SlideToggleContent";

import { Route } from "react-router-dom";
import { withRouter } from "react-router";
//import { useTransition, animated } from "react-spring";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  FormControl,
  Form,
  Button,
  Image,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";

import logoImg from "./images/logo.png";
import "./HeaderEl.less";

const HeaderEl = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const LOREM = `Hello world`;

  const [toggle, setToggle] = useState(true);
  const [text, setText] = useState([LOREM]);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onAddText = () => {
    setToggle(true);
    setText([...text, LOREM]);
  };

  const onRemoveText = () => {
    setToggle(true);
    setText(text.slice(1));
  };

  return (
    <React.Fragment>
      {/*<h1>Slide Toggle</h1>*/}
      {/*<button type="button" onClick={() => setIsVisible(!isVisible)}>*/}
      {/*  {isVisible ? "Close" : "Open"} content*/}
      {/*</button>*/}
      {/*<SlideToggleContent isVisible={isVisible}>*/}
      {/*  <React.Fragment>*/}
      {/*    <h2>Success!! 🎉</h2>*/}
      {/*    <p>This content will be mounted and unmounted</p>*/}
      {/*  </React.Fragment>*/}
      {/*</SlideToggleContent>*/}
      <button onClick={onToggle}>Toggle</button>
      <button onClick={onAddText}>Add text</button>
      <button onClick={onRemoveText}>Remove text</button>
      <Spring
        native
        force
        config={{ tension: 2000, friction: 100, precision: 1 }}
        from={{ height: toggle ? 0 : "auto" }}
        to={{ height: toggle ? "auto" : 0 }}
      >
        {(props) => (
          <animated.div className="item" style={props}>
            {text.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </animated.div>
        )}
      </Spring>

      <header className="header-area">
        <div className="header-large-device">
          <div className="header-top section-padding-2 bg-gray">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="social-icon-style social-mrg-dec social-font-dec">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="free-delivery text-center">
                    <h4>
                      Free delivery - <span>On all orders over $90</span>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="header-right-wrap header-right-flex">
                    <div className="store-wrap same-style-2">
                      <ul>
                        <li>
                          <a href="store.html">STORES LOCATOR</a>
                        </li>
                      </ul>
                    </div>
                    <div className="currency-wrap same-style-2">
                      <ul>
                        <li>
                          <a href="#">
                            USD <i className="fa fa-angle-down"></i>
                          </a>
                          <ul>
                            <li>
                              <a href="#">USD</a>
                            </li>
                            <li>
                              <a href="#">EUR</a>
                            </li>
                            <li>
                              <a href="#">GBP</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="language-wrap same-style-2">
                      <ul>
                        <li>
                          <a href="#">
                            ENGLISH <i className="fa fa-angle-down"></i>
                          </a>
                          <ul>
                            <li>
                              <a href="#">ENGLISH</a>
                            </li>
                            <li>
                              <a href="#">FRANCE </a>
                            </li>
                            <li>
                              <a href="#">GERMANY </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-middle section-padding-2">
            <div className="container-fluid">
              <div className="header-ptb">
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-5">
                    <div className="header-cll">
                      <span>
                        {" "}
                        <i className="fa fa-mobile" /> +44.254.254.86
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-2">
                    <div className="logo logo-res-lg text-center">
                      <a href="index.html">
                        <img src="/assets/images/logo/logo.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5">
                    <div className="header-right-wrap header-right-flex">
                      <div className="search-wrap same-style search-width-1 same-style-mrg-dec">
                        <form className="search-form" action="#">
                          <input type="text" placeholder="Search products..." />
                          <button className="button-search">
                            <i className="lnr lnr-magnifier" />
                          </button>
                        </form>
                      </div>
                      <div className="same-style same-style-mrg-dec">
                        <a href="/wishlist.html">
                          <i className="fa fa-heart-o" />
                        </a>
                      </div>
                      <div className="same-style same-style-mrg-dec">
                        <a className="cart-active" href="/cart.html">
                          <i className="fa fa-cart-arrow-down" />
                        </a>
                      </div>
                      <div className="same-style same-style-mrg-dec">
                        <a className="clickalbe-button-active" href="#">
                          <i className="fa fa-bars" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="container">
              <div className="row no-gutters hb-negative-mrg">
                <div className="col-lg-3">
                  <div className="category-menu-wrap bg-theme-color-yellow">
                    <h3 className="showcat">
                      <a href="#">
                        <i className="lnr lnr-menu" /> Categories
                      </a>
                    </h3>
                    <div className="category-menu hidecat">
                      <nav>
                        <ul>
                          <li className="cr-dropdown">
                            <a href="#">
                              Computer
                              <span className="fa fa-angle-right"></span>
                            </a>
                            <div className="category-menu-dropdown ct-menu-res-height-1">
                              <div className="single-category-menu ct-menu-mrg-bottom category-menu-border">
                                <h4>Laptop Accessories</h4>
                                <ul>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Keyboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Mouse
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Bluetooth Speaker
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">LED Light</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="single-category-menu ct-menu-mrg-bottom ct-menu-mrg-left">
                                <h4>Laptop Accessories</h4>
                                <ul>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Keyboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Mouse
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Bluetooth Speaker
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">LED Light</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="single-category-menu">
                                <h4>Laptop Accessories</h4>
                                <ul>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Keyboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Mouse
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Bluetooth Speaker
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">LED Light</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="single-category-menu">
                                <a href="#">
                                  <img
                                    src="assets/images/banner/menu-banner.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="cr-dropdown">
                            <a href="#">
                              Accessories{" "}
                              <span className="fa fa-angle-right"></span>
                            </a>
                            <div className="category-menu-dropdown ct-menu-res-height-2">
                              <div className="single-category-menu">
                                <h4>Laptop Accessories</h4>
                                <ul>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Keyboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Mouse
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Bluetooth Speaker
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">LED Light</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="single-category-menu ct-menu-mrg-left">
                                <h4>Laptop Accessories</h4>
                                <ul>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Keyboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Mouse
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Bluetooth Speaker
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">LED Light</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Computer Kit</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Laptop</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Laptop Accessories </a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Smartwatch</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Accessories</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Cameras</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Mobile Phone</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Drone</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Drone Cameras</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Apple Products </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="main-menu menu-lh-1 main-menu-padding-1 bg-blue menu-text-white main-menu-padding1">
                    <nav>
                      <ul>
                        <li>
                          <a className="active" href="index.html">
                            HOME
                          </a>
                          <ul className="mega-menu-style-1 mega-menu-width1">
                            <li className="mega-menu-sub-width50">
                              <a className="menu-title" href="#">
                                Home Group #01
                              </a>
                              <ul>
                                <li>
                                  <a href="index.html">Home Electronic</a>
                                </li>
                                <li>
                                  <a href="index-book.html">Home Book</a>
                                </li>
                                <li>
                                  <a href="index-fashion.html">Home Fashion</a>
                                </li>
                                <li>
                                  <a href="index-flower.html">Home Flower</a>
                                </li>
                                <li>
                                  <a href="index-cake.html">Home Cake</a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-sub-width50">
                              <a className="menu-title" href="#">
                                Home Group #02
                              </a>
                              <ul>
                                <li>
                                  <a href="index-furniture.html">
                                    Home Furniture
                                  </a>
                                </li>
                                <li>
                                  <a href="index-handmade.html">
                                    Home Handmade
                                  </a>
                                </li>
                                <li>
                                  <a href="index-kids.html">Home Kids</a>
                                </li>
                                <li>
                                  <a href="index-organic.html">Home Organic</a>
                                </li>
                                <li>
                                  <a href="index-pet.html">Home Pet</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">PAGES</a>
                          <ul className="sub-menu-width">
                            <li>
                              <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact Page</a>
                            </li>
                            <li>
                              <a href="404.html">404 Page</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">Coming Soon</a>
                            </li>
                            <li>
                              <a href="empty-cart.html">Empty Cart</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwide.html">SHOP</a>
                          <ul className="mega-menu-style-2 mega-menu-width2 menu-negative-mrg3">
                            <li className="mega-menu-sub-width20">
                              <a className="menu-title" href="#">
                                Shop Layout
                              </a>
                              <ul>
                                <li>
                                  <a href="shop-fullwide.html">
                                    Shop Fullwidth
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-sidebar.html">Shop Sidebar</a>
                                </li>
                                <li>
                                  <a href="shop-3-col.html">Shop 03 Columns</a>
                                </li>
                                <li>
                                  <a href="shop-2-col.html">Shop 02 Columns</a>
                                </li>
                                <li>
                                  <a href="shop-list-style.html">
                                    Shop List Style
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-collection.html">
                                    Shop Collection
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-instagram.html">
                                    Shop Instagram
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-sub-width22">
                              <a className="menu-title" href="#">
                                Product Layout
                              </a>
                              <ul>
                                <li>
                                  <a href="product-details.html">Single 01</a>
                                </li>
                                <li>
                                  <a href="product-details-2.html">Single 02</a>
                                </li>
                                <li>
                                  <a href="product-details-group.html">
                                    Grouped
                                  </a>
                                </li>
                                <li>
                                  <a href="product-details-sticky.html">
                                    Sticky Info
                                  </a>
                                </li>
                                <li>
                                  <a href="product-details-configurable.html">
                                    Configurable
                                  </a>
                                </li>
                                <li>
                                  <a href="product-details-thumbnail.html">
                                    Thumbnail
                                  </a>
                                </li>
                                <li>
                                  <a href="product-details-video.html">Video</a>
                                </li>
                                <li>
                                  <a href="product-details-affiliate.html">
                                    Affiliate
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-sub-width20">
                              <a className="menu-title" href="#">
                                Shop Pages
                              </a>
                              <ul>
                                <li>
                                  <a href="my-account.html">My Account</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Check Out</a>
                                </li>
                                <li>
                                  <a href="cart.html">Shopping Cart</a>
                                </li>
                                <li>
                                  <a href="wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                  <a href="order-tracking.html">
                                    Order Tracking
                                  </a>
                                </li>
                                <li>
                                  <a href="compare.html">Compare</a>
                                </li>
                                <li>
                                  <a href="store.html">Store</a>
                                </li>
                                <li>
                                  <a href="login-register.html">
                                    login / register
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-sub-width37">
                              <div className="banner-menu-content-wrap default-overlay">
                                <a href="product-details.html">
                                  <img
                                    src="assets/images/menu/banner-header-2.jpg"
                                    alt="banner"
                                  />
                                </a>
                                <div className="banner-menu-content">
                                  <h2>
                                    New <br />
                                    Collections
                                  </h2>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwide.html">COLLECTIONS</a>
                        </li>
                        <li>
                          <a href="blog.html">BLOG</a>
                          <ul className="sub-menu-width">
                            <li>
                              <a href="blog.html">Blog Page</a>
                            </li>
                            <li>
                              <a href="blog-no-sidebar.html">Blog No sidebar</a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                Blog Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">CONTACT</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-small-device">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="mobile-logo mobile-logo-width">
                  <a href="index.html">
                    <img alt="" src="assets/images/logo/logo.png" />
                  </a>
                </div>
              </div>
              <div className="col-6">
                <div className="header-right-wrap header-right-flex">
                  <div className="same-style">
                    <a href="wishlist.html">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                  <div className="same-style">
                    <a className="cart-active" href="cart.html">
                      <i className="fa fa-cart-arrow-down"></i>
                    </a>
                  </div>
                  <div className="same-style">
                    <a className="mobile-menu-button-active" href="#">
                      <i className="fa fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="category-menu-wrap bg-theme-color-yellow">
                  <h3>
                    <a
                      className="showcat"
                      onClick={() => setIsVisible(!isVisible)}
                    >
                      <i className="lnr lnr-menu" /> Categories
                    </a>
                  </h3>

                  <React.Fragment>
                    <div className="category-menu mobile-category-menu hidecat">
                      <nav>
                        <ul>
                          <li className="cr-dropdown">
                            <a href="#">
                              Computer <span className="fa fa-angle-down" />
                            </a>
                            <ul className="cr-menu-desktop-none">
                              <li className="cr-sub-dropdown sub-style">
                                <a href="#">
                                  Laptop Accessories{" "}
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul style={{ display: "none" }}>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Keyboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Mouse
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Bluetooth Speaker
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">LED Light</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="cr-sub-dropdown sub-style">
                                <a href="#">
                                  Laptop Accessories{" "}
                                  <i className="fa fa-angle-down"></i>
                                </a>
                                <ul style={{ display: "none" }}>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Keyboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Mouse
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Bluetooth Speaker
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">LED Light</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="cr-sub-dropdown sub-style">
                                <a href="#">
                                  Laptop Accessories{" "}
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul style={{ display: "none" }}>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Keyboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Mouse
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Bluetooth Speaker
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">LED Light</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="cr-dropdown">
                            <a href="#">
                              Accessories <span className="fa fa-angle-down" />
                            </a>
                            <ul className="cr-menu-desktop-none">
                              <li className="cr-sub-dropdown sub-style">
                                <a href="#">
                                  Laptop Accessories{" "}
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul style={{ display: "none" }}>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Keyboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Mouse
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Bluetooth Speaker
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">LED Light</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="cr-sub-dropdown sub-style">
                                <a href="#">
                                  Laptop Accessories{" "}
                                  <i className="fa fa-angle-down"></i>
                                </a>
                                <ul style={{ display: "none" }}>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Keyboard
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Laptop Mouse
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">
                                      Bluetooth Speaker
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwide.html">LED Light</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Computer Kit</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Laptop</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Laptop Accessories </a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="shop-fullwide.html">Smartwatch</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="/shop-fullwide.html">Accessories</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="/shop-fullwide.html">Cameras</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="/shop-fullwide.html">Mobile Phone</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="/shop-fullwide.html">Drone</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="/shop-fullwide.html">Drone Cameras</a>
                          </li>
                          <li className="cr-dropdown">
                            <a href="/shop-fullwide.html">Apple Products </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default HeaderEl;
