import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";
import Course from "./components/Course/Course";
import Hobbies from "./components/Hobbies/Hobbies";

const Routes = () => {
	return (
		<Router>
			<Navigation />
			<Route exact path="/" component={AboutMe} />
			<Route exact path="/course" component={Course} />
			<Route exact path="/hobbies" component={Hobbies} />
		</Router>
	);
};

export default Routes;
