"use client";

import { useContext, useEffect, useState } from "react";
import Link from 'next/link';
import { MenuContext } from "../../../context/menu/MenuContext";
import SocialButtons from "../socialButtons/SocialButtons";

export default function Menu() {
const { isMenuOpen, toggleMenu } = useContext(MenuContext);
const [pathname, setPathname] = useState("");

useEffect(() => {
  let pathAfterHash = window.location.href.split("#")[1];
  setPathname(`/${pathAfterHash ? "#" + pathAfterHash :  ""}`);
});

// function to show loading on clicking resume
const goToResume = () => {
  document.querySelector(".btn").innerHTML = "Loading...";
  setTimeout(() => {
    document.querySelector(".btn").innerHTML = "Resume";
    toggleMenu();
  }, 2000);
};

const menuItems = [
    {
        name: "Home",
        link: ["/#home", "/"]
    },
    {
        name: "About Me",
        link: ["/#about-me"]
    },
    {
        name: "Skills",
        link: ["/#skills"]
    },
    {
        name: "Projects",
        link: ["/#projects"]
    },
    {
        name: "Contact",
        link: ["/#contact-me"]
    }
]

return (
    <div className={`menu ${!isMenuOpen?"hidden": ""} w-full z-40 bg-black h-screen fixed top-0 left-0 flex flex-col justify-center`}>
      <ul className="flex flex-col pb-20 text-white text-4xl font-bold gap-5">
        {
          menuItems.map((item, index) => {
            return(
              <li key={index} className={`text-center ${item.link.includes(pathname) && "text-black text-shadow-custom"}`}>
                <a href={item.link[0]} onClick={toggleMenu}>
                  {item.name}
                </a>
              </li>
            )
          })
        }
        <li className="text-center m-6">
            <Link href="/resume" onClick={goToResume}>
                <button className="btn border border-white text-xl w-60 p-6 rounded-lg bg-primary">
                  Resume
                </button>
            </Link>
        </li>
        <li className="text-center">
          <SocialButtons />
        </li>
      </ul>
    </div>
  );
}