import Image from 'next/image'
import Container from "../components/Container";

const skills = [
    {
        "name": "Python",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        "name": "C",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
        "name": "C++",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
        "name": "Java",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
        "name": "Javascript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        "name": "PHP",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
        "name": "HTML",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        "name": "CSS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        "name": "SQL",
        "icon": "https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.svg",
    },
    {
        "name": "MongoDB",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        "name": "NodeJS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        "name": "ReactJS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        "name": "Flutter",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
        "name": "Dart",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
    {
        "name": "Arduino",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    },
    {
        "name": "Raspberry Pi",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
    },
    {
        "name": "Linux",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
        "name": "Git",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        "name": "GitHub",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
        "name": "GitLab",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    },
    {
        "name": "Docker",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
        "name": "Firebase",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
        "name": "Heroku",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    },
    {
        "name": "Amazon Web Services",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
        "name": "Google Cloud",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
        "name": "Microsoft Azure",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
        "name": "Digital Ocean",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
    },
    {
        "name": "Nginx",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    },
    {
        "name": "Apache",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    },
    {
        "name": "VS Code",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
        "name": "Postgresql",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
        "name": "C#",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
        "name": "Redis",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
        "name": "NextJS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        "name": "TailwindCSS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
        "name": "Bootstrap",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
        "name": "JQuery",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    },
    {
        "name": "Figma",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
        "name": "swift",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    },
    {
        "name": "Embedded C",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
    },
    {
        "name": "ifttt",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ifttt/ifttt-original.svg",
    },
    {
        "name": "jenkins",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    },
    {
        "name": "Mysql",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
        "name": "npm",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
    {
        "name": "FastAPI",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
        "name": "Filezilla",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg",
    },
    {
        "name": "Jupyter",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    },
]

let chunkSize = 12;
let chunks = Array.from({ length: Math.ceil(skills.length / chunkSize) }, (_, i) =>
    skills.slice(i * chunkSize, i * chunkSize + chunkSize)
);

export default function Skills() {
    return (
        <Container id="skills" className="flex-col md:flex-row-reverse md:items-center md:justify-center bg-gradient-to-b from-grey-brown from-30% to-black">
            <div className="text-white text-2xl font-bold md:m-auto h-full w-full p-10 md:pr-20 md:w-1/3  text-center uppercase">Tech Stack</div>
            <div className="flex mx-auto md:w-1/2 flex-row md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="flex flex-col items-center scrollbar-hide   mx-auto md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    {
                        chunks.map((chunk, index) => {
                            return (
                                <div key={index} className={`scrolling-logos flex flex-row items-center justify-center p-5 gap-3 ${index % 2 == 0 ? "animate-infinite-scroll" : "animate-reverse-infinite-scroll"}`}>
                                    {
                                        chunk.map((skill, index) => {
                                            return (
                                                <div key={index} className="flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-l from-neutral-800 to-neutral-600 rounded-lg">
                                                    <div className="flex flex-col items-center bg-black bg-opacity-80 w-[4.9rem] h-[4.9rem] justify-center rounded-lg">
                                                        <Image width="200" height="200" src={skill.icon} alt={skill.name} className="w-12 h-12 grayscale" />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </Container>
    )
}