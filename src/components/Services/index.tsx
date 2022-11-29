import * as styles from "./services.module.scss";
import React from "react";
export const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.container}>
        <div className={styles.title}>Who Are We</div>
        <div className={styles.text}>
          Castro Ai LLC was founded in 2021 in the state of New York. We are a
          team of certified engenieers & designers with years of experience all
          working towards the same goal. <br /> To deliver you and your business
          with the highest quality product. We’ve already helped out many new
          business in making their dreams come true. Now it’s your turn.
        </div>
      </div>
    </div>
  );
};
