import React from "react";
import logo from "./logo.svg";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { add, addNumber, asyncAdd, sub } from "./redux/actions/actions";
import SignUp from "./components/SignUp";

interface IState {
  counterReducer: {
    counter: number;
  };
}

function App(props: any) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUp />
      </div>
    </Container>

    // <div className="container">
    //     <div className="row">
    //         <div>{props.counter}</div>
    //
    //     </div>
    //   <div className="row">
    //
    //     <Button variant="primary" onClick={props.onAdd}>Add</Button>
    //     <Button variant="primary" onClick={props.onSub}>Remove</Button>
    //   </div>
    //
    //     <div className="row">
    //         <input type="text" />
    //         <Button variant="primary" onClick={()=>props.onAddNumber(15)}>Add</Button>
    //         <Button variant="primary" onClick={()=>props.onAddNumber(-17)}>Remove</Button>
    //     </div>
    //
    //     <div className="row">
    //         <input type="text" />
    //         <Button variant="primary" onClick={()=>props.onAsyncAdd(100)}>Async add 100</Button>
    //     </div>
    // </div>
  );
}

function mapStateToProps(state: IState) {
  return {
    counter: state.counterReducer.counter,
    //full_cities_list: state.AppReducer.full_cities_list,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: (number: number) => dispatch(addNumber(number)),
    onAsyncAdd: (number: number) => dispatch(asyncAdd(number)),
    /*addNumber: (payload) => dispatch(addNumber(payload)),
        onAsyncAdd: (payload) => dispatch(addAsync(payload)),
        onLoadCities: (json_list) => dispatch(LoadCities(json_list)),
        onSetApiKey: (ApiKey) => dispatch(setApiKey(ApiKey)),*/
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
