import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}> 
        <h2 className={styles.title}>Education Background</h2>
        <div className={styles.content}>
            <img
                src={getImageUrl("about/aboutImage.png")}
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div  className={styles.aboutItemText}>
                        <h3>BE/B.tech(Mechanical)</h3>
                        <p>Vignan Institute of Technology and Science<br/> Completed in 2022</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Class-XII</h3>
                        <p>SR Junior College<br/> Completed in 2018</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Class X</h3>
                        <p>St'Anthony's High School <br/> Completed in 2016</p>
                    </div>
                </li>
            </ul>

        </div>
    </section>
  );
  
};
