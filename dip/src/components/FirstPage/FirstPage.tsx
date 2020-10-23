import React, { Component } from "react";
import { connect } from "react-redux";
//import {} from "../../redux/action/actions";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

interface IState {
  AppReducer: { [key: string]: any };
}

interface IProps {}
import "./FirstPage.less";
import FooterEl from "../FooterEl/FooterEl";
import HeaderEl from "../HeaderEl/HeaderEl";
import SideBarEl from "../SideBarEl/SideBarEl";
import SideBarCartEl from "../SideBarCartEl/SideBarCartEl";

class FirstPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="main-wrapper">
        <div className="body-overlay"></div>
        <HeaderEl />
        <SideBarEl />
        <SideBarCartEl />

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
        <div className="slider-area">
          <div className="container-fluid p-0">
            <div className="main-slider-active-1 owl-carousel slider-nav-position-2 slider-nav-style-2 owl-loaded owl-drag">
              <div className="owl-stage-outer"></div>
              <div className="owl-nav">
                <div className="owl-prev">
                  <i className="lnr lnr-arrow-left"></i>
                </div>
                <div className="owl-next">
                  <i className="lnr lnr-arrow-right"></i>
                </div>
              </div>
              <div className="owl-dots">
                <div className="owl-dot active">
                  <span></span>
                </div>
                <div className="owl-dot">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-area pb-115">
          <div className="container">
            <div className="section-title-2 text-center mb-30">
              <h2>New Products</h2>
            </div>
          </div>
          <div className="section-padding-1">
            <div className="container-fluid">
              <div className="product-tab-list nav mb-60">
                <a className="active" href="#product-1" data-toggle="tab">
                  All
                </a>
                <a href="#product-2" data-toggle="tab">
                  Phone
                </a>
                <a href="#product-3" data-toggle="tab">
                  Laptop
                </a>
                <a href="#product-4" data-toggle="tab">
                  Camera &amp; Photo
                </a>
                <a href="#product-5" data-toggle="tab">
                  Computer &amp; Accessories
                </a>
                <a href="#product-6" data-toggle="tab">
                  Car &amp; Vehicle Electornics
                </a>
              </div>
              <div className="tab-content jump padding-55-row-col">
                <div id="product-1" className="tab-pane active">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-1.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-green badge-right-20 badge-top-20 badge-ptb-1">
                            NEW
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Adapt Active Noise Cancelling Headphones
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$59.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-2.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Case, Heavy Duty [Military Grade]{" "}
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$20.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-3.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -25%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Libratone Track Air+ True Wireless Active Noise
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$59.99</span>
                            <span className="new-price">$35.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-4.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire C24-865-UA91 AIO Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$50.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-5.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iBUYPOWER Gaming PC Computer Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-6.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -30%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Andoer Gimbal 3-Axis Handheld Stabilizer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$66.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-7.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire TC-885-UA92 Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$90.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-8.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Polaroid ZIP Wireless Mobile Photo Mini Printer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-9.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              CyberpowerPC Gamer Xtreme VR Gaming PC
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$70.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-10.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              External DVD CD Drive, Aluminum
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-11.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              SkyTech Supremacy Gaming Computer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-12.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Protective Cover with Tempered Film
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$80.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="load-btn-style-1 text-center">
                    <a href="shop-fullwide.html">
                      <span>
                        <i className="fa fa-spinner fa-spin"></i>
                      </span>
                      View more products
                    </a>
                  </div>
                </div>
                <div id="product-2" className="tab-pane">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-12.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-green badge-right-20 badge-top-20 badge-ptb-1">
                            NEW
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Adapt Active Noise Cancelling Headphones
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$59.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-11.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Case, Heavy Duty [Military Grade]{" "}
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$20.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-10.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -25%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Libratone Track Air+ True Wireless Active Noise
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$59.99</span>
                            <span className="new-price">$35.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-9.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire C24-865-UA91 AIO Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$50.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-8.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iBUYPOWER Gaming PC Computer Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-7.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -30%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Andoer Gimbal 3-Axis Handheld Stabilizer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$66.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-6.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire TC-885-UA92 Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$90.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-5.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Polaroid ZIP Wireless Mobile Photo Mini Printer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-4.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              CyberpowerPC Gamer Xtreme VR Gaming PC
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$70.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-3.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              External DVD CD Drive, Aluminum
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-2.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              SkyTech Supremacy Gaming Computer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-1.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Protective Cover with Tempered Film
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$80.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="load-btn-style-1 text-center">
                    <a href="shop-fullwide.html">
                      <span>
                        <i className="fa fa-spinner fa-spin"></i>
                      </span>
                      View more products
                    </a>
                  </div>
                </div>
                <div id="product-3" className="tab-pane">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-8.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-green badge-right-20 badge-top-20 badge-ptb-1">
                            NEW
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Adapt Active Noise Cancelling Headphones
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$59.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-7.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Case, Heavy Duty [Military Grade]{" "}
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$20.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-6.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -25%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Libratone Track Air+ True Wireless Active Noise
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$59.99</span>
                            <span className="new-price">$35.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-5.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire C24-865-UA91 AIO Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$50.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-4.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iBUYPOWER Gaming PC Computer Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-3.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -30%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Andoer Gimbal 3-Axis Handheld Stabilizer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$66.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-2.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire TC-885-UA92 Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$90.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-1.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Polaroid ZIP Wireless Mobile Photo Mini Printer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-12.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              CyberpowerPC Gamer Xtreme VR Gaming PC
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$70.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-11.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              External DVD CD Drive, Aluminum
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-10.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              SkyTech Supremacy Gaming Computer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-9.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Protective Cover with Tempered Film
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$80.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="load-btn-style-1 text-center">
                    <a href="shop-fullwide.html">
                      <span>
                        <i className="fa fa-spinner fa-spin"></i>
                      </span>
                      View more products
                    </a>
                  </div>
                </div>
                <div id="product-4" className="tab-pane">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-4.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-green badge-right-20 badge-top-20 badge-ptb-1">
                            NEW
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Adapt Active Noise Cancelling Headphones
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$59.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-3.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Case, Heavy Duty [Military Grade]{" "}
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$20.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-2.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -25%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Libratone Track Air+ True Wireless Active Noise
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$59.99</span>
                            <span className="new-price">$35.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-1.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire C24-865-UA91 AIO Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$50.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-8.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iBUYPOWER Gaming PC Computer Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-7.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -30%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Andoer Gimbal 3-Axis Handheld Stabilizer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$66.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-6.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire TC-885-UA92 Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$90.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-5.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Polaroid ZIP Wireless Mobile Photo Mini Printer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-12.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              CyberpowerPC Gamer Xtreme VR Gaming PC
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$70.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-11.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              External DVD CD Drive, Aluminum
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-10.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              SkyTech Supremacy Gaming Computer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-9.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Protective Cover with Tempered Film
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$80.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="load-btn-style-1 text-center">
                    <a href="shop-fullwide.html">
                      <span>
                        <i className="fa fa-spinner fa-spin"></i>
                      </span>
                      View more products
                    </a>
                  </div>
                </div>
                <div id="product-5" className="tab-pane">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-5.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-green badge-right-20 badge-top-20 badge-ptb-1">
                            NEW
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Adapt Active Noise Cancelling Headphones
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$59.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-4.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Case, Heavy Duty [Military Grade]{" "}
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$20.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-2.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -25%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Libratone Track Air+ True Wireless Active Noise
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$59.99</span>
                            <span className="new-price">$35.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-3.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire C24-865-UA91 AIO Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$50.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-1.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iBUYPOWER Gaming PC Computer Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-9.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -30%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Andoer Gimbal 3-Axis Handheld Stabilizer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$66.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-8.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire TC-885-UA92 Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$90.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-7.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Polaroid ZIP Wireless Mobile Photo Mini Printer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-6.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              CyberpowerPC Gamer Xtreme VR Gaming PC
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$70.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-12.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              External DVD CD Drive, Aluminum
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-5.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              SkyTech Supremacy Gaming Computer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-2.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Protective Cover with Tempered Film
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$80.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="load-btn-style-1 text-center">
                    <a href="shop-fullwide.html">
                      <span>
                        <i className="fa fa-spinner fa-spin"></i>
                      </span>
                      View more products
                    </a>
                  </div>
                </div>
                <div id="product-6" className="tab-pane">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-1.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-green badge-right-20 badge-top-20 badge-ptb-1">
                            NEW
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Adapt Active Noise Cancelling Headphones
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$59.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-2.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Case, Heavy Duty [Military Grade]{" "}
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$20.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-3.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -25%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Libratone Track Air+ True Wireless Active Noise
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$59.99</span>
                            <span className="new-price">$35.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-4.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire C24-865-UA91 AIO Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$50.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-5.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iBUYPOWER Gaming PC Computer Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-6.jpg"
                              alt=""
                            />
                          </a>
                          <span className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">
                            -30%
                          </span>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Andoer Gimbal 3-Axis Handheld Stabilizer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$66.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-7.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Acer Aspire TC-885-UA92 Desktop
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$90.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-8.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              Polaroid ZIP Wireless Mobile Photo Mini Printer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-9.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              CyberpowerPC Gamer Xtreme VR Gaming PC
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$70.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-10.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              External DVD CD Drive, Aluminum
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="old-price">$70.99</span>
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-11.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              SkyTech Supremacy Gaming Computer
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$60.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="product-wrap mb-55">
                        <div className="product-img pro-theme-color-border product-border mb-25">
                          <a href="product-details.html">
                            <img
                              src="assets/images/product/e-product-img-12.jpg"
                              alt=""
                            />
                          </a>
                          <div className="product-action product-action-position-1 pro-action-theme-color">
                            <a title="Add to Cart" href="#">
                              <i className="fa fa-cart-arrow-down"></i>
                            </a>
                            <a
                              data-toggle="modal"
                              data-target="#exampleModal"
                              href="#"
                            >
                              <i className="fa fa-search-plus"></i>
                            </a>
                            <a title="Add to Wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                            <a title="Add to Compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h4>
                            <a href="product-details.html">
                              iPhone 11 Protective Cover with Tempered Film
                            </a>
                          </h4>
                          <div className="product-price">
                            <span className="new-price">$80.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="load-btn-style-1 text-center">
                    <a href="shop-fullwide.html">
                      <span>
                        <i className="fa fa-spinner fa-spin"></i>
                      </span>
                      View more products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterEl />
      </div>
    );
  }
}

function mapStateToProps(state: IState, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FirstPage)
);
