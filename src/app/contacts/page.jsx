import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/buttons/Button'
function Contacts() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image src="/hero.webp" fill={true} className={styles.image}/>
         </div>
      <div className={styles.form}>
        <form >
          <input type = "text" placeholder="name" className={styles.input} />
          <input type = "email" placeholder="email" className={styles.input} />
          <textarea placeholder="Write your message here" className={styles.textarea} cols="30" row="5"/>
          <Button url="#" text="Submit" />
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contacts