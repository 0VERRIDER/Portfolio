'use client';

import baffle from "baffle";
import { Alexandria } from 'next/font/google';
import Container from "../components/Container";
import { useEffect } from "react";

const alexandria = Alexandria({ subsets: ['latin'], weight: ["700"] });

export default function MainHead() {
    const characters = '/-=\\\' + "';
    const jobTitles = [
        'Software Engineer',
        'Web Developer',
        'Full Stack Developer',
        'Front End Developer',
        'Back End Developer',
        ];

    useEffect(() => {
        let container = document.querySelector('.baffled');
        const b = baffle(container, {
            characters: characters,
            speed: 100
        });

        let i = 1;
        setInterval(() => {
            b.start();
            b.text(() => jobTitles[i]);
            b.reveal(6000);
            i++;
            if (i === jobTitles.length) {
                i = 0;
            }
        }, 5000);
        
    }, []);

    return (
        <Container className="flex-col bg-gradient-to-b from-primary from-30% to-black">
            <div className="absolute flex flex-col items-center justify-center h-5/6 w-screen">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-xl font-thin tracking-widest text-center text-white italic antialiased w-full h-9">Hello, I'm</h3>
                    <h1 className={`name-title ${alexandria.className}  text-7xl font-bold text-center text-white uppercase antialiased h-[78px]`}>
                        <span className="letter">A</span>
                        <span className="letter">nshil</span>
                    </h1>
                    <h2 className="baffled text-base font-medium tracking-widest text-opacity-60 text-center text-white uppercase antialiased w-full h-14">{ jobTitles[0] }</h2>
                </div>
            </div>

        </Container>
    )
}