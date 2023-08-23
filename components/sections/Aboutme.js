import Logo from "../logo";
import styles from "../../styles/Test.module.css";

export default function AboutMe() {
    return (
        <div className={styles.child} id="AboutMe">
            <div className={styles.logoWrap}>
                <Logo className={styles.logo} width={345}
                    height={292}></Logo>
            </div>
            <div className={styles.aboutme}>
                <div className={styles.pageTitle}>About me</div>
                <div className={styles.pageContents}>
                    I&apos;m a passionate <b>IoT Fullstack developer</b> with a unique ability to seamlessly bridge
                    the gap between hardware and software. I thrive on continuous improvement, dedicating
                    myself to refining my skills daily. My heart lies in open-source contributions,
                    and I&apos;m enthusiastic about collaborating with diverse teams to foster mutual learning.
                    Let&apos;s connect and build the future together through innovation and shared knowledge.
                </div>
            </div>
            <div className={`${styles.scrollDown}`} >
                    <div className={styles.field}>
                        <div className={styles.scroll}></div>
                    </div>
                </div>
        </div>
    );
}