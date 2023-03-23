import { Readex_Pro } from "next/font/google";
import "../styles/globals.scss";
import Header from "./header.js"
import Image from 'next/image'
import backgroundImg from '../public/background.png'
export const metadata = {
    title: "Swipe North",
    description: "",
};

const readex_pro = Readex_Pro({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={readex_pro.className} style={{ backgroundImage: `url(${backgroundImg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
        <Header />
        {children}
      </body>
    </html>
  )
}
