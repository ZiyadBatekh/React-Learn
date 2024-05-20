import { ReactNode } from "react";
import styles from "./Styles/Button.module.css";

const button = () => {
  return (
    <button className={[styles.button , styles.buttonPrimary].join(' ')} >
      My Button
    </button>
  );
};

export default button;
