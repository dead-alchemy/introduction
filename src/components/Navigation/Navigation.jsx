import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
	const tabs = [
		{href: "/", display: "About Me"},
		{href: "/course", display: "Course"},
		{href: "/hobbies", display: "Hobbies"},
		{href: "/where", display: "Where To Find Me"},
	];
	const [nav, setNav] = useState(0);

	const onNavHandler = (i) => {
		setNav(i);
	};

	return (
		<nav className={styles.nav}>
			<ul>
				{tabs.map((t, i) => (
					<li
						className={`${styles.nav__item} ${
							nav === i && styles.active
						}`}
						key={t.href}
					>
						<NavLink
							to={`${t.href}`}
							onClick={() => {
								onNavHandler(i);
							}}
						>
							{t.display}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
