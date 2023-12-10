import BaffledJobTitles from "../components/titleComponents/BaffledJobTitles";
import Container from "../components/common/container/Container";
import NameTitle from "../components/titleComponents/NameTitle";
import CursorAnimation from "../components/titleComponents/CursorAnimation";

export default function MainHead() {
    return (
        <Container id="home" className="flex-col bg-gradient-to-b from-primary from-30% md:from-35% to-black">
            <div className="absolute flex flex-col items-center justify-center h-5/6 w-screen">
                <div className="flex flex-col items-center justify-center">
                    <NameTitle />
                    <BaffledJobTitles />
                    {/* <CursorAnimation /> */}
                </div>
            </div>
        </Container>
    )
}