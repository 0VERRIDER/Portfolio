'use client';

import baffle from "baffle";
import { useEffect } from "react";
import { useContext } from 'react';


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
        // Baffle Animation container
        let container = document.querySelector('.baffled');

        // Baffle Animation configuration
        const b = baffle(container, {
            characters: characters,
            speed: 100
        });

        let i = 1;
        let intervalId;
        let timeoutId;

        // Baffling animation
        const startBaffling = () => {
            b.start();
            b.text(() => jobTitles[i]);
            b.reveal(6000);
            i++;
            if (i === jobTitles.length) {
                i = 0;
            }
        };

        // Interval between each title (Except initial)
        const startInterval = () => {
            intervalId = setInterval(startBaffling, 6000);
        };

        // For longer initial interval
        const startTimeout = () => {
            timeoutId = setTimeout(() => {
                startInterval();
                startBaffling();
            }, 14000);
        };

        // Start The Baffle Animation
        startTimeout();

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <h2 className="baffled text-base font-medium tracking-widest text-opacity-60 text-center text-white uppercase antialiased w-full h-14">
                {jobTitles[0]}
            </h2>
        </>
    )
}