
import Curser from "./components/Curser";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://gnanagangothrividyalaya.in"),
  title: {
    default: "Gnana Gangothri Vidyalaya",
    template: "%s |Gnana Gangothri Vidyalaya",
  },
  description:
    "",
    keywords: [],
  authors: [{ name: "Malkiya Hitesh" }],

  openGraph: {
    title: "Gnana Gangothri Vidyalaya ",
    description:
      "Gnana Gangothri Vidyalaya Providing quality education and holistic development for students.",
    url: "",
    siteName: "Gnana Gangothri Vidyalaya",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        alt: "Gnana Gangothri Vidyalaya",
      },
    ],
    locale: "en_IN",
    type: "website",
  },


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />

    <meta charSet="UTF-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body >
        <Curser />
        <Navbar />

        {children}
        {/* <Footer /> */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
