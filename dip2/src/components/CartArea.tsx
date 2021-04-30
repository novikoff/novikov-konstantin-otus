import React from 'react';
import {useHistory} from "react-router-dom";
import {changeLocation} from "../redux/actions/actionLocation";
import {overLayerClose} from "../redux/actions/actionOverLayer";
import {connect} from "react-redux";

interface IState {

}

const CartArea = (props:any) => {
    const history = useHistory()
    const linkClickHandler = (e:any,link:string)=>{
        e.preventDefault();
        props.onOverLayerClose();
        history.push(link);
    }
    return (
        <>
            <div className="cart-main-area pt-110 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="table-content table-responsive cart-table-content">
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th>Product</th>
                                                    <th> Price</th>
                                                    <th>Quantity</th>
                                                    <th>total</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="product-remove">
                                                        <a href="#"><i className=" ti-close "></i></a>
                                                    </td>
                                                    <td className="product-img">
                                                        <a href="#"><img src={"/images/cart/cart-1.jpg"} alt="" /></a>
                                                    </td>
                                                    <td className="product-name"><a href="#">Heavy Duty [Military
                                                        Grade] </a></td>
                                                    <td className="product-price"><span className="amount">$26.00</span>
                                                    </td>
                                                    <td className="cart-quality">
                                                        <div className="product-details-quality quality-width-cart">
                                                            <div className="cart-plus-minus">
                                                                <input className="cart-plus-minus-box" type="text"
                                                                       name="qtybutton" value="2" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-total"><span>$110.00</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-remove">
                                                        <a href="#"><i className=" ti-close "></i></a>
                                                    </td>
                                                    <td className="product-img">
                                                        <a href="#"><img src={"/images/cart/cart-2.jpg"} alt="" /></a>
                                                    </td>
                                                    <td className="product-name"><a href="#">Noise Cancelling
                                                        Headphones</a></td>
                                                    <td className="product-price"><span className="amount">$26.00</span>
                                                    </td>
                                                    <td className="cart-quality">
                                                        <div className="product-details-quality quality-width-cart">
                                                            <div className="cart-plus-minus">
                                                                <input className="cart-plus-minus-box" type="text"
                                                                       name="qtybutton" value="2" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-total"><span>$110.00</span></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="cart-shiping-update-wrapper">
                                            <div className="discount-code">
                                                <input type="text"  name="name"
                                                       placeholder="Enter your coupon code" />
                                                    <button className="coupon-btn" type="submit">Apply coupon</button>
                                            </div>
                                            <div className="cart-clear">
                                                <a href="#">Clear Cart</a>
                                                <a className="update-cart" href="#">Update cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="grand-total-wrap">
                                            <h4>Cart Totals</h4>
                                            <div className="grand-total-content">
                                                <ul>
                                                    <li>Subtotal <span> $87.00</span></li>
                                                    <li>Shipping
                                                        <ul>
                                                            <li><input type="radio" name="shipping" value="info"
                                                                       checked={true} />Flat rate: $10</li>
                                                            <li><input type="radio" name="shipping" value="info2" />Free
                                                                shipping</li>
                                                            <li><input type="radio" name="shipping" value="info3" />Local
                                                                pickup</li>
                                                        </ul>
                                                    </li>
                                                    <li>Total Price <span>$87.00</span></li>
                                                </ul>
                                            </div>
                                            <div className="grand-btn">
                                                <a onClick={(e)=>{linkClickHandler(e,"/checkout/")}}>Proceed to checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
function mapStateToProps(state: IState) {
    return {

    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        onChangeLocation: (payload:string)=>dispatch(changeLocation(payload)),
        onOverLayerClose:()=>dispatch(overLayerClose())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartArea);

