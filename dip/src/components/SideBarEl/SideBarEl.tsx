import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Image } from "react-bootstrap";

const SideBarEl = () => {
  return (
    <div className="clickalbe-sidebar-wrapper-active clickalbe-sidebar-wrapper-style-1">
      <div className="clickalbe-sidebar-wrap clickalbe-sidebar-padding-dec">
        <a className="sidebar-close">
          <i className=" ti-close "></i>
        </a>
        <div className="header-aside-content sidebar-content-100-percent">
          <div className="header-aside-menu">
            <nav>
              <ul>
                <li>
                  <a href="#">About Young</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Collection</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">New Look</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-aside-payment">
            <img src="assets/images/icon-img/payment.png" alt="payment" />
          </div>
          <p>
            Pellentesque mollis nec orci id tincidunt. Sed mollis risus eu nisi
            aliquet, sit amet fermentum.
          </p>
          <div className="aside-contact-info">
            <ul>
              <li>
                <i className=" ti-alarm-clock "></i>Monday - Friday: 9:00 -
                19:00
              </li>
              <li>
                <i className=" ti-email "></i>Info@example.com
              </li>
              <li>
                <i className=" ti-mobile "></i>(+55) 254. 254. 254
              </li>
              <li>
                <i className=" ti-home "></i>Helios Tower 75 Tam Trinh Hoang -
                Ha Noi - Viet Nam
              </li>
            </ul>
          </div>
          <div className="social-icon-style-2 mb-25">
            <a className="facebook" href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a className="twitter" href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="google-plus" href="#">
              <i className="fa fa-google-plus"></i>
            </a>
            <a className="behance" href="#">
              <i className="fa fa-behance"></i>
            </a>
          </div>
          <div className="copyright copyright-gray-2">
            <p>
              © 2020{" "}
              <a target="_blank" href="https://hasthemes.com/">
                Young.
              </a>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarEl;
