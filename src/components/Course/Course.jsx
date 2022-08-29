import React from "react";
import styles from "./Course.module.css";

const course = "Computer Architecture";

const Course = () => {
	return (
		<section className={styles.course}>
			<div className={styles.header}>
				<h2>What I Hope To Learn From {course}</h2>
			</div>
			<div>
				<ul className={styles.list}>
					<li>What goes on in the black box.</li>
					<li>Better understand the tool I use every single day.</li>
				</ul>
			</div>
		</section>
	);
};

export default Course;
