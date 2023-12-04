"use client";

import { useState } from "react";
import { BottomMessageBarContext } from "./BottomMessageBarContext";

export function BottomMessageBarProvider({ children }) {
    const [isBottomBottomMessageBarVisible, setIsBottomBottomMessageBarVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [bgColor, setBgColor] = useState("bg-green-700");

    function toggleBottomMessageBar() {
        setIsBottomBottomMessageBarVisible(!isBottomBottomMessageBarVisible);

        var messageVisiblityTimeOut = setTimeout(() => {
            setIsBottomBottomMessageBarVisible(false);
            clearTimeout(messageVisiblityTimeOut);
        }, 5000);
    }

    function showBottomMessageBar(message, color="bg-green-700") {
        setMessage(message);
        toggleBottomMessageBar();
        setBgColor(color);
    }

  return (
    <BottomMessageBarContext.Provider value={{isBottomBottomMessageBarVisible, message, bgColor, showBottomMessageBar}}>
      {children}
    </BottomMessageBarContext.Provider>
  )
}