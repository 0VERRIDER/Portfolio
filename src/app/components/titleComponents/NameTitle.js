"use client";

import { Alexandria } from 'next/font/google';
import { useContext, useEffect, useState } from 'react';
import { SplashContext } from '../../context/spalshscreen/SplashContext';

const alexandria = Alexandria({ subsets: ['latin'], weight: ["700"] });


export default function NameTitle({ className }) {
    const { isSplashScreenVisible } = useContext(SplashContext);
    const [name, setName] = useState("A");
    const [isBorderVisible, setIsBorderVisible] = useState(false);
    const [isNameSelectable, setIsNameSelectable] = useState(false);
    // append letter by letter after splash screen animation is complete 
    useEffect(() => {
        let restOfTheName = "ANSHIL";
        if(!isSplashScreenVisible) {
            setTimeout(() => {
            let i = 0;
            let intervalId = setInterval(() => {
                setName(prevName => prevName + restOfTheName[i]);
                i++;
                if(i === restOfTheName.length - 1 ) {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        setIsBorderVisible(false);
                    }
                    , 6700);
                    return;
                }
            }, 240);
        }, 7000);

        setTimeout(() => {
            setIsBorderVisible(true);
            setIsNameSelectable(true);
        }, 5000);
        }
        }, [isSplashScreenVisible]);

    return (
        <div className={`name-title ${alexandria.className} ${className} text-7xl font-bold text-center text-white uppercase antialiased w-fit ${isNameSelectable && "z-10"} overflow-hidden`}>
         {/* <div className={`name-title ${alexandria.className} ${className} text-7xl font-bold text-center text-white uppercase antialiased w-fit ${isBorderVisible && "border border-[#0c8ce9]"} ${isNameSelectable && "z-10"} overflow-hidden`}> */}
            <div className="flex justify-center items-center p-2">
                <h1 className={`letter line-1 ${!isSplashScreenVisible && "anim-line-blink"}`}>
                    {name}
                </h1>
            </div>
        </div>
    )
}