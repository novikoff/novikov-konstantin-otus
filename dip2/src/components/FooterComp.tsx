import React from 'react';
import {useHistory} from "react-router-dom";

const FooterComp = (props:any) => {
    const history = useHistory()
    const linkClickHandler = (e:any,link:string)=>{
        e.preventDefault();
        history.push(link);
    }
    return (
        <>
            <footer className="footer-area section-padding-1">
                <div className="container-fluid">
                    <div className="footer-top pt-50 pb-50">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="footer-logo">
                                    <a onClick={(e)=>linkClickHandler(e,"/")}>
                                        <img src={"/images/logo/logo.png"} alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-menu">
                                    <nav>
                                        <ul>
                                            <li><a className="active" onClick={(e)=>linkClickHandler(e,"/")}>HOME</a></li>
                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>PAGES</a></li>
                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>SHOP</a></li>
                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>COLLECTIONS</a></li>
                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>BLOG</a></li>
                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>ELEMENTS</a></li>
                                            <li><a onClick={(e)=>linkClickHandler(e,"/")}>CONTACT</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="social-icon-style social-icon-right">
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fa fa-google"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-botoom border-top-1">
                        <div className="row">
                            <div className="col-12">
                                <div className="copyright text-center copyright-ptb">
                                    <p>©Novikov Konstantin  <a onClick={(e)=>linkClickHandler(e,"/")}>All rights
                                        reserved.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterComp;
