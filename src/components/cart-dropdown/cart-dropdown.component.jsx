/* eslint-disable eqeqeq */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, dispatch }) => {
	const navigate = useNavigate();

	return (
		<div className="cart-dropdown">
			{cartItems.length ? (
				<div className="cart-items">
					{cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))}
				</div>
			) : (
				<span className="empty-message">Your cart is empty :(</span>
			)}
			<CustomButton
				onClick={() => {
					navigate("/checkout");
					dispatch(toggleCartHidden());
				}}>
				Go to Checkout
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
