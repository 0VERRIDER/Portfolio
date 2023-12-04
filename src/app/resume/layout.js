import { BottomMessageBarProvider } from "../context/bottomMessageBar/BottomMessageBarProvider";
import { BottomMessageBar } from "../components/BottomMessageBar";

export default function ResumeLayout({ children }) {
  return (
          <BottomMessageBarProvider>
            <BottomMessageBar />
            {children}
          </BottomMessageBarProvider>
  )
}