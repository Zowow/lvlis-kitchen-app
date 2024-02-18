import React, { useReducer, useEffect } from 'react'
import { getAll } from '../../services/productService';
import Products from '../../components/Products/Products';

const initialState = { products: [] }

const reducer = (state , action) => {
    switch(action.type){
        case "PRODUCTS_LOADED":
            return {...state, products: action.payload};
        default: 
            return state;
    }
}

export default function HomeProducts() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {products} = state

    useEffect(()=> {
        getAll().then(products => dispatch({type: "PRODUCTS_LOADED", payload: products}))
    }, [])
    
    return (
        <>
            <Products products = {products}/>
        </>
    )
    }
