import React from "react";
import styles from "./AboutMe.module.css";
import picture from "../../assets/IMG_1633.jpg";

const AboutMe = () => {
	return (
		<section className={styles.aboutme}>
			<div className={styles["aboutme-grid"]}>
				<div className={styles["aboutme-picture"]}>
					<img src={picture} alt="David Nicholas" />
				</div>
				<div className={styles["aboutme-text"]}>
					<h2>About Me!</h2>
					<ul className={styles["aboutme-text__list"]}>
						<li>David Nicholas</li>
						<li>Salt Lake City, Utah</li>
						<li>Software Developer</li>
						<li>Engaged</li>
						<li>2 dogs and 2 cats</li>
						<li>Love Star Wars</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
