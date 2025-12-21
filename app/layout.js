import { Inter, Poppins } from "next/font/google"
import ClientLayout from "./components/ClientLayout"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
})


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


        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body >

        <ClientLayout >
          {children}
        </ClientLayout>


      </body>
    </html>
  );
}
