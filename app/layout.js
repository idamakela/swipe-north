import "../styles/globals.scss";

export const metadata = {
    title: "Swipe North",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
