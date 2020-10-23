import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../../redux/action/actions";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  FormControl,
  Form,
  Button,
  Image,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";

import logoImg from "./images/logo.png";
import "./FooterEl.less";

interface IState {
  AppReducer: { [key: string]: any };
}

interface IProps {}

class FooterEl extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    //this.props.onSetApiKey(this.props.API_KEY);
    //this.props.onLoadCities(cities_json);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <footer className="footer-area border-top-2">
          <div className="container">
            <div className="footer-top pt-100 pb-35">
              <div className="row align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="footer-ml-95">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                        <div className="footer-widget mb-55">
                          <h3 className="footer-title">Userful</h3>
                          <div className="footer-info-list">
                            <ul>
                              <li>
                                <a href="#">Help Center</a>
                              </li>
                              <li>
                                <a href="#">Affiliate Program</a>
                              </li>
                              <li>
                                <a href="#">Services</a>
                              </li>
                              <li>
                                <a href="#">Terms &amp; Conditions</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 col-sm-6">
                        <div className="footer-widget footer-mrg-1 mb-55">
                          <h3 className="footer-title">Hot Tags</h3>
                          <div className="footer-info-list">
                            <ul>
                              <li>
                                <a href="#">Fashion, </a>
                                <a href="#">Furniture</a>
                              </li>
                              <li>
                                <a href="#">Design,</a>
                                <a href="#"> Minimal,</a>
                                <a href="#">Trending</a>
                              </li>
                              <li>
                                <a href="#">Skudmart,</a>
                                <a href="#"> WooCommerce,</a>
                                <a href="#">Top</a>
                              </li>
                              <li>
                                <a href="#">Dress,</a>
                                <a href="#">Suit, </a>
                                <a href="#">Kids</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 col-12 col-sm-6">
                        <div className="footer-widget footer-mrg-2 mb-55">
                          <h3 className="footer-title">Contact info</h3>
                          <div className="footer-info-list">
                            <ul>
                              <li>Phone: +54.8638.8583.43</li>
                              <li>Email: info@la-studioweb.com</li>
                              <li>
                                Open time: 9:00 - 19:00, Monday - Saturday
                              </li>
                              <li>
                                Local: 121 King Street, Melbourne <br />
                                Victoria 3000 Australia
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: IState, ownProps) {
  return {
    //full_cities_list: state.AppReducer.full_cities_list,
    //API_KEY: ownProps.API_KEY,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FooterEl)
);
