"use client";

import { useContext } from "react";
import Link from 'next/link'
import { MenuContext } from "../context/menu/MenuContext";

export default function Menu() {
const { isMenuOpen, toggleMenu } = useContext(MenuContext);

return (
    <div className={`menu ${!isMenuOpen?"hidden": ""} w-full z-40 bg-black h-screen fixed top-0 left-0 flex flex-col justify-center`}>
      <ul className="flex flex-col -mt-20 text-white text-4xl font-bold gap-5">
        <li className="text-center hover:underline transition duration-100 ease-in-out">
          <Link href="#home" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="text-center hover:underline">
          <Link href="#about-me" onClick={toggleMenu}>About</Link>
        </li>
        <li className="text-center hover:underline">
          <Link href="#skills" onClick={toggleMenu}>Skills</Link>
        </li>
        <li className="text-center hover:underline">
          <Link href="#projects" onClick={toggleMenu}>Projects</Link>
        </li>
        <li className="text-center hover:underline">
          <Link href="#contact-me"onClick={toggleMenu}>Contact</Link>
        </li>
        <li className="text-center m-6">
            <Link href="https://resume.anshil.me">
                <button className="btn border border-white text-xl w-60 p-6 rounded-lg bg-primary">
                  Resume
                </button>
            </Link>
        </li>
      </ul>
    </div>
  );
}