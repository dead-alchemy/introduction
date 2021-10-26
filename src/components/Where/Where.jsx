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
					<li>dnicholas.me</li>
					<li>https://github.com/dead-alchemy/</li>
				</ul>
			</div>
		</section>
	);
};

export default Where;
