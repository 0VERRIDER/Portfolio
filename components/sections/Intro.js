import { useEffect, useState } from "react";
import styles from "../../styles/Test.module.css";

const words = [
    "IoT Fullstack Developer",
    "Problem Solver",
    "Programmer",
    "Fullstack Developer",
];

export default function Intro() {
  const [show, setShow] = useState(false);
  const [skillSlide, setSkill] = useState(0);
  const [complieStat, setCompileStat] = useState(false);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) {
      return;
    }

    if (subIndex === words[index].length) {
      setCompileStat(false);
    }
    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      setSkill(index + 1);
      setCompileStat(true);

      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);

      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 100 : 70, parseInt(Math.random() * 250)));

    if (index == words.length - 1) {
      const timeout2 = setTimeout(() => {
        setSkill(index + 1);
        setShow(true);
        setCompileStat(true);
        clearTimeout(timeout2);
      }, 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [index, subIndex, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return(
    <div className={styles.child} id="Home">
        <div className={styles.title}>
          <span className={styles.main}>
            <span className={styles.greetings}>Hi.</span>
            <span className={styles.name}>IM ANSHIL</span>
          </span>
          {/* <span className={styles.titleDescription}>
        Better
      </span> */}
          <span className={styles.description}>
            <ul>
              <li className={`${skillSlide == 4 ? styles.slideUp : ""}`}>
                Fullstack Developer
              </li>
              <li className={`${skillSlide == 1 ? styles.slideUp : ""}`}>
                IoT Fullstack Developer
              </li>
              <li className={`${skillSlide == 3 ? styles.slideUp : ""}`}>
                Programmer
              </li>
              <li className={`${skillSlide == 2 ? styles.slideUp : ""}`}>
                Problem solver
              </li>
            </ul>
          </span>
        </div>
        <div className={styles.frontAvatar}>
          <div className={styles.rect}>
            <div className={`${styles.Title}`}>index.js</div>
            <div
              className={`${styles.fileStat} ${complieStat ? styles.fileSaved : ""
                }`}
            ></div>
            <pre className="language-html">
              <code className="token">
                &lt;<span className="tag">div</span>{" "}
                <span className="keyword">className</span>=&quot;
                <span className="arg">welcomeBlock</span>&quot;&gt; &lt;
                <span className="tag">span</span>{" "}
                <span className="keyword">className</span>=&quot;
                <span className="arg">greetings</span>&quot;&gt;Hi.&lt;/
                <span className="tag">span</span>&gt; &lt;
                <span className="tag">span</span>{" "}
                <span className="keyword">className</span>=&quot;
                <span className="arg">nametag</span>&quot;&gt;IM ANSHIL&lt;/
                <span className="tag">span</span>&gt; &lt;/
                <span className="tag">span</span>&gt; &lt;
                <span className="tag">span</span>{" "}
                <span className="keyword">className</span>=&quot;
                <span className="arg">description</span>&quot;&gt;{" "}
                {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
                &lt;/<span className="tag">span</span>&gt; &lt;/
                <span className="tag">div</span>&gt;
              </code>
            </pre>
          </div>
        </div>
        <div
          className={`${styles.scrollDown} ${show ? styles.showField : styles.hideField
            }`}
        >
          <div className={styles.field}>
            <div className={styles.scroll}></div>

            {/* <div className={styles.scroll}></div> */}
          </div>
        </div>
      </div>
  );

}