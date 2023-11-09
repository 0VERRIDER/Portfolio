import Container from "../components/Container";
import LogoLined from "../resources/LogoLined";

export default function AboutMe() {
    return(
        <Container className="flex-col bg-black">
            <div className="flex flex-col md:flex-row h-screen items-center justify-center p-10 md:p-5">
                <div className="flex flex-row items-center justify-center logo py-16 md:w-1/3">
                    <LogoLined className="md:h-24 h-32" />
                </div>
                <div className="text-white text-lg font-light text-justify md:w-1/2 mb-20 md:mb-0">
                    I’m a passionate <b className="font-bold">IoT Full stack developer</b> with a unique ability to 
                    seamlessly bridge the gap between <b className="font-bold">hardware and software</b>. 
                    I thrive on continuous improvement, dedicating myself to refining my skills daily. 
                    My heart lies in <b className="font-bold">open-source contributions</b>, and I'm enthusiastic about collaborating 
                    with diverse teams to foster mutual learning. Let's connect and build the future 
                    together through innovation and shared knowledge.
                </div>
            </div>
        </Container>
    )
}