import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="min-h-screen bg-gradient-to-tl from-cddbmedium to-cddblight">
            <Head />
            <body className="h-full">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
