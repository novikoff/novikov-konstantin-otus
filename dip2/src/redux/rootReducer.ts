import counterReducer from './reducers/counter'
import authReducer from './reducers/auth'
import locationReducer from './reducers/location'
import overlayerReducer from './reducers/overlayer'
import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key:'root',
    storage,
    whitelist:['counterReducer','locationReducer','overlayerReducer']
}

const rootReducer= combineReducers({
    counterReducer,
    authReducer,
    locationReducer,
    overlayerReducer
})


export default persistReducer(persistConfig,rootReducer);
