import Container from "../components/Container";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

const projects = [
    {
        "name": "MedWiz",
        "slogan": "Health All in One",
        "url": "https://medwiz.anshil.me"
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
        "name": "The Resume Manager",
        "slogan": "Manage and track resume submissions",
        "url": "https://resumemanager.anshil.me"
    },
    {
        "name": "InfoWiz",
        "slogan": "Medical Chat Bot",
        "url": "https://infowiz.anshil.me"
    }
]

export default function Projects() {
    return (
        <Container className="flex-col  md:flex-row bg-black">
                <div className="md:flex md:flex-col md:justify-center md:items-center text-white text-2xl font-bold uppercase text-center p-10 md:w-1/3 md:min-h-screen md:h-full">Projects</div>
            <div className="flex flex-col w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 px-5 md:px-20  justify-center items-center ">
                    {
                        projects.map((project, index) => {
                            return (
                                <div key={index} className={` flex ${index%2==0 ? "flex-row bg-gradient-to-r" : "flex-row-reverse bg-gradient-to-l "} h-32 w-full from-black ${project.color || "to-primary"} border border-white hover:border-2 transition-all rounded-lg`}>
                                    <div className="flex flex-col justify-center items-center w-full">
                                        <div className="text-white text-2xl p-1 font-bold">{ project.name }</div>
                                        <div className="text-white text-[10px] font-light">{ project.slogan }</div>
                                    </div>
                                    <div className={`flex flex-col justify-center ${index%2==0 ? "items-end" : "items-start"} px-10 w-1/2`}>
                                        {
                                            index%2==0 ?
                                                <ChevronRightIcon className="h-8 w-8 text-white" />:
                                                <ChevronLeftIcon className="h-8 w-8 text-white" />
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                    <div className="flex flex-col justify-center items-center p-5 w-full">
                        <button className="bg-white text-black text-sm w-48 rounded-full font-bold p-5 uppercase text-center">Show All</button>
                    </div>
            </div>
        </Container>
    )
}