import React from 'react';
import {changeLocation} from "../redux/actions/actionLocation";
import {overLayerClose} from "../redux/actions/actionOverLayer";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

interface IState {
    overlayerReducer: {
        overLayer: boolean
        sideBarCart: boolean
        sideBar: boolean
        mobileMenu: boolean
    }
}

const CheckoutArea = (props:any) => {
    const history = useHistory()
    const linkClickHandler = (e:any,link:string)=>{
        e.preventDefault();
        props.onOverLayerClose();
        history.push(link);
    }
    
    return (
        <>
            <div className="checkout-main-area pt-90 pb-90">
                <div className="container">
                    <div className="customer-zone mb-20">
                        <p className="cart-page-title">Returning customer? <a className="checkout-click1" href="#">Click
                            here to login</a></p>
                        <div className="checkout-login-info">
                            <p>If you have shopped with us before, please enter your details in the boxes below. If you
                                are a new customer, please proceed to the Billing & Shipping section.</p>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="sin-checkout-login">
                                            <label>Username or email address <span>*</span></label>
                                            <input type="text" name="user-name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="sin-checkout-login">
                                            <label>Passwords <span>*</span></label>
                                            <input type="password" name="user-password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="button-remember-wrap">
                                    <button className="button" type="submit">Login</button>
                                    <div className="checkout-login-toggle-btn">
                                        <input type="checkbox" />
                                            <label>Remember me</label>
                                    </div>
                                </div>
                                <div className="lost-password">
                                    <a href="#">Lost your password?</a>
                                </div>
                            </form>
                            <div className="checkout-login-social">
                                <span>Login with:</span>
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Google</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="customer-zone mb-20">
                        <p className="cart-page-title">Have a coupon? <a className="checkout-click3" href="#">Click here
                            to enter your code</a></p>
                        <div className="checkout-login-info3">
                            <form action="#">
                                <input type="text" placeholder="Coupon code" />
                                    <input type="submit" value="Apply Coupon" />
                            </form>
                        </div>
                    </div>
                    <div className="checkout-wrap pt-30">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="billing-info-wrap mr-50">
                                    <h3>Billing Details</h3>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>First Name <abbr className="required"
                                                                        title="required">*</abbr></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Last Name <abbr className="required"
                                                                       title="required">*</abbr></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Company Name <abbr className="required" title="required">*</abbr></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-select mb-20">
                                                <label>Country <abbr className="required"
                                                                     title="required">*</abbr></label>
                                                <select>
                                                    <option>Select a country</option>
                                                    <option>Azerbaijan</option>
                                                    <option>Bahamas</option>
                                                    <option>Bahrain</option>
                                                    <option>Bangladesh</option>
                                                    <option>Barbados</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Street Address <abbr className="required"
                                                                            title="required">*</abbr></label>
                                                <input className="billing-address"
                                                       placeholder="House number and street name" type="text" />
                                                    <input placeholder="Apartment, suite, unit etc." type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Town / City <abbr className="required" title="required">*</abbr></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="billing-info mb-20">
                                                <label>State / County <abbr className="required"
                                                                            title="required">*</abbr></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="billing-info mb-20">
                                                <label>Postcode / ZIP <abbr className="required"
                                                                            title="required">*</abbr></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="billing-info mb-20">
                                                <label>Phone <abbr className="required"
                                                                   title="required">*</abbr></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="billing-info mb-20">
                                                <label>Email Address <abbr className="required"
                                                                           title="required">*</abbr></label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout-account mb-25">
                                        <input className="checkout-toggle2" type="checkbox" />
                                            <span>Create an account?</span>
                                    </div>
                                    <div className="checkout-account-toggle open-toggle2 mb-30">
                                        <label>Email Address</label>
                                        <input placeholder="Password" type="password" />
                                    </div>
                                    <div className="checkout-account mt-25">
                                        <input className="checkout-toggle" type="checkbox" />
                                            <span>Ship to a different address?</span>
                                    </div>
                                    <div className="different-address open-toggle mt-30">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="billing-info mb-20">
                                                    <label>First Name</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="billing-info mb-20">
                                                    <label>Last Name</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="billing-info mb-20">
                                                    <label>Company Name</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="billing-select mb-20">
                                                    <label>Country</label>
                                                    <select>
                                                        <option>Select a country</option>
                                                        <option>Azerbaijan</option>
                                                        <option>Bahamas</option>
                                                        <option>Bahrain</option>
                                                        <option>Bangladesh</option>
                                                        <option>Barbados</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="billing-info mb-20">
                                                    <label>Street Address</label>
                                                    <input className="billing-address"
                                                           placeholder="House number and street name" type="text" />
                                                        <input placeholder="Apartment, suite, unit etc." type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="billing-info mb-20">
                                                    <label>Town / City</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="billing-info mb-20">
                                                    <label>State / County</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="billing-info mb-20">
                                                    <label>Postcode / ZIP</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="billing-info mb-20">
                                                    <label>Phone</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="billing-info mb-20">
                                                    <label>Email Address</label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="additional-info-wrap">
                                        <label>Order notes</label>
                                        <textarea
                                            placeholder="Notes about your order, e.g. special notes for delivery. "
                                            name="message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="your-order-area">
                                    <h3>Your order</h3>
                                    <div className="your-order-wrap gray-bg-4">
                                        <div className="your-order-info-wrap">
                                            <div className="your-order-info">
                                                <ul>
                                                    <li>Product <span>Total</span></li>
                                                </ul>
                                            </div>
                                            <div className="your-order-middle">
                                                <ul>
                                                    <li>Product Name X 1 <span>$329 </span></li>
                                                    <li>Product Name X 1 <span>$329 </span></li>
                                                </ul>
                                            </div>
                                            <div className="your-order-info order-subtotal">
                                                <ul>
                                                    <li>Subtotal <span>$329 </span></li>
                                                </ul>
                                            </div>
                                            <div className="your-order-info order-shipping">
                                                <ul>
                                                    <li>Shipping <p>Enter your full address </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="your-order-info order-total">
                                                <ul>
                                                    <li>Total <span>$273.00 </span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="payment-method">
                                            <div className="pay-top sin-payment">
                                                <input id="payment_method_1" className="input-radio" type="radio"
                                                       value="cheque" checked name="payment_method" />
                                                    <label htmlFor="payment_method_1"> Direct Bank Transfer </label>
                                                    <div className="payment-box payment_method_bacs">
                                                        <p>Make your payment directly into our bank account. Please use
                                                            your Order ID as the payment reference.</p>
                                                    </div>
                                            </div>
                                            <div className="pay-top sin-payment">
                                                <input id="payment-method-2" className="input-radio" type="radio"
                                                       defaultValue="cheque" name="payment_method" />
                                                    <label htmlFor="payment-method-2">Check payments</label>
                                                    <div className="payment-box payment_method_bacs">
                                                        <p>Make your payment directly into our bank account. Please use
                                                            your Order ID as the payment reference.</p>
                                                    </div>
                                            </div>
                                            <div className="pay-top sin-payment">
                                                <input id="payment-method-3" className="input-radio" type="radio"
                                                       defaultValue="cheque" name="payment_method" />
                                                    <label htmlFor="payment-method-3">Cash on delivery </label>
                                                    <div className="payment-box payment_method_bacs">
                                                        <p>Make your payment directly into our bank account. Please use
                                                            your Order ID as the payment reference.</p>
                                                    </div>
                                            </div>
                                            <div className="pay-top sin-payment sin-payment-3">
                                                <input id="payment-method-4" className="input-radio" type="radio"
                                                       defaultValue="cheque" name="payment_method" />
                                                    <label htmlFor="payment-method-4">PayPal <img alt=""
                                                                                                  src={"/images/icon-img/payment.png"} /><a
                                                        href="#">What is PayPal?</a></label>
                                                    <div className="payment-box payment_method_bacs">
                                                        <p>Make your payment directly into our bank account. Please use
                                                            your Order ID as the payment reference.</p>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Place-order mt-40">
                                        <a href="#">Place Order</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
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
        onOverLayerClose: ()=>dispatch(overLayerClose())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutArea);
