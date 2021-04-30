import React, {useState} from 'react';
import {TransitionGroup, CSSTransition, Transition} from "react-transition-group";

function ItemShopArea(props:any) {
    const onChangeCount = (e:any)=>{
        return
    }
    const changeImage = (bigImgSrc:any)=>{
        setBigImg(bigImgSrc);
    }



    let itemImages=[
        {small:"/images/product-details/small-1.jpg",large: "/images/product-details/large-1.jpg"},
        {small:"/images/product-details/small-2.jpg",large: "/images/product-details/large-2.jpg"},
        {small:"/images/product-details/small-3.jpg",large: "/images/product-details/large-3.jpg"},
        {small:"/images/product-details/small-4.jpg",large: "/images/product-details/large-4.jpg"},
    ]


    const [bigImg,setBigImg]=useState((itemImages.length>0)?itemImages[0].large:"");

    return (
        <>
            <div className="shop-area section-padding-2 pb-110">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <div className="product-details-tab">
                                <div className="product-dec-right pro-dec-big-img-slider">
                                    <div className="easyzoom-style">
                                        <div className="easyzoom easyzoom--overlay">
                                            <a onClick={()=>{}}>

                                                    <img src={bigImg} alt="" />

                                            </a>
                                        </div>
                                        <a className="easyzoom-pop-up img-popup"
                                           onClick={()=>{}}><i
                                            className="fa fa-search-plus"></i></a>
                                    </div>
                                    {/*<div className="easyzoom-style" style={{display:'none'}}>*/}
                                    {/*    <div className="easyzoom easyzoom--overlay">*/}
                                    {/*        <a href="/images/product-details/b-large-2.jpg">*/}

                                    {/*            <img src={`${process.env.PUBLIC_URL}/images/product-details/large-2.jpg`} alt="" />*/}
                                    {/*        </a>*/}
                                    {/*    </div>*/}
                                    {/*    <a className="easyzoom-pop-up img-popup"*/}
                                    {/*       href="/images/product-details/b-large-2.jpg"><i*/}
                                    {/*        className="fa fa-search-plus"></i></a>*/}
                                    {/*</div>*/}
                                    {/*<div className="easyzoom-style" style={{display:'none'}}>*/}
                                    {/*    <div className="easyzoom easyzoom--overlay">*/}
                                    {/*        <a href="/images/product-details/b-large-3.jpg">*/}
                                    {/*            <img src={"/images/product-details/large-3.jpg"} alt="" />*/}
                                    {/*        </a>*/}
                                    {/*    </div>*/}
                                    {/*    <a className="easyzoom-pop-up img-popup"*/}
                                    {/*       href="/images/product-details/b-large-3.jpg"><i*/}
                                    {/*        className="fa fa-search-plus"></i></a>*/}
                                    {/*</div>*/}
                                    {/*<div className="easyzoom-style" style={{display:'none'}}>*/}
                                    {/*    <div className="easyzoom easyzoom--overlay">*/}
                                    {/*        <a href="/images/product-details/b-large-4.jpg">*/}
                                    {/*            <img src={"/images/product-details/large-4.jpg"} alt="" />*/}
                                    {/*        </a>*/}
                                    {/*    </div>*/}
                                    {/*    <a className="easyzoom-pop-up img-popup"*/}
                                    {/*       href="/images/product-details/b-large-4.jpg"><i*/}
                                    {/*        className="fa fa-search-plus"></i></a>*/}
                                    {/*</div>*/}
                                    {/*<div className="easyzoom-style" style={{display:'none'}}>*/}
                                    {/*    <div className="easyzoom easyzoom--overlay">*/}
                                    {/*        <a href="/images/product-details/b-large-2.jpg">*/}
                                    {/*            <img src={"/ima ges/product-details/large-2.jpg"} alt="" />*/}
                                    {/*        </a>*/}
                                    {/*    </div>*/}
                                    {/*    <a className="easyzoom-pop-up img-popup"*/}
                                    {/*       href="/images/product-details/b-large-2.jpg"><i*/}
                                    {/*        className="fa fa-search-plus"></i></a>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="product-dec-slider product-dec-left">
                                    {/*<div className="product-dec-small active">*/}
                                    {/*    <img src={"/images/product-details/small-1.jpg"}  alt="" onClick={(e)=>changeImage(e.target)} />*/}
                                    {/*</div>*/}
                                    {/*<div className="product-dec-small">*/}
                                    {/*    <img src={"/images/product-details/small-2.jpg"}  alt="" onClick={(e)=>changeImage(e.target)} />*/}
                                    {/*</div>*/}
                                    {/*<div className="product-dec-small">*/}
                                    {/*    <img src={"/images/product-details/small-3.jpg"}  alt="" onClick={(e)=>changeImage(e.target)} />*/}
                                    {/*</div>*/}
                                    {/*<div className="product-dec-small">*/}
                                    {/*    <img src={"/images/product-details/small-4.jpg"} alt="" onClick={(e)=>changeImage(e.target)} />*/}
                                    {/*</div>*/}
                                    {/*<div className="product-dec-small">*/}
                                    {/*    <img src={"/images/product-details/small-2.jpg"}  alt="" onClick={(e)=>changeImage(e.target)} />*/}
                                    {/*</div>*/}
                                    {itemImages.map((el,i)=>{

                                        return <div className="product-dec-small"><img src={el.small}  alt="" onClick={()=>changeImage(el.large)} /></div>
                                    })}
                                </div>
                            </div>
                        </div>



                        <div className="col-xl-6 col-lg-12">
                            <div className="product-details-wrap pro-dec-res-mrg-top">
                                <div className="product-details-content pro-dec-content-left">
                                    <div className="pro-dec-next-prev">
                                        <a className="prev" href="#"><i className=" ti-arrow-left "></i></a>
                                        <a href="#"><i className=" ti-view-grid "></i></a>
                                        <a className="next" href="#"><i className=" ti-arrow-right "></i></a>
                                    </div>
                                    <span>Headphones</span>
                                    <h2 className="uppercase">Noise Cancelling Headphones</h2>
                                    <div className="pro-dec-info-wrap">
                                        <div className="pro-dec-ratting-wrap">
                                            <div className="pro-dec-ratting">
                                                <i className="yellow fa fa-star"></i>
                                                <i className="yellow fa fa-star"></i>
                                                <i className="yellow fa fa-star"></i>
                                                <i className="yellow fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <a href="#"> 5 Customer Review</a>
                                        </div>
                                        <div className="pro-dec-stock">
                                            <ul>
                                                <li>Brand: <span>Mango</span></li>
                                                <li className="green">In Stock</li>
                                                <li><i className="fa fa-check-circle-o"></i><span>19 Sold</span> / 40 In
                                                    Stock
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h3>$19.99</h3>
                                    <div className="product-details-peragraph">
                                        <p>Sed ligula sapien, fermentum id est eget, viverra auctor sem. Vivamus maximus
                                            enim vitae urna porta, ut euismod nibh lacinia. Pellentesque at diam sed
                                            libero tincidunt feugiat. Morbi efficitur augue leo. Morbi convallis augue
                                            viverra purus.</p>
                                    </div>
                                    <div className="product-details-action-wrap">
                                        <div className="product-details-quality">
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton"
                                                       value="2" onChange={(e)=>onChangeCount(e)} />
                                            </div>
                                        </div>
                                        <div className="product-details-cart">
                                            <a title="Add to cart" href="#">Add to cart</a>
                                        </div>
                                        <div className="product-details-wishlist">
                                            <a title="Add to wishlist" href="#"><i className="fa fa-heart-o"></i></a>
                                        </div>
                                        <div className="product-details-compare">
                                            <a title="Add to compare" href="#"><i className="fa fa-compress"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-details-meta">
                                        <span>SKU: N/A</span>
                                        <span className="categories">Categories: <a href="#">Woman</a>, <a
                                            href="#">Dress</a>, <a href="#">Style</a>, <a href="#">T-Shirt</a>, <a
                                            href="#">Mango</a></span>
                                        <span>Tag: <a href="#">Fashion</a>, <a href="#">Dress</a> </span>
                                        <span>Product ID: <a href="#">274</a></span>
                                    </div>
                                    <div className="product-details-info">
                                        <a href="#"><i className=" ti-location-pin "></i>Check Store availability</a>
                                        <a href="#"><i className=" ti-shopping-cart "></i>Delivery and Return</a>
                                        <a href="#"><i className="ti-pin"></i>Ask a Question</a>
                                    </div>
                                    <div className="product-details-social-wrap">
                                        <span>SHARE THIS PRODUCT</span>
                                        <div className="product-details-social">
                                            <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
                                            <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                                            <a className="pinterest" href="#"><i className="fa fa-pinterest-p"></i></a>
                                            <a className="google-plus" href="#"><i
                                                className="fa fa-google-plus"></i></a>
                                        </div>
                                    </div>
                                </div>



                                <div className="pro-dec-content-right">
                                    <div className="pro-dec-banner-wrap">
                                        <a href="#"><img src={"/images/product-details/pro-details-sidebar-1.png"}
                                                         alt="" /></a>
                                        <div className="pro-dec-banner-content">
                                            <h4>HELLO SUMMER</h4>
                                            <h2>SALE UP <br /> TO 50%</h2>
                                        </div>
                                    </div>
                                    <div className="sidebar-subscribe-wrap">
                                        <div className="sidebar-subscribe-content text-center">
                                            <i className=" ti-email "></i>
                                            <h5>Join Our Newsletter</h5>
                                            <p>Sale up to 20% off for your next purchase in this month!</p>
                                        </div>
                                        <div className="sidebar-subscribe-form">
                                            <form className="validate subscribe-form-style" noValidate
                                                  target="_blank" name="mc-embedded-subscribe-form" method="post"
                                                  action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                                                <div className="mc-form">
                                                    <input className="email" type="email" required
                                                           placeholder=" email address…" name="EMAIL" defaultValue={""} />
                                                        <div className="mc-news" aria-hidden="true">
                                                            <input type="text"
                                                                   name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                                                                   defaultValue={""}/>
                                                        </div>
                                                        <div className="clear">
                                                            <input className="button" type="submit" name="subscribe"
                                                                   defaultValue={"Subscribe"}  />
                                                        </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemShopArea;
