import {IActionIncDec,Actions} from '../action/actions';

import { LOCATION_CHANGE } from 'react-router-redux'
//import Actions from './../rootReducer';
// const cities_json: {[key: string]: any} = require('./../../data/city.list.json');
//let f=;
const initialState = {
    full_cities_list:[],
    rand_cities_list:[],
    favorite_arr:localStorage.favorite?JSON.parse(localStorage.favorite).map(el=>Number(el)):[],
    dropDownFlag:false,
}

export default function AppReducer(state = initialState, action:IActionIncDec) {
    switch(action.type){
      case Actions.LOAD_CITIES:
        return { ...state,
            full_cities_list:action.data.map(el=>{
          return {
              "id": el.id,
              "name": el.name+' '+el.country,
          } 
        })};
        case Actions.SELECT_LOAD_CITIES:
            return {
                ...state,
                rand_cities_list:state.full_cities_list.filter(el=>{
                    if(el.id % 1000 ==0){
                        return {
                            "id": el.id,
                            "name": el.name+' '+el.country,
                        }
                    }
                })
            };

        case Actions.SELECT_DROP_DOWN_SWITCH:
            if(typeof action.flag == "undefined"){
                return {
                    ...state,
                    dropDownFlag:!state.dropDownFlag,
                }
            }else{
                return {
                    ...state,
                    dropDownFlag:action.flag,
                }
            }
        case Actions.SELECT_CHANGE_VALUE:
            if(action.value.length>0){
                let count:number=0;
                let regex = new RegExp(action.value, "i")
                let filtered=state.full_cities_list.filter(el=>{
                    return el.name.search(regex) != -1 && count++ < 100;
                });

                return {
                    ...state,
                    rand_cities_list:filtered
                }
            }else{
                return{
                    ...state,
                    rand_cities_list:state.full_cities_list.filter(el=>{
                        if(el.id % 1000 ==0){
                            return {
                                "id": el.id,
                                "name": el.name+' '+el.country,
                            }
                        }
                    }),
                    full_list:action.data
                }
            }
        case Actions.SELECT_SET_ITEM:
            return {state}

        case Actions.SET_API_KEY:
            return {
                ...state,
                ApiKey:action.ApiKey
            }
        case Actions.FETCH_INFO_SUCCESS:

            return {
              ...state,
              current_city_data: action.data
            }
        case Actions.ADD_TO_FAVORITE:
            action.id=Number(action.id);
            localStorage.favorite=JSON.stringify([...state.favorite_arr,action.id]);
            return {
                ...state,
                favorite_arr:[...state.favorite_arr,action.id]
            }
        case Actions.REMOVE_FROM_FAVORITE:
            localStorage.favorite=JSON.stringify(state.favorite_arr.filter(el=>{return el!= action.id}));

            return {
                ...state,
                favorite_arr:state.favorite_arr.filter(el=>{return el!= action.id})
            }
        default:
            return {...state};
    }
    return state
  }