import "../styles/globals.scss";
import Header from "./header.js"
import Image from 'next/image'
import backgroundImg from '../public/background.png'

export const metadata = {
    title: "Swipe North",
    description: "",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(${backgroundImg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Header />
        {children}
      </body>
    </html>
  )
}
