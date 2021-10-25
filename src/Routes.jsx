import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";
import Course from "./components/Course/Course";

const Routes = () => {
	return (
		<Router>
			<Navigation />
			<Route exact path="/" component={AboutMe} />
			<Route exact path="/course" component={Course} />
		</Router>
	);
};

export default Routes;
