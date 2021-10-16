import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ProductCard = ({ getProductsInCategory }) => {
	const { addToCart } = useContext(GlobalContext);

	return (
		<div className='products'>
			{getProductsInCategory.map((product, index) => (
				<div key={index} className='product'>
					<h2>{product.name}</h2>
					<img alt={product.name} src={product.image} />
					<div className='product-footer'>
						<div className='price'>${product.cost}</div>
						<button
							onClick={() => addToCart(product, index)}
							className='main-btn'
						>
							Add To Cart
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
