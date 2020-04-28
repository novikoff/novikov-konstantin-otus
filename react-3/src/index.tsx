// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import { Router } from 'react-router-dom'
import {Route} from 'react-router-dom';
//import {push} from 'react-router-redux'
//import {syncHistoryWithStore} from 'react-router-redux'
import reduxThunk from 'redux-thunk';
import rootReducer  from './redux/reducer/rootReducer'
import { createBrowserHistory } from 'history'

import { ConnectedRouter } from 'connected-react-router'
const API_KEY='00bf4d2bcdc5f0624852829c5b77d358';


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    }
}

/*const history = createBrowserHistory();
const location = history.location;
const unlisten = history.listen((location,action)=>{
    console.log(action,location.pathname,location.state);
})*/


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }) : compose;


const loggerMiddleware=store=>next=>action=>{
    const result = next(action);
           // console.log('Middleware',store.getState());
           //  console.log(result);
            return result;
}


export const history = createBrowserHistory();

const store = createStore(rootReducer(history),composeEnhancers(applyMiddleware(
                                                    loggerMiddleware,
                                                    reduxThunk
                                                    )));

const app = (
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <App API_KEY={API_KEY}  />
      </ConnectedRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

