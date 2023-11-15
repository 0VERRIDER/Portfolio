`use client`;

import Container from "../components/Container";
import LogoLined from "../resources/LogoLined";

export default function AboutMe() {
    return(
        <Container className="flex-col md:flex-row p-10 items-center bg-black">
                <div className="flex flex-row items-center justify-center logo py-24 md:w-1/3 md:mb-16">
                    <LogoLined className="logo md:h-24 h-32" />
                </div>
                <div className="text-white text-lg font-light text-justify md:w-1/2 md:mb-16">
                    I’m a passionate <b className="font-bold">IoT Full stack developer</b> with a unique ability to 
                    seamlessly bridge the gap between <b className="font-bold">hardware and software</b>. 
                    I thrive on continuous improvement, dedicating myself to refining my skills daily. 
                    My heart lies in <b className="font-bold">open-source contributions</b>, and I'm enthusiastic about collaborating 
                    with diverse teams to foster mutual learning. Let's connect and build the future 
                    together through innovation and shared knowledge.
                </div>
        </Container>
    )
}