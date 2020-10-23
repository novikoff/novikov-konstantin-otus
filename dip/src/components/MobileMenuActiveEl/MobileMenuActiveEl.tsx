import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Image } from "react-bootstrap";

const MobileMenuActiveEl = () => {
  return (
    <div className="mobile-menu-active clickalbe-sidebar-wrapper-style-1">
      <div className="clickalbe-sidebar-wrap">
        <a className="sidebar-close">
          <i className=" ti-close "></i>
        </a>
        <div className="mobile-menu-content-area sidebar-content-100-percent">
          <div className="mobile-search">
            <form className="search-form" action="#">
              <input type="text" placeholder="Search entire store…" />
              <button className="button-search">
                <i className=" ti-search "></i>
              </button>
            </form>
          </div>
          <div className="clickable-mainmenu-wrap clickable-mainmenu-style1">
            <nav>
              <ul>
                <li className="has-sub-menu">
                  <a href="#">
                    Home
                    <span className="menu-expand">
                          <i className=" ti-plus "></i>
                        </span>
                  </a>
                  <ul className="sub-menu-2" style={{ display: "none" }}>
                    <li className="has-sub-menu">
                      <a href="#">
                        Demo Group 01
                        <span className="menu-expand">
                              <i className=" ti-plus "></i>
                            </span>
                      </a>
                      <ul
                        className="sub-menu-2"
                        style={{ display: "none" }}
                      >
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
                    <li className="has-sub-menu">
                      <a href="#">
                        Demo Group 02
                        <span className="menu-expand">
                              <i className=" ti-plus "></i>
                            </span>
                      </a>
                      <ul
                        className="sub-menu-2"
                        style={{ display: "none" }}
                      >
                        <li>
                          <a href="index-furniture.html">Home Furniture</a>
                        </li>
                        <li>
                          <a href="index-handmade.html">Home Handmade</a>
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
                <li className="has-sub-menu">
                  <a href="#">
                    Pages
                    <span className="menu-expand">
                          <i className=" ti-plus "></i>
                        </span>
                  </a>
                  <ul className="sub-menu-2" style={{ display: "none" }}>
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
                <li className="has-sub-menu">
                  <a href="#">
                    shop
                    <span className="menu-expand">
                          <i className=" ti-plus "></i>
                        </span>
                  </a>
                  <ul className="sub-menu-2" style={{ display: "none" }}>
                    <li className="has-sub-menu">
                      <a href="#">
                        Shop Layout
                        <span className="menu-expand">
                              <i className=" ti-plus "></i>
                            </span>
                      </a>
                      <ul
                        className="sub-menu-2"
                        style={{ display: "none" }}
                      >
                        <li>
                          <a href="shop-fullwide.html">Shop Fullwidth</a>
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
                          <a href="shop-list-style.html">Shop List Style</a>
                        </li>
                        <li>
                          <a href="shop-collection.html">Shop Collection</a>
                        </li>
                        <li>
                          <a href="shop-instagram.html">Shop Instagram</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-sub-menu">
                      <a href="#">
                        Product Layout
                        <span className="menu-expand">
                              <i className=" ti-plus "></i>
                            </span>
                      </a>
                      <ul
                        className="sub-menu-2"
                        style={{ display: "none" }}
                      >
                        <li>
                          <a href="product-details.html">Single 01</a>
                        </li>
                        <li>
                          <a href="product-details-2.html">Single 02</a>
                        </li>
                        <li>
                          <a href="product-details-group.html">Grouped</a>
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
                    <li className="has-sub-menu">
                      <a href="#">
                        Shop Page
                        <span className="menu-expand">
                              <i className=" ti-plus "></i>
                            </span>
                      </a>
                      <ul
                        className="sub-menu-2"
                        style={{ display: "none" }}
                      >
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
                          <a href="order-tracking.html">Order Tracking</a>
                        </li>
                        <li>
                          <a href="compare.html">Compare</a>
                        </li>
                        <li>
                          <a href="store.html">Store</a>
                        </li>
                        <li>
                          <a href="login-register.html">login / register</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwide.html">Collections</a>
                </li>
                <li className="has-sub-menu">
                  <a href="#">
                    Blog
                    <span className="menu-expand">
                          <i className=" ti-plus "></i>
                        </span>
                  </a>
                  <ul className="sub-menu-2" style={{ display: "none" }}>
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
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-curr-lang-wrap">
            <div className="single-mobile-curr-lang">
              <a className="mobile-language-active" href="#">
                Language <i className="fa fa-angle-down"></i>
              </a>
              <div className="lang-curr-dropdown lang-dropdown-active">
                <ul>
                  <li>
                    <a href="#">English (US)</a>
                  </li>
                  <li>
                    <a href="#">English (UK)</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="single-mobile-curr-lang">
              <a className="mobile-currency-active" href="#">
                Currency <i className="fa fa-angle-down"></i>
              </a>
              <div className="lang-curr-dropdown curr-dropdown-active">
                <ul>
                  <li>
                    <a href="#">USD</a>
                  </li>
                  <li>
                    <a href="#">EUR</a>
                  </li>
                  <li>
                    <a href="#">Real</a>
                  </li>
                  <li>
                    <a href="#">BDT</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-aside-content">
            <div className="header-aside-payment">
              <img src="assets/images/icon-img/payment.png" alt="payment" />
            </div>
            <p>
              Pellentesque mollis nec orci id tincidunt. Sed mollis risus eu
              nisi aliquet, sit amet fermentum.
            </p>
            <div className="aside-contact-info">
              <ul>
                <li>
                  <i className=" ti-alarm-clock "></i>Monday - Friday: 9:00
                  - 19:00
                </li>
                <li>
                  <i className=" ti-email "></i>Info@example.com
                </li>
                <li>
                  <i className=" ti-mobile "></i>(+55) 254. 254. 254
                </li>
                <li>
                  <i className=" ti-home "></i>Helios Tower 75 Tam Trinh
                  Hoang - Ha Noi - Viet Nam
                </li>
              </ul>
            </div>
            <div className="social-icon-style-2 mb-25">
              <a className="facebook" href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="twitter" href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="google-plus" href="#">
                <i className="fa fa-google-plus"></i>
              </a>
              <a className="behance" href="#">
                <i className="fa fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuActiveEl;
