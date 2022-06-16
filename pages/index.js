import styles from "../styles/Test.module.css";
import Logo from "../components/logo";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import {useRouter} from "next/router";
const words = [
  "IoT Fullstack Developer",
  "Problem Solver",
  "Programmer",
  "Fullstack Developer",
];

export default function Home() {
  const router = useRouter();
  const [btnState, setBtnState] = useState(false);
  const [navState, setNavState] = useState(false);
  const navSwitch = ()=>{
    if(!navState){
      document.querySelector(`.${styles.sideNav}`).style.display="flex";
      setNavState(true);
      return false;
    }
    else{
      document.querySelector(`.${styles.sideNav}`).style.display="none";
      setNavState(false);
      return true;
    }
  };
  ////////////////////////////////////////
  const [show, setShow] = useState(false);
  const [skillSlide, setSkill] = useState(0);
  const [complieStat, setCompileStat] = useState(false);
  /////////////////////////////////////////

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

  ////////////////////////////////////////

  // useEffect(() => {
  //   let i = 1;
  //   const interval = setInterval(()=>{
  //     console.log(i);
  //     //i==3?i=1:i=i;
  //     if(i<=3){
  //       setSkill(i++);
  //     }
  //     else{
  //       clearInterval(interval);
  //     }
  //   },6000);
  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, []);

  return (
    <div className={styles.container}>
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
              className={`${styles.fileStat} ${
                complieStat ? styles.fileSaved : ""
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
          className={`${styles.scrollDown} ${
            show ? styles.showField : styles.hideField
          }`}
        >
          <div className={styles.field}>
            <div className={styles.scroll}></div>

            {/* <div className={styles.scroll}></div> */}
          </div>
        </div>
      </div>
      <div className={styles.child} id="AboutMe">
        <div className={styles.logoWrap}>
          <Logo className={styles.logo} width={345}
    height={292}></Logo>
        </div>
        <div className={styles.aboutme}>
          <div className={styles.pageTitle}>About me</div>
          <div className={styles.pageContents}>
            I&apos;m an <b>IoT Fullstack developer</b> who can handle both hardware
            and software together. Im polishing my skills almost everyday and
            eager to learn something new everyday.<br></br>
            Open source contribution was my favorite and looking forward to a
            team to collaborate and learn more. <br/><br/>

            Scroll down to know more about me.
          </div>
          <div
            className={`${styles.scrollDown} ${
              show ? styles.showField : styles.hideField
            }`}
          >
            <div className={styles.field}>
              <div className={styles.scroll}></div>

              {/* <div className={styles.scroll}></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.child} id="Skills">
        <div className={styles.horizontalPlaceholder}>
          <div className={styles.Title}>Skills</div>
          <div className={styles.skillGrid}>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/aws.svg"
                  width={50}
                  height={50}
                  alt="aws"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/firebase.svg"
                  width={50}
                  height={50}
                  alt="firebase"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/docker.svg"
                  width={50}
                  height={50}
                  alt="docker"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/figma.svg"
                  width={50}
                  height={50}
                  alt="figma"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/js.svg"
                  width={50}
                  height={50}
                  alt="js"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/mongo.svg"
                  width={50}
                  height={50}
                  alt="mongodb"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/php.svg"
                  width={50}
                  height={50}
                  alt="php"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/python.svg"
                  width={50}
                  height={50}
                  alt="python"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/react.svg"
                  width={50}
                  height={50}
                  alt="react"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/sass.svg"
                  width={50}
                  height={50}
                  alt="sass"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/cpp.png"
                  width={50}
                  height={50}
                  alt="cpp"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/androidStudio.png"
                  width={50}
                  height={50}
                  alt="androidStudio"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/flutter.png"
                  width={50}
                  height={50}
                  alt="flutter"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/kotlin.png"
                  width={50}
                  height={50}
                  alt="kotlin"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/azure.png"
                  width={50}
                  height={50}
                  alt="azure"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/nextjs.svg"
                  width={50}
                  height={50}
                  alt="nextjs"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/gcp.png"
                  width={40}
                  height={30}
                  alt="gcp"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/css3.png"
                  width={50}
                  height={50}
                  alt="css3"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/java.png"
                  width={50}
                  height={50}
                  alt="java"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/github.png"
                  width={50}
                  height={50}
                  alt="github"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/mysql.png"
                  width={50}
                  height={50}
                  alt="mysql"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/angular.png"
                  width={50}
                  height={50}
                  alt="angular"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/bootstrap.svg"
                  width={50}
                  height={50}
                  alt="bootstrap"
                ></Image>
              </div>
            </div>
            <div className={styles.skillBox}>
              <div className={styles.skillImage}>
                <Image
                  src="/images/skills/tailwind.png"
                  width={50}
                  height={50}
                  alt="tailwind"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div
            className={`${styles.scrollDown} ${
              show ? styles.showField : styles.hideField
            }`}
          >
            <div className={styles.field}>
              <div className={styles.scroll}></div>

              {/* <div className={styles.scroll}></div> */}
            </div>
          </div>
      </div>

      <div className={styles.child} id="Projects">
        <div className={styles.gridPlaceholder}>
          <div className={styles.Title}>Projects</div>
          <div className={styles.subText}>Lets take a peek to my recents</div>
          <div className={styles.projectGrid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <ul>
                  <i className={styles.githubBranch}></i>
                </ul>
              </div>
              <div className={styles.Title}>Student Id Verification</div>
              <div className={styles.subText}>FutureReadyTalent</div>
              <div className={styles.learnMoreButton}>
                <Link href="/">Learn More</Link>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <ul>
                  <i className={styles.githubBranch}></i>
                </ul>
              </div>
              <div className={styles.Title}>Portfolio</div>
              <div className={styles.subText}>Personal Project</div>
              <div className={styles.learnMoreButton}>
                <Link href="/">Learn More</Link>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <ul>
                  <i className={styles.githubBranch}></i>
                </ul>
              </div>
              <div className={styles.Title}>StockIT</div>
              <div className={styles.subText}>MAIORA</div>
              <div className={styles.learnMoreButton}>
                <Link href="/">Learn More</Link>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <ul>
                  <i className={styles.githubBranch}></i>
                </ul>
              </div>
              <div className={styles.Title}>User Profile Management</div>
              <div className={styles.subText}>Personal Project</div>
              <div className={styles.learnMoreButton}>
                <Link href="/">Learn More</Link>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <ul>
                  <i className={styles.githubBranch}></i>
                </ul>
              </div>
              <div className={styles.Title}>API Manger API</div>

              <div className={styles.subText}>Personal Project</div>
              <div className={styles.learnMoreButton}>
                <Link href="/">Learn More</Link>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <ul>
                  <i className={styles.githubBranch}></i>
                </ul>
              </div>
              <div className={styles.Title}>Student Dashboard</div>
              <div className={styles.subText}>Karunya</div>
              <div className={styles.learnMoreButton}>
                <Link href="/">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
        <div
            className={`${styles.scrollDown} ${
              show ? styles.showField : styles.hideField
            }`}
          >
            <div className={styles.field}>
              <div className={styles.scroll}></div>

              {/* <div className={styles.scroll}></div> */}
            </div>
          </div>
      </div>
      <div className={styles.child} id="ContactMe">
        <div className={styles.formPlaceholder}>
          <div className={styles.Title + ' ' + "contactTitle"} >So, What You Think?</div>
          <div className={styles.subText + ' ' + "contactTitle"} >Get in Touch with me</div>
          <div className={styles.contactForm}>
           
          <form  name="contact" method="POST" data-netlify="true" action="/emailed" id="contact" className={styles.contact}>
          <input type="hidden" name="form-name" value="contact" />
         
  <input type="email" name="email" placeholder={"Enter your email"} required/>
  <div className={styles.refreshments}>
    <div>
    <input type="radio" id="coffee" name="refreshments" value="coffee" defaultChecked/>
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
<button type="submit" disabled={btnState}>{btnState?"Sending...":  ( <> <span className={styles.sendIcon}></span> Send </>  )}</button>
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
<div className={styles.sideNav}>
<ul className={styles.items}>
  <Link passHref={true} href="#Home" ><a onClick={()=>{navSwitch()}}><li className={router.asPath == '/#Home'?styles.noselect+ ' ' + styles.active:styles.noselect} >Home</li></a></Link>
  <Link passHref={true} href="#AboutMe" ><a onClick={()=>{navSwitch()}}><li className={router.asPath == '/#AboutMe'?styles.noselect+ ' ' + styles.active:styles.noselect}>About me</li></a></Link>
  <Link passHref={true} href="#Skills" ><a onClick={()=>{navSwitch()}}><li className={router.asPath == '/#Skills'?styles.noselect+ ' ' + styles.active:styles.noselect}>Skills</li></a></Link>
  <Link passHref={true} href="#Projects" ><a onClick={()=>{navSwitch()}}><li className={router.asPath == '/#Projects'?styles.noselect+ ' ' + styles.active:styles.noselect}>Projects</li></a></Link>
  <Link passHref={true} href="#ContactMe" ><a onClick={()=>{navSwitch()}}><li className={router.asPath == '/#ContactMe'?styles.noselect+ ' ' + styles.active:styles.noselect}>Contact Me</li></a></Link>
  <li ><Link href={"https://www.dropbox.com/s/lyzfotvwpcyyhre/ANSHIL_P_URK19EC2010_RESUME.pdf?dl=1"} passHref={true}><button className={styles.resumeButton}>Resume</button></Link></li>
  <li><div className={styles.socialIcons}>
<Link href={"https://instagram.com/anshil.me"} passHref={true}><span className={styles.instagram}></span></Link>
<Link href={"https://github.com/0VERRIDER"} passHref={true}><span className={styles.github}></span></Link>
<Link href={"mailto:admin@anshil.me"} passHref={true}><span className={styles.email}></span></Link>

  </div> </li>
</ul>

</div>
      <div className={styles.fixedHeader}   >
        <ul>
          <i className={ navState?styles.menuIcon +' '+styles.openedMenu:styles.menuIcon} onClick={navSwitch}></i>
        </ul>
      </div>
    </div>
  );
}
