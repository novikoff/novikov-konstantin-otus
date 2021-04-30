import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import HeaderMain from "./HeaderMain";
import SideBar from "./SideBars/SideBar";
import SideBarCart from "./SideBars/SideBarCart";
import MobileMenu from "./SideBars/MobileMenu";
import SliderArea from "./SliderArea";
import ProductArea from "./ProductArea"
import {useLocation} from "react-router-dom";
import {changeLocation} from "../redux/actions/actionLocation";
import {overLayerClose} from "../redux/actions/actionOverLayer";
import FooterComp from "./FooterComp";
import SubscribeComp from "./SubscribeComp"
interface IState {
    locationReducer:{
        location:string
    },
    overlayerReducer: {
        overLayer: boolean
        sideBarCart: boolean
        sideBar: boolean
        mobileMenu: boolean
    },
}


function Main(props:any) {
    let location= useLocation().pathname;
    //let showcart:boolean = false;
    // const [showCart,setShowCart] = useState(false);
    // const [showSideBar,setShowSideBar] = useState(false);
    // const [showMobileMenu,setShowMobileMenu] = useState(false);

    // const showShowcart = ()=>{
    //     setShowCart(!showCart);
    //     if(showCart===true) {
    //         setShowSideBar(false);
    //         setShowMobileMenu(false);
    //     }
    // }
    //
    // const showShowSideBar = ()=>{
    //     setShowSideBar(!showSideBar);
    //     if (showSideBar===true) {
    //         setShowCart(false);
    //         setShowMobileMenu(false);
    //     }
    // }
    // const showShowMobileMenu = ()=>{
    //     setShowMobileMenu(!showMobileMenu);
    //     if (showMobileMenu===true) {
    //         setShowCart(false);
    //         setShowSideBar(false);
    //     }
    // }

    useEffect(() => {
        props.onChangeLocation(location);
    },[]);


    return (
        <>
        {/*<div className="main-wrapper overlay-active">*/}
        <div className={`main-wrapper ${(props.overLayer)?"overlay-active":""}`}>
            {props.overLayer && <div className="body-overlay"></div>}
            <HeaderMain/>
            <SideBar/>
            <SideBarCart/>
            <MobileMenu/>
            <SliderArea />
            <ProductArea />
            <SubscribeComp />
            <FooterComp/>
        </div>
        </>
    );
}


function mapStateToProps(state: IState) {
    return {
        location:state.locationReducer.location,
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
