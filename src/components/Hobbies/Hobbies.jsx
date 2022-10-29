import React from "react";
import styles from "./Hobbies.module.css";
import accordion from "../../assets/accordion.jpg";
import Aquarium from "../../assets/Aquarium.jpg";
import camping from "../../assets/camping.jpg";
import hawaii from "../../assets/hawaii.jpg";

const Hobbies = () => {
	return (
		<section>
			<div className={styles.header}>
				<h2>What Hobbies Do I Have?</h2>
			</div>
			<div className={styles.grid}>
				<div className={styles.grid}>
					<ul className={styles.list}>
						<li>Travelling</li>
					</ul>
				</div>
				<div>
					<img className={styles.img} src={Aquarium} alt="" />
				</div>
				<div>
					<img className={styles.img} src={hawaii} alt="" />
				</div>
				<div className={styles.grid}>
					<ul className={styles.list}>
						<li>Camping</li>
					</ul>
				</div>
				<div>
					<img className={styles.img} src={camping} alt="" />
				</div>
				<div></div>

				<div className={styles.grid}>
					<ul className={styles.list}>
						<li>Accordion</li>
					</ul>
					<div>
						<img className={styles.img} src={accordion} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hobbies;
