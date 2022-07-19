import { Routes, Route } from "react-router-dom";
import "./App.css";
import Count from "./components/count";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/shop" element={<ShopPage />} />
				<Route exact path="/count" element={<Count />} />
			</Routes>
		</div>
	);
}

export default App;
