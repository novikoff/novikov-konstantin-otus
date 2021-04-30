import React, {MutableRefObject, useRef} from 'react';
import {Form,Button,Card,Alert} from 'react-bootstrap'
import {logOut, setError, signIn, signUp} from "../redux/actions/actionFirebase"
import {connect} from "react-redux";
import HeaderItem from "./HeaderItem";
import SideBar from "./SideBars/SideBar";
import SideBarCart from "./SideBars/SideBarCart";
import MobileMenu from "./SideBars/MobileMenu";
import ItemShopArea from "./ItemShopArea";
import SubscribeComp from "./SubscribeComp";
import FooterComp from "./FooterComp";

interface IState {
    // counterReducer: {
    //     counter: number;
    // };
    authReducer: {
        currentUser: string
        user: { }
        error: string
    }
}



 function SignUp(props:any) {
    const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;
    const passwordConfirmRef = useRef() as MutableRefObject<HTMLInputElement>;


    const formSubmit = async (e:any) => {
        e.preventDefault();
         const emailVal:string=(emailRef.current===null ? '':emailRef.current.value).trim();
         const passwordVal:string=(passwordRef.current ===null ? '':passwordRef.current.value).trim();
         const passwordConfirmVal:string=(passwordConfirmRef.current === null ? '':passwordConfirmRef.current.value).trim();
        if(emailVal!==null && passwordVal && passwordConfirmVal) {
            if(passwordVal !== passwordConfirmVal){
                return props.onSetError("Password do not match");
            }
            if(passwordVal.length<6){
                return props.onSetError("Password too short");
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailVal)) {
                return props.onSetError("Invalid email address");
            }
            props.onSignUp(emailVal, passwordVal, passwordConfirmVal)
                .then((result:any)=>{
                    console.log('after',result)

                })
                .catch((err:string)=>{

                });
        }
    }

    return (
       <>
           <div className={`main-wrapper ${props.overLayer?"overlay-active":""}`}>
               {props.overLayer && <div className="body-overlay"></div>}
               <HeaderItem />
               <SideBar />
               <SideBarCart />
               <MobileMenu />
               <div className="container mb-5">
                   <Card>
                       <Card.Body>
                           <h2 className="text-center mb-4">SignUp</h2>
                           {props.error && <Alert variant="danger">
                               {props.error}
                           </Alert>}
                           <Form onSubmit={formSubmit}>
                               <Form.Group id="email">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control type="email"  ref={emailRef} required />
                               </Form.Group>
                               <Form.Group id="password">
                                   <Form.Label>Password</Form.Label>
                                   <Form.Control type="password" required ref={passwordRef} />
                               </Form.Group>
                               <Form.Group id="password-confirm">
                                   <Form.Label>Password confirm</Form.Label>
                                   <Form.Control type="password" required ref={passwordConfirmRef} />
                               </Form.Group>
                               <Button className="w-100" type="submit" >Sign Up</Button>
                           </Form>
                       </Card.Body>
                   </Card>
               </div>
               <SubscribeComp />
               <FooterComp />
           </div>

       </>
    );
}

//export default SignUp;

function mapStateToProps(state: IState) {
    return {
        currentUser: state.authReducer.currentUser,
        user: state.authReducer.user,
        error: state.authReducer.error,
        //full_cities_list: state.AppReducer.full_cities_list,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        // onAdd: () => dispatch(add()),
        // onSub: () => dispatch(sub()),
        // onAddNumber: (number: number) => dispatch(addNumber(number)),
        // onAsyncAdd: (number: number) => dispatch(asyncAdd(number)),

        onSignIn: (login:string,pass:string) => dispatch(signIn(login,pass)),
        onSignUp: (login:string,pass:string,confirmPass:string) => dispatch(signUp(login,pass,confirmPass)),
        onLogOut: () => dispatch(logOut()),
        onSetError: (error:string) => dispatch(setError(error)),

        /*addNumber: (payload) => dispatch(addNumber(payload)),
            onAsyncAdd: (payload) => dispatch(addAsync(payload)),
            onLoadCities: (json_list) => dispatch(LoadCities(json_list)),
            onSetApiKey: (ApiKey) => dispatch(setApiKey(ApiKey)),*/
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
