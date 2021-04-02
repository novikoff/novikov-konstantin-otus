import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import "./index.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, MiddlewareAPI, Dispatch, Action, compose} from 'redux';
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";
import reduxThunk  from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>
//
// <!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
//
// <script>
// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCVVNlE6Xkmb5pRjVFrIuZWy2MT14prgdM",
//     authDomain: "auth-eef56.firebaseapp.com",
//     projectId: "auth-eef56",
//     storageBucket: "auth-eef56.appspot.com",
//     messagingSenderId: "514131476845",
//     appId: "1:514131476845:web:a00745762f97664356da64"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// </script>


const loggerMiddleware = (store:MiddlewareAPI)=>(next:Dispatch)=><A extends Action>(action: A)=>{
    const result=next(action);
    console.log('Middleware',store.getState());
    return result;
}

const middleware = [
    loggerMiddleware,
    reduxThunk
]

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);


const store = createStore(rootReducer, enhancer);

//const store = createStore(rootReducer,applyMiddleware(loggerMiddleware,reduxThunk));
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
