import React, {MutableRefObject, useRef} from 'react';
import {Form,Button,Card,Alert} from 'react-bootstrap'
import {logOut, setError, signIn} from "../redux/actions/actionFirebase"
import {connect} from "react-redux";
import HeaderItem from "./HeaderItem";
import SideBar from "./SideBars/SideBar";
import SideBarCart from "./SideBars/SideBarCart";
import MobileMenu from "./SideBars/MobileMenu";
import SubscribeComp from "./SubscribeComp";
import FooterComp from "./FooterComp";
import {useHistory} from "react-router-dom";

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



function SignIp(props:any) {
    const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

    const history = useHistory()
    const linkClickHandler = (e:any,link:string)=>{
        e.preventDefault();
        props.onOverLayerClose();
        history.push(link);
    }

    const formSubmit = async (e:any) => {
        e.preventDefault();
        const emailVal:string=(emailRef.current===null ? '':emailRef.current.value).trim();
        const passwordVal:string=(passwordRef.current ===null ? '':passwordRef.current.value).trim();

        if(emailVal!==null && passwordVal) {
            if(passwordVal.length<6){
                return props.onSetError("Password too short");
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailVal)) {
                return props.onSetError("Invalid email address");
            }
            props.onSignIn(emailVal, passwordVal)
                .then((result:any)=>{
                    console.log('after',result)
                    history.push("/");
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
                        <h2 className="text-center mb-4">SignIn</h2>
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
                            <Button className="w-100" type="submit" >Sign In</Button>
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
        onLogOut: () => dispatch(logOut()),
        onSetError: (error:string) => dispatch(setError(error)),

        /*addNumber: (payload) => dispatch(addNumber(payload)),
            onAsyncAdd: (payload) => dispatch(addAsync(payload)),
            onLoadCities: (json_list) => dispatch(LoadCities(json_list)),
            onSetApiKey: (ApiKey) => dispatch(setApiKey(ApiKey)),*/
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIp);
