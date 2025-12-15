
import Curser from "./components/Curser";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://su-news.vercel.app"),
  title: {
    default: "sarsvati vidhayalay school - kamlapur",
    template: "%s | sarsvati vidhayalay",
  },
  description:
    "Sarsvati Vidhayalay School located in Kamlapur, Surendranagar, Gujarat. Providing quality education and holistic development for students.",
    keywords: [
     "Sarsvati Vidhayalay School",
      "Kamlapur School",
      "Surendranagar Education",
      "Gujarat Schools",
      "Student Development",
      "Quality Education",
      "School Activities",
      "Academic Excellence",
      "School Events",
      "Sarsvati Vidhayalay Activities",
      "Sarsvati Vidhayalay Events",
      "Sarsvati Vidhayalay Admission",
      "Sarsvati Vidhayalay Contact",
      "Sarsvati Vidhayalay Location",
      "Sarsvati Vidhayalay Facilities",
      "Sarsvati Vidhayalay Curriculum",
      "Sarsvati Vidhayalay Teachers",
      "Sarsvati Vidhayalay Students",
      "Sarsvati Vidhayalay News",
      "Sarsvati Vidhayalay Updates",
  ],
  authors: [{ name: "Malkiya Hitesh" }],

  openGraph: {
    title: "sarsvati vidhayalay school - kamlapur",
    description:
      "Sarsvati Vidhayalay School located in Kamlapur, Surendranagar, Gujarat. Providing quality education and holistic development for students.",
    url: "",
    siteName: "sarsvati vidhayalay school",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        alt: "Sarsvati Vidhayalay Logo",
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
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
