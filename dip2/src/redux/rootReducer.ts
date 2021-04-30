import counterReducer from './reducers/counter'
import authReducer from './reducers/auth'
import locationReducer from './reducers/location'
import overlayerReducer from './reducers/overlayer'
import {combineReducers} from "redux";

export default combineReducers({
    counterReducer,
    authReducer,
    locationReducer,
    overlayerReducer
})
