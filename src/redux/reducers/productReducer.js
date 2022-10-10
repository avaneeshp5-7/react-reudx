import { ActionType } from "../constant/actionType";

const initialState={
    product:[],
}
const cartInitialState={
    cardItems:[]
}
export const productReducer=(state=initialState,{type,payload})=>{
switch (type) {
    case ActionType.SET_PRODUCTS:
        return {...state, product:payload};
    default:
        return state;
}
}
export const selectePproductReducer=(state={},{type,payload})=>{
    switch (type) {
        case ActionType.SELECTED_PRODUCTS:
            return {...state, ...payload};
        default:
            return state;
    }
    }
    export const cartItemReducer=(state=cartInitialState,{type,payload})=>{
        switch (type) {
            case ActionType.Add_PRODUCT_INTO_CARD:
                return {...state, cardItems:payload};
            default:
                return state;
        }
        }