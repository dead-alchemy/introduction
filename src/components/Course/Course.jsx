import React from "react";
import styles from "./Course.module.css";

const course = "Business Communications";

const Course = () => {
	return (
		<section className={styles.course}>
			<div className={styles.header}>
				<h2>What I Hope To Learn From {course}</h2>
			</div>
			<div>
				<ul className={styles.list}>
					<li>Better Communiation issues across Business Units</li>
					<li>
						Ensure that others around me understand my blockers and
						requirements
					</li>
					<li>Better craft emails and general communication</li>
				</ul>
			</div>
		</section>
	);
};

export default Course;
