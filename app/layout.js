import './globals.css'

export const metadata = {
  title: 'Swipe North',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header />
        {children}
      </body>
    </html>
  )
}
