import React,{useState,useEffect} from "react";

import {  Container } from "react-bootstrap";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import Item from "./components/Item";
import {Route,Switch,BrowserRouter,useLocation,matchPath} from "react-router-dom";
import {AnimatedSwitch} from "./components/AnimatedSwitch";
import {AnimatedRoute} from "./components/AnimatedRoute";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
// interface IState {
//   rootReducer: {
//     counter: number
//   };
// }
interface IState {
  locationReducer: {
    location: string
  }
}


function App(props: any) {

    //let TransitionEffect="page-slide"
   // const [location,setLocation] = useState(useLocation().pathname);
    const [transitionEffect,setTransitionEffect] = useState('page-slide');
    const [count,setCount] = useState(0);
    const onInc = ()=>{
        //setCount(count+1);
    }
    //let location= useLocation().pathname;

    useEffect(() => {

    },[]);

    useEffect(() => {
        //const currentPath = location.pathname;
        //const searchParams = new URLSearchParams(location.search);
        //console.log(currentPath);
            if(matchPath(props.location, {path: `/`,exact:true})){
                setTransitionEffect("page-slide");
            }else{
                setTransitionEffect("page-slide_out");
                //setTransitionEffect("page-slide_out");
            }

    },[props.location]);
    //console.log(location);
    //

    //let location = useLocation();
    // useEffect(() => {
    //     const currentPath = location.pathname;
    //     const searchParams = new URLSearchParams(location.search);
    //     console.log(currentPath);
    // },[location]);

    // useEffect(() => {
    //     console.log(location);
    //     let m = matchPath(location, {
    //         path: `/`,
    //     })
    //     console.log(m);
    // },[]);

    // if(){
    //     setTransitionEffect("page-slide_out");
    //     console.log(transitionEffect);
    // }else{
    //     setTransitionEffect("page-slide")
    //     console.log(transitionEffect);
    // }

    //console.log(match)

  return (
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   <div className="w-100" style={{ maxWidth: "400px" }}>
    //     {/*<SignUp />*/}
    //     <SignIn />
    //   </div>
    // </Container>
      <>
          {/*<Switch>*/}
          {/*  <Route path={"/"} exact component={Main} />*/}
          {/*  <Route path={"/item/"} component={Item} />*/}
          {/*</Switch>*/}
          <BrowserRouter basename={''}>
              <AnimatedSwitch
                  animationClassName={transitionEffect}
                  animationTimeout={500}
              >
                  <AnimatedRoute exact path="/" component={Main} />
                  <AnimatedRoute exact path="/item/" component={Item} />
                  <AnimatedRoute exact path="/cart/" component={Cart} />
                  <AnimatedRoute exact path="/checkout/" component={Checkout} />
                  <AnimatedRoute exact path="/signin/" component={SignIn} />
                  <AnimatedRoute exact path="/signup/" component={SignUp} />
              </AnimatedSwitch>
          </BrowserRouter>
      </>

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
      location:state.locationReducer.location
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    // onAdd: () => dispatch(add()),
    // onSub: () => dispatch(sub()),
    // onAddNumber: (number: number) => dispatch(addNumber(number)),
    // onAsyncAdd: (number: number) => dispatch(asyncAdd(number)),

    /*addNumber: (payload) => dispatch(addNumber(payload)),
        onAsyncAdd: (payload) => dispatch(addAsync(payload)),
        onLoadCities: (json_list) => dispatch(LoadCities(json_list)),
        onSetApiKey: (ApiKey) => dispatch(setApiKey(ApiKey)),*/
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
