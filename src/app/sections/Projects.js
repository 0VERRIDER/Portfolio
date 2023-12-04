import Container from "../components/common/container/Container";
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const projects = [
    {
        "name": "MedWiz",
        "slogan": "Health All in One",
        "url": "https://medwiz.anshil.me"
    },
    {
        "name": "TrackWheels",
        "slogan": "Tracking Based Business Management",
        "url": "https://trackwheels.anshil.me"
    },
    {
        "name": "ResumeManager",
        "slogan": "Resume Management System",
        "url": "https://resume.anshil.me"
    },
    {
        "name": "API Manager",
        "slogan": "API of APIs",
        "url": "https://api.anshil.me"
    },
    {
        "name": "StockIT",
        "slogan": "On-shelf Inventory Management",
        "url": "https://stockit.anshil.me"
    },
    {
        "name": "InfoWiz",
        "slogan": "Medical Chat Bot",
        "url": "https://infowiz.anshil.me"
    },
    {
        "name": "CountDown",
        "slogan": "Count Down Timer",
        "url": "https://countdown.anshil.me"
    },
    {
        "name": "Show All",
        "slogan": "View all projects",
        "url": "https://github.com/0verrider",
        "color": "to-black"
    },
]

export default function Projects() {
    return (
        <Container id="projects" className="flex-col md:items-center md:justify-center  md:flex-row bg-black select-none md:py-20">
            <div className="md:flex md:flex-col md:justify-center md:items-center text-white text-2xl font-bold uppercase text-center p-10 md:mb-24 md:w-1/3">Projects</div>
            <div className="flex flex-col w-full">
                <div className="grid grid-cols-2 md:grid-cols-2 w-full md:gap-5 md:px-20  justify-center items-center ">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className={` flex flex-row bg-gradient-to-r  h-32 w-full from-black ${ index%2==0 ? "border-l-0" : "border-x-0" } ${project.color || "to-primary"} border md:border border-white hover:border-2 transition-all md:rounded-lg`}>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-center items-center w-full">
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
            </div>
        </Container>
    )
}