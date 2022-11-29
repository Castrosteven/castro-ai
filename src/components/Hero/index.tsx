import React from "react";
import * as styles from "./hero.module.scss";
interface Props {
  heroHeading: string;
  heroSubTitle: string;
  heroImage: string;
  heroSubTitle2: string;
}
export const Hero = ({
  heroHeading,
  heroImage,
  heroSubTitle,
  heroSubTitle2,
}: Props) => {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroTextBox}>
        <p className={styles.HeadingOne}>{heroHeading}</p>
        <p className={styles.HeadingTwo}>
          {heroSubTitle} <br /> {heroSubTitle2}
        </p>
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
