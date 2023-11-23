"use client";
import { useContext } from "react";
import { MenuContext } from "../context/menu/MenuContext";

export default function Menu() {
const { isMenuOpen } = useContext(MenuContext);

return (
    <div className={`menu ${!isMenuOpen?"hidden": ""} w-full z-40 bg-black h-screen fixed top-0 left-0 flex flex-col justify-center`}>
      <ul className="flex flex-col -mt-20 text-white text-4xl font-bold gap-5">
        <li className="text-center hover:underline transition duration-100 ease-in-out"><a href="/">Home</a></li>
        <li className="text-center hover:underline"><a href="/about">About</a></li>
        <li className="text-center hover:underline"><a href="/projects">Projects</a></li>
        <li className="text-center hover:underline"><a href="/contact">Contact</a></li>
        <li className="text-center m-6">
            <a href="https://resume.anshil.me">
                <button className="btn border border-white text-xl w-60 p-6 rounded-lg bg-primary">Resume</button>
            </a></li>
      </ul>
    </div>
  );
}