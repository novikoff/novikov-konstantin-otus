import React from 'react';
import { useHistory } from 'react-router-dom'

const ProductArea = () => {
    const history = useHistory()
    const linkClickHandler = (e:any,link:string)=>{
        e.preventDefault();
        history.push(link);
    }
    return (
        <>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")} >
                                                    <img src={"/images/product/e-product-img-1.jpg"} alt=""/>
                                                </a>
                                                <span
                                                    className="badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Adapt Active Noise Cancelling
                                                    Headphones</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$59.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-2.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Case, Heavy Duty [Military
                                                    Grade] </a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$20.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-3.jpg"} alt=""/>
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-25%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Libratone Track Air+ True Wireless
                                                    Active Noise</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-4.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire C24-865-UA91 AIO
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$50.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-5.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iBUYPOWER Gaming PC Computer
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-6.jpg"} alt=""/>
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-30%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Andoer Gimbal 3-Axis Handheld
                                                    Stabilizer</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-7.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire TC-885-UA92 Desktop</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-8.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Polaroid ZIP Wireless Mobile Photo
                                                    Mini Printer</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-9.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>CyberpowerPC Gamer Xtreme VR Gaming
                                                    PC</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$70.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-10.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>External DVD CD Drive, Aluminum</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-11.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>SkyTech Supremacy Gaming Computer</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-12.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Protective Cover with
                                                    Tempered Film</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-btn-style-1 text-center">
                                    <a href="shop-fullwide.html">
                                        <span><i className="fa fa-spinner fa-spin"></i></span>
                                        View more products
                                    </a>
                                </div>
                            </div>
                            <div id="product-2" className="tab-pane">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-12.jpg"} alt=""/>
                                                </a>
                                                <span
                                                    className="badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Adapt Active Noise Cancelling
                                                    Headphones</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$59.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-11.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Case, Heavy Duty [Military
                                                    Grade] </a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$20.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-10.jpg"} alt=""/>
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-25%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Libratone Track Air+ True Wireless
                                                    Active Noise</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-9.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire C24-865-UA91 AIO
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$50.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-8.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iBUYPOWER Gaming PC Computer
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-7.jpg"} alt=""/>
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-30%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Andoer Gimbal 3-Axis Handheld
                                                    Stabilizer</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-6.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire TC-885-UA92 Desktop</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-5.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Polaroid ZIP Wireless Mobile Photo
                                                    Mini Printer</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-4.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>CyberpowerPC Gamer Xtreme VR Gaming
                                                    PC</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$70.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-3.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>External DVD CD Drive, Aluminum</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-2.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>SkyTech Supremacy Gaming Computer</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-1.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Protective Cover with
                                                    Tempered Film</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-btn-style-1 text-center">
                                    <a href="shop-fullwide.html">
                                        <span><i className="fa fa-spinner fa-spin"></i></span>
                                        View more products
                                    </a>
                                </div>
                            </div>
                            <div id="product-3" className="tab-pane">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-8.jpg"} alt=""/>
                                                </a>
                                                <span
                                                    className="badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Adapt Active Noise Cancelling
                                                    Headphones</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$59.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-7.jpg"} alt=""/>
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Case, Heavy Duty [Military
                                                    Grade] </a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$20.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-6.jpg"} alt=""/>
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-25%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Libratone Track Air+ True Wireless
                                                    Active Noise</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-5.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire C24-865-UA91 AIO
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$50.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-4.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iBUYPOWER Gaming PC Computer
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-3.jpg"} alt="" />
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-30%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Andoer Gimbal 3-Axis Handheld
                                                    Stabilizer</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-2.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire TC-885-UA92 Desktop</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-1.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Polaroid ZIP Wireless Mobile Photo
                                                    Mini Printer</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-12.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>CyberpowerPC Gamer Xtreme VR Gaming
                                                    PC</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$70.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-11.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>External DVD CD Drive, Aluminum</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-10.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>SkyTech Supremacy Gaming Computer</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-9.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Protective Cover with
                                                    Tempered Film</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-btn-style-1 text-center">
                                    <a href="shop-fullwide.html">
                                        <span><i className="fa fa-spinner fa-spin"></i></span>
                                        View more products
                                    </a>
                                </div>
                            </div>
                            <div id="product-4" className="tab-pane">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-4.jpg"} alt="" />
                                                </a>
                                                <span
                                                    className="badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Adapt Active Noise Cancelling
                                                    Headphones</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$59.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-3.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Case, Heavy Duty [Military
                                                    Grade] </a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$20.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-2.jpg"} alt="" />
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-25%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Libratone Track Air+ True Wireless
                                                    Active Noise</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-1.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire C24-865-UA91 AIO
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$50.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-8.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iBUYPOWER Gaming PC Computer
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-7.jpg"} alt="" />
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-30%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Andoer Gimbal 3-Axis Handheld
                                                    Stabilizer</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-6.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire TC-885-UA92 Desktop</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-5.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Polaroid ZIP Wireless Mobile Photo
                                                    Mini Printer</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-12.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>CyberpowerPC Gamer Xtreme VR Gaming
                                                    PC</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$70.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-11.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>External DVD CD Drive, Aluminum</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-10.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>SkyTech Supremacy Gaming Computer</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-9.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Protective Cover with
                                                    Tempered Film</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-btn-style-1 text-center">
                                    <a href="shop-fullwide.html">
                                        <span><i className="fa fa-spinner fa-spin"></i></span>
                                        View more products
                                    </a>
                                </div>
                            </div>
                            <div id="product-5" className="tab-pane">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-5.jpg"} alt="" />
                                                </a>
                                                <span
                                                    className="badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Adapt Active Noise Cancelling
                                                    Headphones</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$59.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-4.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Case, Heavy Duty [Military
                                                    Grade] </a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$20.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-2.jpg"} alt="" />
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-25%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Libratone Track Air+ True Wireless
                                                    Active Noise</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-3.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire C24-865-UA91 AIO
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$50.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-1.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iBUYPOWER Gaming PC Computer
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-9.jpg"} alt="" />
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-30%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Andoer Gimbal 3-Axis Handheld
                                                    Stabilizer</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-8.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire TC-885-UA92 Desktop</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-7.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Polaroid ZIP Wireless Mobile Photo
                                                    Mini Printer</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-6.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>CyberpowerPC Gamer Xtreme VR Gaming
                                                    PC</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$70.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-12.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>External DVD CD Drive, Aluminum</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-5.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>SkyTech Supremacy Gaming Computer</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-2.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Protective Cover with
                                                    Tempered Film</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-btn-style-1 text-center">
                                    <a href="shop-fullwide.html">
                                        <span><i className="fa fa-spinner fa-spin"></i></span>
                                        View more products
                                    </a>
                                </div>
                            </div>
                            <div id="product-6" className="tab-pane">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-1.jpg"} alt="" />
                                                </a>
                                                <span
                                                    className="badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Adapt Active Noise Cancelling
                                                    Headphones</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$59.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-2.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Case, Heavy Duty [Military
                                                    Grade] </a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$20.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-3.jpg"} alt="" />
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-25%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Libratone Track Air+ True Wireless
                                                    Active Noise</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-4.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire C24-865-UA91 AIO
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$50.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-5.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iBUYPOWER Gaming PC Computer
                                                    Desktop</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-6.jpg"} alt="" />
                                                </a>
                                                <span
                                                    className="badge-theme-color badge-right-20 badge-top-20 badge-ptb-1">-30%</span>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Andoer Gimbal 3-Axis Handheld
                                                    Stabilizer</a></h4>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-7.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Acer Aspire TC-885-UA92 Desktop</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-8.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>Polaroid ZIP Wireless Mobile Photo
                                                    Mini Printer</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$60.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-9.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>CyberpowerPC Gamer Xtreme VR Gaming
                                                    PC</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$70.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="product-wrap mb-55">
                                            <div className="product-img pro-theme-color-border product-border mb-25">
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-10.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>External DVD CD Drive, Aluminum</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-11.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>SkyTech Supremacy Gaming Computer</a>
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
                                                <a onClick={(e)=>linkClickHandler(e,"/item/")}>
                                                    <img src={"/images/product/e-product-img-12.jpg"} alt="" />
                                                </a>
                                                <div
                                                    className="product-action product-action-position-1 pro-action-theme-color">
                                                    <a title="Add to Cart" href="#"><i
                                                        className="fa fa-cart-arrow-down"></i></a>
                                                    <a data-toggle="modal" data-target="#exampleModal" href="#"><i
                                                        className="fa fa-search-plus"></i></a>
                                                    <a title="Add to Wishlist" href="#"><i
                                                        className="fa fa-heart-o"></i></a>
                                                    <a title="Add to Compare" href="#"><i
                                                        className="fa fa-compress"></i></a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a onClick={(e)=>linkClickHandler(e,"/item/")}>iPhone 11 Protective Cover with
                                                    Tempered Film</a></h4>
                                                <div className="product-price">
                                                    <span className="new-price">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-btn-style-1 text-center">
                                    <a href="shop-fullwide.html">
                                        <span><i className="fa fa-spinner fa-spin"></i></span>
                                        View more products
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
);
};

export default ProductArea;
