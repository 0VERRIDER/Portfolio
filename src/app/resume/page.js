import Container from "../components/Container";
import ResumeDownloader from "../components/ResumeDownloader";

export default function Resume() {
    return (
        <Container className="bg-black flex-col">
            <ResumeDownloader />
        </Container>
    )
}