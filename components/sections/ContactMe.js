import styles from "../../styles/Test.module.css";
import { useState } from "react";
import Link from "next/link";

export default function ContactMe() {
    const [btnState, setBtnState] = useState(false);

    return(
        <div className={styles.child} id="ContactMe">
        <div className={styles.formPlaceholder}>
          <div className={styles.Title + ' ' + "contactTitle"} >So, What You Think?</div>
          <div className={styles.subText + ' ' + "contactTitle"} >Get in Touch with me</div>
          <div className={styles.contactForm}>

            <form name="contact" method="POST" data-netlify="true" action="/" id="contact" className={styles.contact}>
              <input type="hidden" name="form-name" value="contact" />

              <input type="email" name="email" placeholder={"Enter your email"} required />
              <div className={styles.refreshments}>
                <div>
                  <input type="radio" id="coffee" name="refreshments" value="coffee" defaultChecked />
                  <label htmlFor="coffee"><span className={styles.coffee}></span> Coffee</label>
                </div>
                <div>
                  <input type="radio" id="tea" name="refreshments" value="tea" />
                  <label htmlFor="tea"><span className={styles.tea}></span> Tea</label>
                </div>
              </div>
              <textarea id="w3reviemessagew" name="message" rows="3" cols="50" placeholder="Message" maxLength={300} required>
              </textarea>
              <div className={styles.submitButton}>
                <button type="submit" disabled={btnState}>{btnState ? "Sending..." : (<> <span className={styles.sendIcon}></span> Send </>)}</button>
              </div>

            </form>
            <div className={styles.socialIcons}>
              <Link href={"https://instagram.com/anshil.me"} passHref={true}><span className={styles.instagram}></span></Link>
              <Link href={"https://github.com/0VERRIDER"} passHref={true}><span className={styles.github}></span></Link>
              <Link href={"mailto:admin@anshil.me"} passHref={true}><span className={styles.email}></span></Link>

            </div>
          </div>
        </div>
      </div>
    );
}