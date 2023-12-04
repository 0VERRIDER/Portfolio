import BaffledJobTitles from "../components/titleComponents/BaffledJobTitles";
import Container from "../components/common/container/Container";
import NameTitle from "../components/titleComponents/NameTitle";

export default function MainHead() {
    return (
        <Container id="home" className="flex-col bg-gradient-to-b from-primary from-30% md:from-35% to-black">
            <div className="absolute flex flex-col items-center justify-center h-5/6 md:h-full w-screen">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="hidden text-xl font-normal tracking-widest text-center text-white italic antialiased w-full h-9">Hello, I'm</h3>
                    <NameTitle />
                    <BaffledJobTitles />
                </div>
            </div>
        </Container>
    )
}