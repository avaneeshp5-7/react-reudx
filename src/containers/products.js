import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductComponent from './productComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/product';

const Products = () => {
    const dispatch=useDispatch();
    const fetchProducts=async()=>{
        const products=await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            if(err){
                console.log(err);
            }
        });
        dispatch(setProducts(products?.data));
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    return (
        <div className='ui grid container' style={{marginTop:50}}> 
            <ProductComponent/>
        </div>
    );
};

export default Products;