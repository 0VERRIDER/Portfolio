"use client";

import {useContext} from 'react';
import {BottomMessageBarContext} from '../../../context/bottomMessageBar/BottomMessageBarContext';


export function BottomMessageBar() {
    const {isBottomBottomMessageBarVisible, message, bgColor} = useContext(BottomMessageBarContext);
    return (
        <div 
            id="bottom-message-bar" 
            className={`
                fixed 
                overflow-hidden
                bottom-20 
                z-[100] 
                w-screen 
                ${bgColor}
                text-white 
                text-sm
                font-medium
                ${isBottomBottomMessageBarVisible ? 'h-10' : 'h-0'}
                transition-all
                `}>
            <div className="flex flex-row items-center justify-center h-full">
                <p className="text-white">{message}</p>
            </div>
        </div>
    )
}