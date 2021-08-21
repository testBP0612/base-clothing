export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		)
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemtoRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemtoRemove.id
	)


	// 如果購物車數量剩下 1 個商品，過濾掉 state 內的該商品
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== cartItemtoRemove.id)
	}

	return cartItems.map(cartItem =>
		cartItem.id === cartItemtoRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	)
};