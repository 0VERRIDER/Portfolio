import Container from "../components/common/container/Container";
import ProjectGrid from "../components/projectGridComponents/ProjectGrid";


export default function Projects() {

    return (
        <Container id="projects" className="flex-col md:items-center md:justify-center  md:flex-row bg-black select-none md:py-20">
            <div className="md:flex md:flex-col md:justify-center md:items-center text-white text-2xl font-bold uppercase text-center p-10 md:mb-24 md:w-1/3">Projects</div>
            <div className="flex flex-col w-full">
                <ProjectGrid />
            </div>
        </Container>
    )
}