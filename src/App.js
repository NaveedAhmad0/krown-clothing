import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/sing-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import Count from "./components/count";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route exact path="/shop" element={<ShopPage />} />
					<Route exact path="/signin" element={<SignInAndSignUpPage />} />
					<Route exact path="/count" element={<Count />} />
				</Routes>
			</div>
		);
	}
}

export default App;
