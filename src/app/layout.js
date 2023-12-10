import './globals.css'
import { Inter } from 'next/font/google';
import * as strings from './resources/strings';
import BottomNav from './components/common/bottomNav/BottomNav';
import Menu from './components/common/menu/Menu';
import { MenuProvider } from './context/menu/MenuProvider';
import SplashScreen from './components/common/splashscreen/SplashScreen';
import { SplashProvider } from './context/spalshscreen/SplashProvider';
import { BottomMessageBarProvider } from './context/bottomMessageBar/BottomMessageBarProvider';
import { BottomMessageBar } from './components/common/bottomMessageBar/BottomMessageBar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: strings.en.META_TITLE,
  applicationName: strings.en.META_APPLICATION_NAME,
  description: strings.en.META_DESCRIPTION,
  url: 'https://anshil.me',
  manifestUrl: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  shrinkToFit: 'no',
  viewportFit: 'cover',
  height: 'device-height',
  orientation: 'portrait',
  color: '#0f141a',
  themeColor: '#0f141a',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'black',
  msTileColor: '#0f141a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`overflow-hidden ${inter.className}`}>
        <SplashProvider>
          <BottomMessageBarProvider>
            <BottomMessageBar />
            <SplashScreen />
            {children}
            <MenuProvider>
              <Menu />
              <BottomNav />
            </MenuProvider>
          </BottomMessageBarProvider>
        </SplashProvider>
      </body>
    </html>
  )
}
