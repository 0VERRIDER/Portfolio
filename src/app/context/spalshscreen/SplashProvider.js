"use client";

import { useState } from 'react';
import { SplashContext } from './SplashContext';

export function SplashProvider({ children }) {
    const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

    const toggleSplashView= () => {
        setIsSplashScreenVisible(!isSplashScreenVisible);
    }

    return (
        <SplashContext.Provider value={{ isSplashScreenVisible, toggleSplashView }}>
            {children}
        </SplashContext.Provider>
    )
}