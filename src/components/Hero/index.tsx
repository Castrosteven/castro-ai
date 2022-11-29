import React from "react";
import * as styles from "./hero.module.scss";
interface Props {
  heroHeading: string;
  heroSubTitle: string;
  heroImage: string;
}
export const Hero = ({ heroHeading, heroImage, heroSubTitle }: Props) => {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroTextBox}>
        <div className={styles.HeadingOne}>
          <p>{heroHeading}</p>
        </div>
        <div className={styles.HeadingTwo}>{heroSubTitle}</div>
      </div>
      <div
        style={{
          height: "100%",
          overflow: "auto",
        }}
      >
        <img className={styles.HeroImage} src={heroImage} alt="" />
      </div>
    </div>
  );
};
