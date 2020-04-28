import {combineReducers} from 'redux';
import AppReducer from './AppReducer';
import { connectRouter } from 'connected-react-router'
import SelectCityReducer from './SelectCityReducer';
//import reducer2 from './reducers/reducer2';


const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    AppReducer,
})
export default rootReducer