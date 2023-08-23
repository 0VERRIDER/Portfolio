import { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/Test.module.css';

export default function NavBar() {
    const [navState, setNavState] = useState(false);

    const routes = [
        {
            name: "Home",
            href: "#Home",
        },
        {
            name: "About Me",
            href: "#AboutMe",
        },
        {
            name: "Skills",
            href: "#Skills",
        },
        {
            name: "Projects",
            href: "#Projects",
        },
        {
            name: "Contact Me",
            href: "#ContactMe",
        }
    ];

    const navSwitch = () => {
        if (!navState) {
            document.querySelector(`.${styles.sideNav}`).style.display = "flex";
            setNavState(true);
            return false;
        } else {
            document.querySelector(`.${styles.sideNav}`).style.display = "none";
            setNavState(false);
            return true;
        }
    };

    const router = useRouter();
    const [dwnldState, setDwnldState] = useState(false);

    const resumeDownload = () => {
        setDwnldState(true);
        const timer = setTimeout(() => {
            setDwnldState(false);
        }, 8000);
    }

    return (
        <>
            <div className={styles.fixedHeader}>
                <ul>
                    <i className={`${styles.menuIcon} ${navState ? styles.openedMenu : ""}`} onClick={navSwitch}></i>
                </ul>
            </div>
            <div className={styles.sideNav}>
                <ul className={styles.items}>
                    {routes.map(
                        (route, i) =>
                            <Link key={i} passHref={true} href={`${route.href}`} ><a onClick={navSwitch}><li className={router.asPath == `/${route.href}` ? styles.noselect + ' ' + styles.active : styles.noselect} >{route.name}</li></a></Link>
                    )}
                    <li ><Link href={"https://www.dropbox.com/s/lyzfotvwpcyyhre/ANSHIL_P_URK19EC2010_RESUME.pdf?dl=1"} passHref={true}><a onClick={resumeDownload}><button className={styles.resumeButton}>{dwnldState ? "Downloading..." : "Resume"}</button></a></Link></li>
                    <li><div className={styles.socialIcons}>
                        <Link href={"https://instagram.com/anshil.me"} passHref={true}><span className={styles.instagram}></span></Link>
                        <Link href={"https://github.com/0VERRIDER"} passHref={true}><span className={styles.github}></span></Link>
                        <Link href={"mailto:admin@anshil.me"} passHref={true}><span className={styles.email}></span></Link>

                    </div> </li>
                </ul>

            </div>
        </>
    );
}