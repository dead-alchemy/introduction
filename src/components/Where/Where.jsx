import React from "react";
import styles from "./Where.module.css";

const Where = () => {
	return (
		<section>
			<div className={styles.header}>
				<h2>Where to Find Me?</h2>
			</div>
			<div className={styles.list}>
				<ul>
					<a href="https://dnicholas.me/">dnicholas.me</a>
					<a href="https://github.com/dead-alchemy/">
						github.com/dead-alchemy
					</a>
					<a href="https://www.linkedin.com/in/david-nicholas-820129225/">
						linkedin.com/in/david-nicholas-820129225/
					</a>
				</ul>
			</div>
		</section>
	);
};

export default Where;
