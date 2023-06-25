import React from "react";
import styles from "./page.module.css";
import Button from "@/components/buttons/Button";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function BlogPost({ params }) {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>{data.id}</h1>
          <p className={styles.desc}>{data.body}</p>
          <Button text="See More" url="" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/illustration.jpg"
            alt="ill"
            fill={true}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
