"use client";

import { useState } from "react";
import { BottomMessageBarContext } from "./BottomMessageBarContext";

function BottomMessageBarProvider({ children }) {
    function toggleBottomMessageBar() {
        setIsBottomBottomMessageBarVisible(!isBottomBottomMessageBarVisible);

        var messageVisiblityTimeOut = setTimeout(() => {
            setIsBottomBottomMessageBarVisible(false);
            clearTimeout(messageVisiblityTimeOut);
        }, 5000);

    }

  return (
    <BottomMessageBarContext.Provider value={{isBottomBottomMessageBarVisible, toggleBottomMessageBar}}>
      {children}
    </BottomMessageBarContext.Provider>
  )
}

export default BottomMessageBarProvider