import Image from "next/image";
import styles from "../../styles/Test.module.css";

export default function Skills() {
    const skills = [
        {
            name: "AWS",
            href: "/images/skills/aws.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Firebase",
            href: "/images/skills/firebase.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Docker",
            href: "/images/skills/docker.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Figma",
            href: "/images/skills/figma.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "JavaScript",
            href: "/images/skills/js.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "MongoDB",
            href: "/images/skills/mongo.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "PHP",
            href: "/images/skills/php.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Python",
            href: "/images/skills/python.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "React",
            href: "/images/skills/react.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Sass",
            href: "/images/skills/sass.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "C++",
            href: "/images/skills/cpp.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Android Studio",
            href: "/images/skills/androidStudio.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Flutter",
            href: "/images/skills/flutter.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Azure",
            href: "/images/skills/azure.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "NextJS",
            href: "/images/skills/nextjs.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "CSS3",
            href: "/images/skills/css3.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Java",
            href: "/images/skills/java.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "GitHub",
            href: "/images/skills/github.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "MySQL",
            href: "/images/skills/mysql.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Angular",
            href: "/images/skills/angular.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Bootstrap",
            href: "/images/skills/bootstrap.svg",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Tailwind",
            href: "/images/skills/tailwind.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "DigitalOcean",
            href: "/images/skills/digitalocean.png",
            size: {
                width: 50,
                height: 50
            },
        },
        {
            name: "Swift",
            href: "/images/skills/swift.svg",
            size: {
                width: 50,
                height: 50
            },
        },
    ];
    return (
        <div className={styles.child} id="Skills">
            <div className={styles.horizontalPlaceholder}>
                <div className={styles.Title}>Skills</div>
                <div className={styles.skillGrid}>
                    {skills.map(
                        (skill, i) =>
                            <div key={i} className={styles.skillBox}>
                                <div className={styles.skillImage}>
                                    <Image
                                        src={skill.href}
                                        width={skill.size.width || 50}
                                        height={skill.size.height || 50}
                                        alt={skill.name}></Image>
                                </div>
                            </div>
                    )}

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