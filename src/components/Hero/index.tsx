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
        <div className={styles.HeadingOne}>{heroHeading}</div>
        <div className={styles.HeadingTwo}>
          {heroSubTitle} {heroSubTitle2}
        </div>
        <div>
          <Button>
            <span
              style={{
                fontSize: "20px",
              }}
            >
              Free Consultation
            </span>
          </Button>
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
