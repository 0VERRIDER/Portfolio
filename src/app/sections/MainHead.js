import Container from "../components/Container";

export default function MainHead() {
    return (
        <Container className="flex-col bg-gradient-to-b from-primary from-30% to-black">
            <div className="flex flex-col items-center justify-center h-3/4 w-full">
                <h1 className="text-7xl font-bold text-center text-white uppercase">Anshil</h1>
                <h2 className="text-base font-medium tracking-widest text-opacity-60 text-center text-white uppercase">Fullstack Developer</h2>
            </div>
        </Container>
    )
}