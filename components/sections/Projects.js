import Link from "next/link";
import styles from "../../styles/Test.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Student Id Verification",
      subText: "FutureReadyTalent",
      href:"https://github.com/0VERRIDER/student-id-verification",
    },
    {
      title: "Portfolio",
      subText: "Personal Project",
      href:"https://github.com/0VERRIDER/Portfolio",
    },
    {
      title: "StockIT",
      subText: "MAIORA",
      href:"/classified",
    },
    {
      title: "User Profile Management",
      subText: "Personal Project",
      href:"https://github.com/0VERRIDER/User-Profile-Management",
    },
    {
      title: "API Manager",
      subText: "Personal Project",
      href:"https://github.com/0VERRIDER/API-Manager",
    },
    {
      title: "Student Dashboard",
      subText: "Karunya",
      href:"/classified",
    },
  ]
    return(

      <div className={styles.child} id="Projects">
      <div className={styles.gridPlaceholder}>
        <div className={styles.Title}>Projects</div>
        <div className={styles.subText}>Lets take a peek to my recents</div>
        <div className={styles.projectGrid}>
          {
            projects.map(
              (project, i) => {
                return(
                <div className={styles.card} key={i}>
                  <div className={styles.icon}>
                    <ul>
                      <i className={styles.githubBranch}></i>
                    </ul>
                  </div>
                    <div className={styles.Title}>{project.title}</div>
                    <div className={styles.subText}>{project.subText}</div>
                  <div className={styles.learnMoreButton}>
                    <Link href={project.href}>Learn More</Link>
                  </div>
                </div>);
              }
            )
          }
        </div>
      </div>
      <div className={`${styles.scrollDown}`}>
        <div className={styles.field}>
          <div className={styles.scroll}></div>
      </div>
      </div>
    </div>
    );
}