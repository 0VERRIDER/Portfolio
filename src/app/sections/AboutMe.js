'use client';

import { useRef } from "react";
import useIsInView from "../hooks/useIsInView";
import Container from "../components/Container";
import LogoLined from "../resources/LogoLined";

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useIsInView(ref);
    return(
        <Container id="about-me" className="flex-col md:flex-row p-10 items-center bg-black" ref={ref}>
                <div className="flex flex-row items-center justify-center logo py-24 md:w-1/3 md:mb-16">
                    <LogoLined className="logo md:h-24 h-32" />
                </div>
                <div id="description" className={`${isInView&&"hide"} text-white text-lg font-light text-justify md:w-1/2 md:mb-16`}>
                    <span>I’m a passionate</span> <b className="font-bold">IoT Full stack developer</b> <span>with a unique ability to
                    seamlessly bridge the gap between</span> <b className="font-bold">hardware and software</b><span>. 
                    I thrive on continuous improvement, dedicating myself to refining my skills daily. 
                    My heart lies in </span><b className="font-bold">open-source contributions</b><span>, and I'm enthusiastic about collaborating 
                    with diverse teams to foster mutual learning. Let's connect and build the future 
                    together through innovation and shared knowledge.</span>
                </div>
        </Container>
    )
}