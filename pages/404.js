import styles from "../styles/Test.module.css";
import Link from "next/link";
import PageNotFoundAvatar from "../components/404";

export default function Emailed() {
return(<div className={styles.container}>
      <div className={styles.child}>
        <div className={styles.formPlaceholder}>
          <div className={styles.contactForm}>
            <div className={styles.thankyoumessage}>
            <div className={styles.successIcon}>
                { /* TODO : 404 Image Graphics */}
            <PageNotFoundAvatar/>
    </div>
                <div className={styles.main} style={{marginTop:20}}>Oops. Page Not Found.</div>
                <div className={styles.sub}>Let&apos;s Go back Home&nbsp;(-:</div>
            </div>
 
<div className={styles.socialIcons} style={{marginTop:-20}}>
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
