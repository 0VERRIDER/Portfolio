"use client";
import { useContext, useEffect } from "react";
import { SplashContext } from "../context/spalshscreen/SplashContext";
import LogoLined from "../resources/LogoLined"

export default function SplashScreen() {
    const { isSplashScreenVisible, toggleSplashView } = useContext(SplashContext);

    useEffect (() => {
        setTimeout(() => {
            toggleSplashView();
        }, 3000);
    }
    ,[]);

    return (
        <div id="splash-screen" className={`fixed z-[100]  items-center flex flex-col w-screen h-screen bg-black ${!isSplashScreenVisible&&"fade"}`}>
            <div className="flex flex-row items-center justify-center h-5/6">
                    <LogoLined className="logo md:h-24 h-32" />
            </div>
        </div>
    )
}