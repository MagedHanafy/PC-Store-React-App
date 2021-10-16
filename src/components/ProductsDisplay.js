import React, { useContext } from 'react';
import { products } from './products';
import ProductCard from './ProductCard';
import { GlobalContext } from '../context/GlobalState';

const ProductsDisplay = () => {
	const { navigateTo, category, setCategory, cart } = useContext(GlobalContext);

	const getProductsInCategory = () => {
		if (category === 'all') {
			return products;
		} else {
			return products.filter((product) => product.category === category);
		}
	};

	return (
		<>
			<div className='navigate'>
				<select
					className='select'
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value={'all'}>{'All'}</option>
					<option value={'HDD'}>{'Hard Drives'}</option>
					<option value={'CPU'}>{'Processors'}</option>
					<option value={'Motherboard'}>{'Motherboards'}</option>
				</select>
				<button onClick={() => navigateTo('cart')} className='main-btn'>
					Go To Cart ({cart.length})
				</button>
			</div>

			<ProductCard getProductsInCategory={getProductsInCategory()} />
		</>
	);
};

export default ProductsDisplay;
