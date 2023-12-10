"use client";

import { useState, useEffect } from 'react';
import { SplashContext } from './SplashContext';

export function SplashProvider({ children }) {
    const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
    const [isSplashScreenAnimationComplete, setIsSplashScreenAnimationComplete] = useState(false);

    const toggleSplashView= () => {
        setIsSplashScreenVisible(!isSplashScreenVisible);
        setTimeout(() => {
            setIsSplashScreenAnimationComplete(true);
        }, 700);
    }

    return (
        <SplashContext.Provider value={{ isSplashScreenVisible, isSplashScreenAnimationComplete , toggleSplashView }}>
            {children}
        </SplashContext.Provider>
    )
}