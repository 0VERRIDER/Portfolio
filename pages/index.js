import Intro from "../components/sections/Intro";
import styles from "../styles/Test.module.css";
import AboutMe from "../components/sections/Aboutme";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import ContactMe from "../components/sections/ContactMe";
import NavBar from "../components/NavBar";


export default function Home() {


 
  return (
    <div className={styles.container}>
      <NavBar/>
      
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}
