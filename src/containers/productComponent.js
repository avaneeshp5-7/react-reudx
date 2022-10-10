import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.product);
    const productList=products?.map((product,index)=>{
        const {id,title,price,description,category,image}=product
        return(
            <div className='four column wide' key={index} style={{width:'25%'}}>
             <Link to={`/product/${id}`}>
             <div className='ui link cards'>
                <div className='card' style={{height:400}}>
                    <div className='image' >
                        <img src={image} alt={title} style={{height:230}} />
                    </div>
                    <div className='content'>
                        <div className='header' style={{fontSize:14}}>
                            {title}
                        </div>
                        <div className='meta price' style={{marginTop:4}}>
                          <span style={{color:'#A6C550'}}> <strong>$ {price}</strong></span>
                        </div>
                        <div className='meta'>
                           <span style={{color:'#15678F'}}>
                             {category}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
             </Link>
        </div>
        )
    })
    return (
        <React.Fragment>
            {productList}
        </React.Fragment>
    );
};

export default ProductComponent;  