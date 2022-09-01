import CartActoinTypes from "./cart.types";

export const toggleCartHidden = () => ({
	type: CartActoinTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: CartActoinTypes.ADD_ITEM,
	payload: item,
});
