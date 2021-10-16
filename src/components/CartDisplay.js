import React, { useContext } from 'react';
import NumericInput from 'react-numeric-input';
import { GlobalContext } from '../context/GlobalState';

const CartDisplay = () => {
	const { cart, removeFromCart, setQuantity } = useContext(GlobalContext);

	const getProductTotal = (product) => {
		return (product.cost * product.quantity).toFixed(2);
	};

	return (
		<>
			{cart.map((product, index) => (
				<div key={index} className='cart-product-display'>
					<img alt={product.name} src={product.image} />
					<div className='cart-product-name'>{product.name}</div>
					<div className='cart-product-cost'>${product.cost}</div>
					<div className='cart-product-quantity'>
						<NumericInput
							mobile
							className='form-control'
							name='product.quantity'
							value={product.quantity}
							onChange={(e) => setQuantity(product, e)}
							min={1}
							max={99}
							step={1}
							precision={0}
							size={1}
							strict
							style={{
								'input:focus': {
									border: '1px inset #ec6d59',
									outline: 'none',
								},
							}}
						/>
					</div>
					<div className='cart-product-total'>{getProductTotal(product)}</div>
					<div className='cart-product-remove'>
						<button
							onClick={() => removeFromCart(product, index)}
							className='remove-btn'
						>
							Remove
						</button>
					</div>
				</div>
			))}
		</>
	);
};

export default CartDisplay;
