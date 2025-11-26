import "@/styles/main.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href="/images/png/icon.png" />
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Em breve...</title>
            </head>
            <body className="no-scrollbar fullscreen">
                {children}
            </body>
        </html>
    )
}