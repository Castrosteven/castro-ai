import React from "react";
import * as styles from "./button.module.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button = ({ ...rest }: Props) => {
  return <button className={styles.button} {...rest}></button>;
};
