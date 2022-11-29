import { url } from "inspector";
import React from "react";
import { Button } from "../Button";
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
        <div>
          <Button>Get in touch</Button>
        </div>
      </div>
      <div
        className={styles.HeroImage}
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
    </div>
  );
};
