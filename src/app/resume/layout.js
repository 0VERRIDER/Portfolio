import { BottomMessageBarProvider } from "../context/bottomMessageBar/BottomMessageBarProvider";
import { BottomMessageBar } from "../components/common/bottomMessageBar/BottomMessageBar";

export default function ResumeLayout({ children }) {
  return (
          <BottomMessageBarProvider>
            <BottomMessageBar />
            {children}
          </BottomMessageBarProvider>
  )
}