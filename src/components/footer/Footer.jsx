import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css'; 

const Footer = () => {
  return (
   <div className={styles.container}>
    <div>2023 @ All right Reserved</div>
    <div className={styles.icon_container}> <Image src= "/fb.svg" height={20} width={20} alt="facebook"   />
    <Image src= "/ig.svg" height={20} width={20} alt="facebook"   />
    <Image src= "/linkedin.svg" height={20} width={20} alt="facebook"   /> </div>
   </div>
  );
};

export default Footer;