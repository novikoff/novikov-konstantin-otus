import React from 'react';
import { useHistory } from 'react-router-dom'
import {changeLocation} from "../redux/actions/actionLocation";
import {mobileMenuOpen, overLayerClose, sideBarCartOpen, sideBarOpen} from "../redux/actions/actionOverLayer";
import {connect} from "react-redux";
import AuthLinks from "./AuthLinks";
interface IState {
    overlayerReducer: {
        overLayer: boolean
        sideBarCart: boolean
        sideBar: boolean
        mobileMenu: boolean
    }
}

function HeaderItem(props:any) {
    const history = useHistory()
    const linkClickHandler = (e:any,link:string)=>{
        e.preventDefault();
        props.onOverLayerClose();
        history.push(link);
    }
    return (
        <>
            <header className="header-area section-padding-2">
                <div className="header-large-device">
                    <div className="header-top section-padding-2 bg-gray">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-4 offset-lg-8">
                                    <div className="header-right-wrap header-right-flex">
                                        <AuthLinks />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo logo-res-lg">
                                    <a onClick={(e)=>linkClickHandler(e,"/")}>
                                        <img src={"/images/logo/logo.png"} alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="main-menu menu-lh-3 main-menu-padding-1 menu-text-black text-center">
                                    <nav>
                                        <ul>
                                            <li><a className="active" onClick={(e)=>linkClickHandler(e,"/item/")}>HOME</a>
                                                <ul className="mega-menu-style-1 mega-menu-width1">
                                                    <li className="mega-menu-sub-width50"><a className="menu-title"
                                                                                             href="#">Home Group #01</a>
                                                        <ul>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>Home Electronic</a></li>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>Home Book</a></li>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>Home Fashion</a></li>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>Home Flower</a></li>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>Home Cake</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-sub-width50"><a className="menu-title"
                                                                                             href="#">Home Group #02</a>
                                                        <ul>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>Home Furniture</a></li>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>Home Handmade</a></li>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>Home Kids</a></li>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>Home Organic</a></li>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>Home Pet</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">PAGES</a>
                                                <ul className="sub-menu-width">
                                                    <li><a href="about-us.html">About Us</a></li>
                                                    <li><a href="contact.html">Contact Page</a></li>
                                                    <li><a href="404.html">404 Page</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                                    <li><a href="empty-cart.html">Empty Cart</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop-fullwide.html">SHOP</a>
                                                <ul className="mega-menu-style-2 mega-menu-width2 menu-negative-mrg4">
                                                    <li className="mega-menu-sub-width20"><a className="menu-title"
                                                                                             href="#">Shop Layout</a>
                                                        <ul>
                                                            <li><a href="shop-fullwide.html">Shop Fullwidth</a></li>
                                                            <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                                                            <li><a href="shop-3-col.html">Shop 03 Columns</a></li>
                                                            <li><a href="shop-2-col.html">Shop 02 Columns</a></li>
                                                            <li><a href="shop-list-style.html">Shop List Style</a></li>
                                                            <li><a href="shop-collection.html">Shop Collection</a></li>
                                                            <li><a href="shop-instagram.html">Shop Instagram</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-sub-width22"><a className="menu-title"
                                                                                             href="#">Product Layout</a>
                                                        <ul>
                                                            <li><a href="product-details.html">Single 01</a></li>
                                                            <li><a href="product-details-2.html">Single 02</a></li>
                                                            <li><a href="product-details-group.html">Grouped</a></li>
                                                            <li><a href="product-details-sticky.html">Sticky Info</a>
                                                            </li>
                                                            <li><a
                                                                href="product-details-configurable.html">Configurable</a>
                                                            </li>
                                                            <li><a href="product-details-thumbnail.html">Thumbnail</a>
                                                            </li>
                                                            <li><a href="product-details-video.html">Video</a></li>
                                                            <li><a href="product-details-affiliate.html">Affiliate</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-sub-width20"><a className="menu-title"
                                                                                             href="#">Shop Pages</a>
                                                        <ul>
                                                            <li><a href="my-account.html">My Account</a></li>
                                                            <li><a href="checkout.html">Check Out</a></li>
                                                            <li><a onClick={(e)=>linkClickHandler(e,"/cart/")}>Shopping Cart</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                            <li><a href="order-tracking.html">Order Tracking</a></li>
                                                            <li><a href="compare.html">Compare</a></li>
                                                            <li><a href="store.html">Store</a></li>
                                                            <li><a href="login-register.html">login / register</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="mega-menu-sub-width37">
                                                        <div className="banner-menu-content-wrap default-overlay">
                                                            <a href="product-details.html"><img
                                                                src={"/images/menu/banner-header-2.jpg"}
                                                                alt="banner" /></a>
                                                            <div className="banner-menu-content">
                                                                <h2>New <br />Collections</h2>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="shop-fullwide.html">COLLECTIONS</a></li>
                                            <li><a href="blog.html">BLOG</a>
                                                <ul className="sub-menu-width">
                                                    <li><a href="blog.html">Blog Page</a></li>
                                                    <li><a href="blog-no-sidebar.html">Blog No sidebar</a></li>
                                                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">CONTACT</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2">
                                <div className="header-right-wrap header-right-flex hr-mrg-handmade">
                                    <div className="same-style same-style-mrg-dec search-3-area">
                                        <a className="search-toggle" href="#">
                                            <i className="lnr lnr-magnifier s-open"></i>
                                            <i className="ti-close s-close"></i>
                                        </a>
                                        <div className="search-wrap-3">
                                            <form action="#">
                                                <input placeholder="Search products..." type="text" />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="same-style same-style-mrg-dec">
                                        <a href="wishlist.html"><i className="fa fa-heart-o"></i></a>
                                    </div>
                                    <div className="same-style same-style-mrg-dec">
                                        <a className="cart-active" onClick={()=> {props.onSideBarCartOpen()}}><i
                                            className="fa fa-cart-arrow-down"></i></a>
                                    </div>
                                    <div className="same-style same-style-mrg-dec">
                                        <a className="clickalbe-button-active" onClick={()=> {props.onSideBarOpen()}}><i
                                            className="fa fa-bars"></i></a>
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
                                    <a onClick={(e)=>linkClickHandler(e,"/")}>
                                        <img alt="" src={"/images/logo/logo.png"} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="header-right-wrap header-right-flex">
                                    <div className="same-style">
                                        <a href="wishlist.html"><i className="fa fa-heart-o"></i></a>
                                    </div>
                                    <div className="same-style">
                                        <a className="cart-active" onClick={()=> {props.onSideBarCartOpen()}}><i
                                            className="fa fa-cart-arrow-down"></i></a>
                                    </div>
                                    <div className="same-style">
                                        <a className="mobile-menu-button-active" onClick={()=> {props.onMobileMenuOpen()}}><i className="fa fa-bars"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}


function mapStateToProps(state: IState) {
    return {
        overLayer: state.overlayerReducer.overLayer,
        sideBarCart:state.overlayerReducer.sideBarCart,
        sideBar:state.overlayerReducer.sideBar,
        mobileMenu:state.overlayerReducer.mobileMenu,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        onChangeLocation: (payload:string)=>dispatch(changeLocation(payload)),
        onSideBarCartOpen: ()=>dispatch(sideBarCartOpen()),
        onSideBarOpen: ()=>dispatch(sideBarOpen()),
        onMobileMenuOpen: ()=>dispatch(mobileMenuOpen()),
        onOverLayerClose: ()=>dispatch(overLayerClose()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderItem);

