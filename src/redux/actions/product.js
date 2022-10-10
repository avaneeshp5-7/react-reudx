import { ActionType } from "../constant/actionType"

export const setProducts=(products)=>{
    return{
        type:ActionType.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProducts=(seletedProduct)=>{
    return{
        type:ActionType.SELECTED_PRODUCTS,
        payload:seletedProduct
    }
}
export const addCart=(item)=>{
    return{
        type:ActionType.Add_PRODUCT_INTO_CARD,
        payload:item
    }
}