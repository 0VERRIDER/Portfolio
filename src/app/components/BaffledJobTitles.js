'use client';

import baffle from "baffle";
import { useEffect } from "react";


export default function BaffledJobTitles() {
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
        }, 6000);

    }, []);

    return (
        <h2 className="baffled text-base font-medium tracking-widest text-opacity-60 text-center text-white uppercase antialiased w-full h-14">
            {jobTitles[0]}
        </h2>
    )
}