import { Route,Routes } from "react-router-dom";

import Header from "./components/Header";
import CartPage from "./components/CartPage";
import Verification from "./components/Verification";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<CartPage/>} />
				<Route element={<Verification/>} path="/verification" />
			</Routes>
		</>
	);
}

export default App;
