import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, addCart } from '../redux/actions/product';
import '../regular.css';


const ProductDetails = () => {
	const { productId } = useParams();
	const product = useSelector((state) => state);
	const dispatch = useDispatch();
	const { id, title, price, description, category, image, rating } = product.product;
	const fetchSigleProducts = async () => {
		const products = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
			if (err) {
				console.log(err);
			}
		});
		dispatch(selectedProducts(products?.data))
	}
	useEffect(() => {
		if (productId && productId != "") fetchSigleProducts();

	}, [productId != ""]);
	const addCartItem = (cardItems) => {
		if (product.cartItem?.cardItems?.length > 0) {
			let filter = product.cartItem?.cardItems.filter(fl => fl.id == cardItems.id);
			if (filter.length == 0) {
				let prevCart = []
				prevCart = product.cartItem?.cardItems
				prevCart.push(cardItems)
				dispatch(addCart(prevCart));
			}
		} else {
			let prevCart = []
			prevCart = product.cartItem?.cardItems
			prevCart.push(cardItems)
			dispatch(addCart(prevCart));
		}


	}
	return (
		<div>
			<div className="container">
				<div className="card">
					<div className="container-fliud">
						<div className="wrapper row">
							<div className="preview col-md-6" >
								<div className="preview-pic tab-content" >
									<div className="tab-pane active" id="pic-1" >
										<img src={image} className="product_image" style={{ height: 400, width: 400 }} />
									</div>
								</div>
							</div>
							<div className="details col-md-6">
								<h3 className="product-title">{title}</h3>
								<div className="rating">
									<div className="stars">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
									<span className="review-no">{rating?.count} reviews</span>
								</div>
								<p className="product-description">{description?.substring(0, 200)}</p>
								<h4 className="price">current price: <span>$ {price}</span></h4>
								<p className="vote"><strong>Rating:</strong> {rating?.rate} <strong>(87 votes)</strong></p>
								<h5 className="sizes">sizes:
									<span className="size" data-toggle="tooltip" title="small">s</span>
									<span className="size" data-toggle="tooltip" title="medium">m</span>
									<span className="size" data-toggle="tooltip" title="large">l</span>
									<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
								</h5>
								<div className="action">
									<button className="add-to-cart btn btn-default" onClick={(e) => addCartItem(product.product)} type="button">add to cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;