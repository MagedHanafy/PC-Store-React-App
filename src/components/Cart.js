import React, { useContext } from 'react';
// import NumericInput from 'react-numeric-input';
import { GlobalContext } from '../context/GlobalState';
import CartDisplay from './CartDisplay';

const Cart = () => {
	const { navigateTo, setCart, getTotalSum } = useContext(GlobalContext);

	return (
		<>
			<div className='cart-navigation'>
				<button onClick={() => navigateTo('products')} className='main-btn'>
					Back To Store
				</button>
				<button onClick={() => setCart([])} className='remove-btn'>
					Empty Cart
				</button>
			</div>
			<div className='cart-container'>
				<h2>Your Shopping Cart</h2>
				<div className='cart'>
					<div className='cart-header'>
						<div className='cart-product'>Product</div>
						<div>Price</div>
						<div>quantity</div>
						<div>Total</div>
						<div>Remove</div>
					</div>

					<CartDisplay />

					<div className='cart-footer'>
						<div>Total: </div>
						<div className='cart-total'>${getTotalSum()}</div>
					</div>
				</div>
				<div className='cart-checkout'>
					<button className='ckeckout-btn'>
						<span>Checkout </span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Cart;
