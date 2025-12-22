import { Inter, Poppins } from "next/font/google";
import ClientLayout from "./components/ClientLayout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://gnanagangothrividyalaya.in"),
  title: {
    default: "Gnana Gangothri Vidyalaya",
    template: "%s | Gnana Gangothri Vidyalaya",
  },
  description:
    "Gnana Gangothri Vidyalaya providing quality education and holistic development.",
  authors: [{ name: "Malkiya Hitesh" }],
  openGraph: {
    title: "Gnana Gangothri Vidyalaya",
    description:
      "Gnana Gangothri Vidyalaya Providing quality education and holistic development for students.",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
