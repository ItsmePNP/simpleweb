import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.webp";
import Button from "@/components/buttons/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>You Made It, WELCOME</h1>
        <p className={styles.description}>  This is a sub heading , this should be somewhat longer than the actual heading</p>
        <Button url="" text="See our Works"/>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="hero image" className={styles.img}/>
      </div>
    </div>
  );
}
