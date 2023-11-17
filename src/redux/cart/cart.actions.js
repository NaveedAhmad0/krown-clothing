import CartActoinTypes from "./cart.types";

export const toggleCartHidden = () => ({
	type: CartActoinTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: CartActoinTypes.ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: CartActoinTypes.REMOVE_ITEM,
	payload: item,
});

export const clearItemFromCart = (item) => ({
	type: CartActoinTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});
