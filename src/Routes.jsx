import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import App from "./App";

const Routes = () => {
	return (
		<Router>
			{/* <Naviagation /> */}
			<Route exact path="/" component={App} />
			{/* <Route exact path="/about" component={About} />
			<Route exact path="/blog/:id" component={Entries} />
			<Route exact path="/blog/" component={Blog} /> */}
		</Router>
	);
};

export default Routes;
