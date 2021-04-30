import React, {useEffect} from 'react';
import HeaderItem from "./HeaderItem";
import SideBar from "./SideBars/SideBar";
import SideBarCart from "./SideBars/SideBarCart";
import MobileMenu from "./SideBars/MobileMenu";
import BreadcrumbCart from "./BreadcrumbCart";
import CartArea from "./CartArea";
import {useLocation} from "react-router-dom";
import {changeLocation} from "../redux/actions/actionLocation";
import {connect} from "react-redux";
import FooterComp from "./FooterComp";
import SubscribeComp from "./SubscribeComp"
import {overLayerClose} from "../redux/actions/actionOverLayer";

interface IState {
    overlayerReducer: {
        overLayer: boolean
        sideBarCart: boolean
        sideBar: boolean
        mobileMenu: boolean
    }
}
const Cart = (props:any) => {
    let location= useLocation().pathname;
    useEffect(() => {
        props.onChangeLocation(location)
    },[]);
    return (
        <>
            <div className={`main-wrapper ${props.overLayer?"overlay-active":""}`}>
                {props.overLayer && <div className="body-overlay"></div>}
                <HeaderItem />
                <SideBar />
                <SideBarCart />
                <MobileMenu />
                <BreadcrumbCart />
                <CartArea />
                <SubscribeComp />
                <FooterComp/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

