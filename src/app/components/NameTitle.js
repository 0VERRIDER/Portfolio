"use client";

import { Alexandria } from 'next/font/google';
import { useContext } from 'react';
import { SplashContext } from '../context/spalshscreen/SplashContext';

const alexandria = Alexandria({ subsets: ['latin'], weight: ["700"] });

export default function NameTitle() {
    const { isSplashScreenVisible } = useContext(SplashContext);

    return (
        <div className={`name-title ${alexandria.className} text-7xl font-bold text-center text-white uppercase antialiased h-[78px] w-auto`}>
            <div className="flex justify-center items-center pl-2">
                <h1 className="letter">
                    A
                </h1>
                <h1 className={`line-1 ${!isSplashScreenVisible && "anim-typewriter"} w-0`} >
                    nshil
                </h1>
            </div>
        </div>
    )
}