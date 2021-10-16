import React, { useContext } from 'react';
import ProductsDisplay from './ProductsDisplay';
import Cart from './Cart';
import { GlobalContext } from '../context/GlobalState';

const Store = () => {
	const { page } = useContext(GlobalContext);

	return (
		<div>
			<h1>PC Store</h1>
			{page === 'products' && <ProductsDisplay />}
			{page === 'cart' && <Cart />}
		</div>
	);
};

export default Store;
