import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../../redux/action/actions";
import { Route, Link } from "react-router-dom";
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
import "./NavEl.less";

interface IState {
  AppReducer: { [key: string]: any };
}

interface IProps {}

class NavEl extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    //this.props.onSetApiKey(this.props.API_KEY);
    //this.props.onLoadCities(cities_json);
  }

  componentDidMount() {}

  render() {
    return (
      <header>
        <Navbar fixed="top" bg="light" expand="md">
          <Navbar.Brand>
            <Link to={"/"}>
              <Image
                className={"logo"}
                src={logoImg}
                alt="Mens Sculpture"
              ></Image>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="mr-auto">
              <NavLink to={"/"} key={1} className={"nav-link"}>
                HOME
              </NavLink>
              <NavLink to={"/help"} key={2} className={"nav-link"}>
                HELP & SUPPORT
              </NavLink>
              <Nav.Link href="mailto:info@fitnessforyou.club">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

function mapStateToProps(state: IState, ownProps) {
  return {
    //full_cities_list: state.AppReducer.full_cities_list,
    // API_KEY: ownProps.API_KEY,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavEl));
