import {LOG_OUT, AUTH_ERROR, AUTH_USER, SIGN_OUT_USER, SIGN_IN, SET_ERROR} from "./actionTypes";
import {Dispatch} from "redux";
import {auth,firebaseApp} from "../../libs/firebase"
import axios from "axios";
import firebase from "firebase";

// export interface ProcessEnv {
//     [key: string]: string | undefined
// }

export async function serverTokenVerify(accessToken:string){
    return new Promise((resolve,reject)=>{
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+accessToken
        }
        const data = {

        }

        const backend_server=process.env.REACT_APP_BACKEND_SERVER;

        axios.post(backend_server.trim()+'/authVerify', data, {
            headers: headers
        })
            .then((response) => {
                resolve("true");
                //console.log("response",response);

                // dispatch({
                //     type: FOUND_USER,
                //     data: response.data[0]
                // })
            })
            .catch((error) => {
                resolve("false");
                //console.log("error",error);
                // dispatch({
                //     type: ERROR_FINDING_USER
                // })
            })
    })
}

function setAuthToken(cname:string, cvalue:string) {
     const d = new Date();
     d.setTime(d.getTime() + 180*60*1000);
     const expires = "expires="+ d.toUTCString();
   // 1618333833885
    //const expires = "expires="+expirationTime.toString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function setTokenRefresh(cname:string, cvalue:string) {
    const d = new Date();
    d.setTime(d.getTime() + 180*60*1000);
    const expires = "expires="+ d.toUTCString();
    // 1618333833885
    //const expires = "expires="+expirationTime.toString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
// function setAuthToken(cname:string, cvalue:string) {
//     const d = new Date();
//     d.setTime(d.getTime() + 180*60*1000);
//     const expires = "expires="+ d.toUTCString();
//     // 1618333833885
//     //const expires = "expires="+expirationTime.toString();
//     document.cookie = cname + "=" + cvalue + "; " + expires;
// }

export function userLogOut(){
    return (dispatch:Dispatch)=>{
        auth.signOut()
            .then(() => {
            dispatch(logOut());
        }).catch((error:string) => {
            //dispatch(logOut());
            console.log(error);
        });
    }
}

export function statusChanged(){
    return (dispatch:Dispatch)=> {
        return new Promise((resolve, reject) => {
        auth.onAuthStateChanged(function (user) {
            if (user) {

                console.log("user",user)
                //dispatch(authUser(user));
                auth.currentUser?.getIdToken().then(tokenId=>{
                    (async ()=>{
                        let TokenVerify = await serverTokenVerify(tokenId);
                        if(TokenVerify=="true"){
                            console.log("AUTH TRUE");
                            console.log(auth.currentUser);
                            //setAuthToken("authToken",auth.currentUser?.)
                            dispatch(authUser(user));
                            resolve(user);
                        }else{
                            console.log("AUTH FALSE");
                            const error="server token verify failed";
                            dispatch(authError(error));
                            reject(error);
                        }
                    })()
                })
            } else {
                console.log("user ERROR", "No user is signed in.");
                dispatch(authError("No user is signed in."));
                // No user is signed in.

            }
        });
        })
    }
}

export function signIn(email:string,pass:string) {
    return (dispatch: Dispatch) => {
        return new Promise((resolve, reject) => {
     //       auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
                auth.signInWithEmailAndPassword(email, pass)
                    .then(response => {
                        console.log(response);
                        console.log("user",response.user?.refreshToken);
                        //console.log("user",response.user?.expirationTime);
                        //console.log("getIdToken",verifyAuth(auth.currentUser?.getIdToken()));
                        //console.log("getIdToken",auth.currentUser?.getIdToken().);
                        //console.log("getIdToken",auth.currentUser?.getIdTokenResult());
                        // const token =  await auth.currentUser?.getIdToken().then(tokenId=>{
                        //     return tokenId;
                        // });
                        //auth.currentUser?. IdTokenResult()


                        // auth.currentUser?.getIdTokenResult().then(data=>{
                        //     (async ()=>{
                        //
                        //         let TokenVerify = await serverTokenVerify(data.token);
                        //         if(TokenVerify=="true"){
                        //             console.log("AUTH TRUE");
                        //             console.log(auth.currentUser);
                        //             //setAuthToken("authToken",auth.currentUser?.)
                        //             document.cookie = '__session=' + data.token + ';max-age=3600';
                        //             dispatch(authUser(response.user));
                        //             resolve(response.user);
                        //         }else{
                        //             console.log("AUTH FALSE");
                        //             const error="server token verify failed";
                        //             dispatch(authError(error));
                        //             reject(error);
                        //         }
                        //     })()
                        // })

                        auth.currentUser?.getIdToken().then(tokenId=>{
                            (async ()=>{
                                let TokenVerify = await serverTokenVerify(tokenId);
                                if(TokenVerify=="true"){
                                    console.log("AUTH TRUE");
                                    console.log(auth.currentUser);
                                    //setAuthToken("authToken",auth.currentUser?.)
                                    dispatch(authUser(response.user));
                                    resolve(response.user);
                                }else{
                                    console.log("AUTH FALSE");
                                    const error="server token verify failed";
                                    dispatch(authError(error));
                                    reject(error);
                                }
                            })()
                        })



                    })
                    .catch(error => {
                        console.log(error);
                        dispatch(authError(error));
                        reject(error);
                    });
  //          })

        })
    }
}

export function signUp(email:string,pass:string,passConfirm:string) {
    return (dispatch: Dispatch) => {
        return new Promise((resolve, reject) => {
            //auth.onAuthStateChanged()
            auth.createUserWithEmailAndPassword(email, pass)
                .then(response => {
                    //console.log(response);

                    dispatch(authUser(response.user));
                    resolve(response.user);
                })
                .catch(error => {
                    console.log(error);
                    dispatch(authError(error));
                    reject(error);
                });
        })
    }
}

export function verifyAuth(idToken: Promise<string> | undefined) {
    // return function (dispatch:Dispatch) {
    //     auth.onAuthStateChanged(user => {
    //         if (user) {
    //             dispatch(authUser());
    //         } else {
    //             dispatch(signOutUser());
    //         }
    //     });
    // }

    return {
        type: AUTH_USER
    }
}

export function signOutUser() {
    return {
        type: SIGN_OUT_USER
    }
}

export function authUser(user:any) {
    return {
        type: AUTH_USER,
        payload:user
    }
}

export function authError(error:string) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function logOut(){
    return {
        type: LOG_OUT,
    }
}

export function setError(error:string){
    return {
        type: SET_ERROR,
        payload: error
    }
}
