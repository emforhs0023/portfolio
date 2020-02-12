import React from 'react';
import Router from "./Router";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div>
				<GlobalStyles />
				<Router />
			</div>
			<div>
				<Footer />
			</div>
		</div>

		
	);	
}

export default App;
