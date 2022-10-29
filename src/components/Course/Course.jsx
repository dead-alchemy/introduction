import React from "react";
import styles from "./Course.module.css";

const course = "Java Programming II";

const Course = () => {
	return (
		<section className={styles.course}>
			<div className={styles.header}>
				<h2>What I Hope To Learn From {course}</h2>
			</div>
			<div>
				<ul className={styles.list}>
					<li>
						Better indepth understanding of Java and it's tools.
					</li>
					<li>
						More about Java's built in and avaliable utils and
						methods.
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Course;
