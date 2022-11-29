import React from "react";
import * as styles from "./textinput.module.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export const TextInput = ({ ...rest }: Props) => {
  return <input className={styles.input} {...rest} />;
};
