import React from 'react';

import {connect} from "react-redux";
import {changeLocation} from "../../redux/actions/actionLocation";
import {overLayerClose, sideBarClose} from "../../redux/actions/actionOverLayer";
import {useHistory} from "react-router-dom";

interface IState {
    overlayerReducer: {
        overLayer: boolean
        sideBarCart: boolean
        sideBar: boolean
        mobileMenu: boolean
    }
}


function SideBar(props:any) {
    const history = useHistory()
    const linkClickHandler = (e:any,link:string)=>{
        e.preventDefault();
        props.onOverLayerClose();
        history.push(link);
    }
    return (
        <>
            <div className={`clickalbe-sidebar-wrapper-active clickalbe-sidebar-wrapper-style-1 ${props.sideBar?"sidebar-visible":""}`}>
                <div className="clickalbe-sidebar-wrap clickalbe-sidebar-padding-dec">
                    <a className="sidebar-close" onClick={()=>{props.onSideBarClose()}}><i className=" ti-close "></i></a>
                    <div className="header-aside-content sidebar-content-100-percent">
                        <div className="header-aside-menu">
                            <nav>
                                <ul>
                                    <li><a href="#">About Young</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Collection</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">New Look</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-aside-payment">
                            <img  src= {`${process.env.PUBLIC_URL}/images/icon-img/payment.png`} alt="payment" />
                        </div>
                        <p>Pellentesque mollis nec orci id tincidunt. Sed mollis risus eu nisi aliquet, sit amet
                            fermentum.</p>
                        <div className="aside-contact-info">
                            <ul>
                                <li><i className=" ti-alarm-clock "></i>Monday - Friday: 9:00 - 19:00</li>
                                <li><i className=" ti-email "></i>Info@example.com</li>
                                <li><i className=" ti-mobile "></i>(+55) 254. 254. 254</li>
                                <li><i className=" ti-home "></i>Helios Tower 75 Tam Trinh Hoang - Ha Noi - Viet Nam
                                </li>
                            </ul>
                        </div>
                        <div className="social-icon-style-2 mb-25">
                            <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
                            <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                            <a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a>
                            <a className="behance" href="#"><i className="fa fa-behance"></i></a>
                        </div>
                        <div className="copyright copyright-gray-2">
                            <p>© 2020 <a  href="https://hasthemes.com/">Young.</a> All rights reserved.
                            </p>
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
        onSideBarClose: ()=>dispatch(sideBarClose()),
        onOverLayerClose: ()=>dispatch(overLayerClose()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);


