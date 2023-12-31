import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url} className={styles.container}>
      {text}
    </Link>
  );
};

export default Button;
