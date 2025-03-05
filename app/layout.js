import "./globals.css";

export const metadata = {
  title: "Arabical Calculator - Arabic Numeral & Math Calculator",
  description: "Arabical Calculator is a fast and efficient Arabic numeral calculator built with Next.js, React, and Tailwind CSS. Perform accurate calculations with a user-friendly interface.",
  keywords: "Arabic calculator, Arabic numeral calculator, math calculator, online calculator, Next.js calculator, React calculator, Tailwind CSS calculator",
  author: "Ali Raza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        {/* Standard Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={metadata.author} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arabical.vercel.app/" />

        {/* Favicon and Theme Color */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>{metadata.title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
