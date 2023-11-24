"use client";

import { Alexandria } from 'next/font/google';
import { useContext } from 'react';
import { SplashContext } from '../context/spalshscreen/SplashContext';

const alexandria = Alexandria({ subsets: ['latin'], weight: ["700"] });

export default function NameTitle() {
    const { isSplashScreenVisible } = useContext(SplashContext);

    return (
        <h1 className={`name-title ${alexandria.className} ${!isSplashScreenVisible && "start-anim"}  text-7xl font-bold text-center text-white uppercase antialiased h-[78px]`}>
            <span className="letter">A</span>
            <span className="letter">nshil</span>
        </h1>
    )
}