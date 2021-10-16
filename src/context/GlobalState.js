import React, { createContext, useState } from 'react';
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const [page, setPage] = useState('products');
	const [category, setCategory] = useState('all');
	const [cart, setCart] = useState([]);

	const navigateTo = (nextPage) => {
		setPage(nextPage);
		setCategory('all');
	};

	const addToCart = (product, index) => {
		let newCart = [...cart];
		let itemInCart = newCart.find((item) => item.name === product.name);

		if (itemInCart) {
			itemInCart.quantity = 1;
		} else {
			itemInCart = {
				...product,
				quantity: 1,
			};
			newCart.push(itemInCart);
		}
		setCart(newCart);
	};

	const removeFromCart = (productToRemove, index) => {
		let newCart = [...cart];
		let newCartArray = newCart.filter(
			(product) => product.name !== productToRemove.name
		);
		setCart(newCartArray);
	};

	const setQuantity = (product, amount) => {
		let newCart = [...cart];
		newCart.find((item) => item.name === product.name).quantity = amount;
		setCart(newCart);
	};

	const getTotalSum = () => {
		return cart
			.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0)
			.toFixed(2);
	};

	return (
		<GlobalContext.Provider
			value={{
				page,
				navigateTo,
				category,
				setCategory,
				cart,
				setCart,
				addToCart,
				removeFromCart,
				setQuantity,
				getTotalSum,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
