import BaffledJobTitles from "../components/BaffledJobTitles";
import Container from "../components/Container";
import NameTitle from "../components/NameTitle";

export default function MainHead() {
    return (
        <Container id="home" className="flex-col bg-gradient-to-b from-primary from-30% to-black">
            <div className="absolute flex flex-col items-center justify-center h-5/6 w-screen">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="hidden text-xl font-normal tracking-widest text-center text-white italic antialiased w-full h-9">Hello, I'm</h3>
                    <NameTitle />
                    <BaffledJobTitles />
                </div>
            </div>

        </Container>
    )
}