import './globals.css'
import * as strings from './resources/strings';
import BottomNav from './components/BottomNav';

export const metadata = {
  title: strings.en.META_TITLE,
  description: strings.en.META_DESCRIPTION,
  url: 'https://anshil.me',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: 'no',
  shrinkToFit: 'no',
  viewportFit: 'cover',
  height: 'device-height',
  orientation: 'portrait',
  color: '#0f141a',
  themeColor: '#0f141a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BottomNav />
      </body>
    </html>
  )
}
