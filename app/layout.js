import "../styles/globals.scss";
import Header from "./header.js"
export const metadata = {
    title: "Swipe North",
    description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
