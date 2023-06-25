import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import ColorMode from "../colorModeToggle/colorMode";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blogs",
    url: "/blogs",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contacts",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        thePNP
      </Link>
      <div className={styles.links}>
        <ColorMode />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {" "}
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}> Logout</button>{" "}
      </div>
    </div>
  );
};

export default NavBar;
