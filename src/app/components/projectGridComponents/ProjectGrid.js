"use client";

import { useContext } from 'react';
import { BottomMessageBarContext } from '@/app/context/bottomMessageBar/BottomMessageBarContext';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { redirectTo } from '@/app/utils/Utils';

const projects = [
    {
        "name": "MedWiz",
        "slogan": "Health All in One",
        "url": "https://medwiz.anshil.me",
        "type": "webapp"
    },
    {
        "name": "TrackWheels",
        "slogan": "Tracking Based Business Management",
        "url": "https://trackwheels.anshil.me",
        "type": "webapp"

    },
    {
        "name": "ResumeManager",
        "slogan": "Resume Management System",
        "url": "https://resume.anshil.me",
        "type": "webapp"
    },
    {
        "name": "API Manager",
        "slogan": "API of APIs",
        "url": "https://github.com/0verrider",
        "type": "github"
    },
    {
        "name": "StockIT",
        "slogan": "On-shelf Inventory Management",
        "url": "https://stockit.anshil.me",
        "type": "app"
    },
    {
        "name": "InfoWiz",
        "slogan": "Medical Chat Bot",
        "url": "https://github.com/0verrider/infowiz",
        "type": "github"
    },
    {
        "name": "CountDown",
        "slogan": "Count Down Timer",
        "url": "https://countdown.anshil.me",
        "type": "webapp"
    },
    {
        "name": "Show All",
        "slogan": "View all projects",
        "url": "https://github.com/0verrider",
        "color": "to-black",
        "type": "github"
    },
]

export default function ProjectGrid() {
    const { showBottomMessageBar } = useContext(BottomMessageBarContext);

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 w-full md:gap-5 md:px-20  justify-center items-center ">
            {
                projects.map((project, index) => {
                    return (
                        <div key={index} className={` flex flex-row bg-gradient-to-r  h-32 w-full from-black ${index % 2 == 0 ? "border-l-0" : "border-x-0"} ${project.color || "to-primary"} border md:border border-white hover:border-2 transition-all md:rounded-lg`}>
                            <a onClick={
                                () => {
                                    if(project.type == "github")
                                        showBottomMessageBar(`Redirecting to Github`);
                                    else
                                        showBottomMessageBar(`Opening ${project.name}`);

                                    redirectTo(project.url);
                                }

                            } target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center w-full">
                                <div className="text-white text-xl p-1 font-bold text-center">{project.name}</div>
                                <div className="text-white text-[10px] w-[80%] font-light text-center">{project.slogan}</div>
                            </a>
                            <div className={`hidden md:flex flex-col justify-center items-end px-10 w-1/2`}>
                                <ChevronRightIcon className="h-8 w-8 text-white" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}