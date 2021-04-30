import React, {useEffect} from 'react';
import {logOut, setError, signIn,statusChanged,userLogOut} from "../redux/actions/actionFirebase";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

interface IState {
    authReducer: {
        currentUser: string,
        authenticated: boolean,
        error: string,
        user: any,
    }
}

const AuthLinks = (props:any) => {
    const history = useHistory()
    const linkClickHandler = (e:any,link:string)=>{
        e.preventDefault();
        history.push(link);
    }

    useEffect(() => {
        console.log(props.authenticated);
        console.log(props.currentUser);
    },[props.authenticated]);

    useEffect(() => {
        props.onStatusChanged();
    },[]);


    return (
        <>
            {props.authenticated ?
                <>
                    <div className="store-wrap same-style-2">
                        <ul>
                            <li><a onClick={()=>{}}>{props.currentUser}</a></li>
                        </ul>
                    </div>
                    <div className="store-wrap same-style-2">
                        <ul>
                            <li><a onClick={props.onUserLogOut}>LogOut</a></li>
                        </ul>
                    </div>
                </>
                :
                <>
                    <div className="store-wrap same-style-2">
                        <ul>
                            <li><a onClick={(e)=>{linkClickHandler(e,"/signin/")}}>SignIn</a></li>
                        </ul>
                    </div>
                    <div className="store-wrap same-style-2">
                        <ul>
                            <li><a onClick={(e)=>{linkClickHandler(e,"/signup/")}}>SingUp</a></li>
                        </ul>
                    </div>
                </>
            }
        </>
    );
};

function mapStateToProps(state: IState) {
    return {
        authenticated: state.authReducer.authenticated,
        currentUser: state.authReducer.currentUser,
        user: state.authReducer.user,
        error: state.authReducer.error,
        //full_cities_list: state.AppReducer.full_cities_list,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        onSignIn: (login:string,pass:string) => dispatch(signIn(login,pass)),
        onLogOut: () => dispatch(logOut()),
        onSetError: (error:string) => dispatch(setError(error)),
        onStatusChanged:()=>dispatch(statusChanged()),
        onUserLogOut: ()=>dispatch(userLogOut()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLinks);

