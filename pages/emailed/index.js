import styles from "../../styles/Test.module.css";
import Logo from "../../components/logo";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
const words = [
  "IoT Fullstack Developer",
  "Problem Solver",
  "Programmer",
  "Fullstack Developer",
];

export default function Emailed() {
return(<div className={styles.container}>
      <div className={styles.child}>
        <div className={styles.formPlaceholder}>
          <div className={styles.contactForm}>
            <div className={styles.thankyoumessage}>
            <div className={styles.successIcon}>
            <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
    >
      <circle cx="24" cy="24" r="24" fill="#fff"></circle>
      <circle cx="24" cy="24" r="21" fill="#28C225"></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.781"
        d="M16.125 25.125l5.25 5.25 10.5-11.25"
      ></path>
    </svg>
    </div>
                <div className={styles.main}>Yeyy hii, Email has been sent!</div>
                <div className={styles.sub}>I will contact you soon!!</div>
            </div>
 
<div className={styles.socialIcons}>
<Link href={"https://instagram.com/anshil.me"} passHref={true}><span className={styles.instagram}></span></Link>
<Link href={"https://github.com/0VERRIDER"} passHref={true}><span className={styles.github}></span></Link>
<Link href={"mailto:admin@anshil.me"} passHref={true}><span className={styles.email}></span></Link>

  </div> 
</div>
        </div>
      </div>

      <div className={styles.fixedHeader}>
        <ul>
          <i className={styles.menuIcon}></i>
        </ul>
      </div>
    </div>
  );
}
