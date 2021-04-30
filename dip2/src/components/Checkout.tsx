import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import HeaderItem from "./HeaderItem";
import SideBar from "./SideBars/SideBar";
import SideBarCart from "./SideBars/SideBarCart";
import MobileMenu from "./SideBars/MobileMenu";
import BreadcrumbCheckout from "./BreadcrumbCheckout";
import CartArea from "./CartArea";
import SubscribeComp from "./SubscribeComp";
import FooterComp from "./FooterComp";
import {changeLocation} from "../redux/actions/actionLocation";
import {overLayerClose} from "../redux/actions/actionOverLayer";
import {connect} from "react-redux";
import CheckoutArea from "./CheckoutArea";

interface IState {
    overlayerReducer: {
        overLayer: boolean
        sideBarCart: boolean
        sideBar: boolean
        mobileMenu: boolean
    }
}

const Checkout = (props:any) => {
    let location= useLocation().pathname;
    useEffect(() => {
        props.onChangeLocation(location)
    },[]);
    return (
        <>
            <HeaderItem />
            <SideBar />
            <SideBarCart />
            <MobileMenu />
            <BreadcrumbCheckout />
            <CheckoutArea />
            <SubscribeComp />
            <FooterComp/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

