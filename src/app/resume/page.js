import Container from "../components/common/container/Container";
import ResumeDownloader from "../components/resumeComponents/ResumeDownloader";

export default function Resume() {
    return (
        <Container className="bg-black flex-col">
            <ResumeDownloader />
        </Container>
    )
}