import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/buttons/Button";
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/1.jpg" fill={true} alt="About" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digitak Story Teller</h1>
          <h2 className={styles.imgDesc}>
            {" "}
            This is a sub heading which is just a little longer and smaller in
            font size
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Rhis case, the props width, height, and fill are not required
            because Next.js can automatically determine the width and height of
            your image based on the imported file. To keep your project well
            organized, you should create a subfolder named images or assets
            (just popular convention names, not mandatory) inside the public
            folder to hold the images.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Do we do?</h1>
          <p className={styles.desc}>
           This case, the props width, height, and fill are not required
            because Next.js can automatically determine the width and height of
            your image based on the imported file. To keep your project well
            organized, you should create a subfolder named images or assets
            (just popular convention names, not mandatory) inside the public
            folder to hold the images.
          </p>
          <Button url="contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
}

export default About;
