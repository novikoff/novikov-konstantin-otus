import {ADD, ADD_NUMBER, ASYNC_ADD, SUB} from "./actionTypes";
import {Dispatch} from "redux";


export function add(){
    return {
        type: ADD
    }
}

export function sub(){
    return {
        type: SUB
    }
}

export function addNumber(number:number){
    return {
        type: ADD_NUMBER,
        payload:number
    }
}

export function asyncAdd(number:number){
    return (dispatch:Dispatch)=>{
        setTimeout(()=>{
            dispatch(addNumber(number))
        },3000)
    }
}
