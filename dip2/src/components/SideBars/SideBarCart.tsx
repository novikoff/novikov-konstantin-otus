import React from 'react';
import {useHistory} from "react-router-dom";
import {changeLocation} from "../../redux/actions/actionLocation";
import {overLayerClose, sideBarCartClose} from "../../redux/actions/actionOverLayer";
import {connect} from "react-redux";

interface IState {
    overlayerReducer: {
        overLayer: boolean
        sideBarCart: boolean
        sideBar: boolean
        mobileMenu: boolean
    }
}

function SideBarCart(props:any) {



    const history = useHistory()
    const linkClickHandler = (e:any,link:string)=>{
        e.preventDefault();
        props.onOverLayerClose();
        history.push(link);
    }
    return (
        <>
         {/*<div className="sidebar-cart-active inside">*/}
            <div className={`sidebar-cart-active ${props.sideBarCart?"inside":""}`}>
            <div className="sidebar-cart-all">
                <a className="cart-close" onClick={()=>{props.onSideBarCartClose()}}><i className=" ti-close "></i></a>
                <div className="cart-content">
                    <h3>Shopping Cart</h3>
                    <ul>
                        <li className="single-product-cart">
                            <div className="cart-img">
                                <a href="#"><img src={`${process.env.PUBLIC_URL}/images/cart/cart-1.jpg`} alt="" /></a>
                            </div>
                            <div className="cart-title">
                                <h4><a href="#">Awesome Mobile</a></h4>
                                <span> 1 × $49.00	</span>
                            </div>
                            <div className="cart-delete">
                                <a href="#">×</a>
                            </div>
                        </li>
                        <li className="single-product-cart">
                            <div className="cart-img">
                                <a href="#"><img src={`${process.env.PUBLIC_URL}/images/cart/cart-2.jpg`} alt="" /></a>
                            </div>
                            <div className="cart-title">
                                <h4><a href="#">Nice Headphones</a></h4>
                                <span> 1 × $49.00	</span>
                            </div>
                            <div className="cart-delete">
                                <a href="#">×</a>
                            </div>
                        </li>
                    </ul>
                    <div className="cart-total">
                        <h4>Subtotal: <span>$170.00</span></h4>
                    </div>
                    <div className="cart-checkout-btn">
                        <a className="btn-hover cart-btn-style" onClick={(e)=>{linkClickHandler(e,'/cart/')}}>view cart</a>
                        <a className="no-mrg btn-hover cart-btn-style" onClick={(e)=>{linkClickHandler(e,'/checkout/')}}>checkout</a>
                    </div>
                </div>
            </div>
        </div>
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
        onSideBarCartClose: ()=>dispatch(sideBarCartClose()),
        onOverLayerClose: ()=>dispatch(overLayerClose()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarCart);
