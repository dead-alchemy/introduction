import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";
import Course from "./components/Course/Course";
import Hobbies from "./components/Hobbies/Hobbies";
import Where from "./components/Where/Where";

const Routes = () => {
	return (
		<Router>
			<Navigation />
			<Route exact path="/" component={AboutMe} />
			<Route exact path="/course" component={Course} />
			<Route exact path="/hobbies" component={Hobbies} />
			<Route exact path="/where" component={Where} />
		</Router>
	);
};

export default Routes;
