"use client";

import { SplashContext } from '../../context/spalshscreen/SplashContext';
import { useContext } from 'react';
import Cursor from "../../resources/assets/cursor/cursor.svg";
import Image from "next/image";

export default function CursorAnimation() {
    const { isSplashScreenVisible } = useContext(SplashContext);
    return (
        <div className={`cursor-container absolute flex flex-col items-center justify-center w-full h-full overflow-hidden`}>
            <Image src={Cursor} alt="Cursor" width={40} height={40} className={`relative ${!isSplashScreenVisible ? "cursor" : "hidden"}`} />
        </div>
    )
}