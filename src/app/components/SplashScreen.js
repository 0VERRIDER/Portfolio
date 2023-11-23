"use client";
import { useEffect, useState } from "react";
import LogoLined from "../resources/LogoLined"

export default function SplashScreen() {
    const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
    useEffect (() => {
        setTimeout(() => {
            setIsSplashScreenVisible(false);
        }, 3000);
    }
    ,[]);

    return (
        <div id="splash-screen" className={`fixed z-[100]  items-center flex flex-col w-screen h-screen bg-black ${!isSplashScreenVisible?"hidden":""}`}>
            <div className="flex flex-row items-center justify-center logo  h-3/4">
                    <LogoLined className="logo md:h-24 h-32" />
            </div>
        </div>
    )
}