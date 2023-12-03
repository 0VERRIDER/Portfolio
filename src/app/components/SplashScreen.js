"use client";

import { useContext, useState, useEffect } from "react";
import { SplashContext } from "../context/spalshscreen/SplashContext";
import LogoLined from "../resources/LogoLined"

export default function SplashScreen() {
    const { isSplashScreenAnimationComplete, isSplashScreenVisible, toggleSplashView } = useContext(SplashContext);

    // Hide the splash screen after 3 seconds
    useEffect(() => {
        setTimeout(() => {
            toggleSplashView();
        }, 3000);
    }, []);

    // Remove overflow-hidden class from body after splash screen animation is complete
    useEffect(() => {
        if (isSplashScreenAnimationComplete) {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isSplashScreenAnimationComplete]);

    return (
        <div id="splash-screen" className={`fixed z-[100] items-center flex flex-col w-screen h-screen bg-black transition-opacity duration-700 ${!isSplashScreenVisible && "fade"} ${isSplashScreenAnimationComplete && "hidden"}`}>
            <div className="flex flex-row items-center justify-center h-5/6">
                <LogoLined className="logo md:h-24 h-32" />
            </div>
        </div>
    )
}