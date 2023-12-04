'use client';

import baffle from "baffle";
import { useEffect } from "react";
import { useContext } from 'react';
import { SplashContext } from "../../context/spalshscreen/SplashContext";
import * as strings from "../../resources/strings";


export default function BaffledJobTitles() {

    // Get the isSplashScreenAnimationComplete state from the SplashContext
    const { isSplashScreenAnimationComplete } = useContext(SplashContext);

    // Baffle Animation Characters
    const characters = '/-=\\\' + "';

    // Job Titles Array
    const jobTitles = strings.en.JOB_TITLES;

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
        if (isSplashScreenAnimationComplete) {
            startTimeout();
        }

        // cleanup function to clear the interval and timeout
        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };

    }, [isSplashScreenAnimationComplete]);

    return (
        <>
            <h2 className="baffled text-base font-medium tracking-widest text-opacity-60 text-center text-white uppercase antialiased w-full h-14">
                { jobTitles[0] }
            </h2>
        </>
    )
}