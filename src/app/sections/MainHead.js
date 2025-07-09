import BaffledJobTitles from "../components/titleComponents/BaffledJobTitles";
import Container from "../components/common/container/Container";
import NameTitle from "../components/titleComponents/NameTitle";
import CursorAnimation from "../components/titleComponents/CursorAnimation";

export default function MainHead() {
    return (
        <Container 
            id="home" 
            className="relative min-h-screen flex-col bg-gradient-to-b from-primary from-30% md:from-35% to-black overflow-hidden"
        >
            <section 
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Hero section"
            >
                <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
                    <NameTitle />
                    <BaffledJobTitles />
                    <CursorAnimation />
                </div>
            </section>
        </Container>
    )
}