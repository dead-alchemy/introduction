import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";

const Routes = () => {
	return (
		<Router>
			<Navigation />
			<Route exact path="/" component={AboutMe} />
			{/* <Route exact path="/about" component={About} />
			<Route exact path="/blog/:id" component={Entries} />
			<Route exact path="/blog/" component={Blog} /> */}
		</Router>
	);
};

export default Routes;
