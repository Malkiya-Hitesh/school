
import Achievement from "./components/section/Achievement";
import EventSection from "./components/section/Event";
import Home from "./components/section/Home";
import Programs from "./components/section/Programs";
import SchoolLoader from "./components/ui/Loader";
import Fqa from "./components/section/Fqa";
import ContactSection from "./components/section/ContactSection";
import TeachersSection from "./components/section/Teachers";
import Choose from "./components/section/Choose";
import PageClient from "./PageClient";

export const metadata = {
  title: "Gnana Gangothri Vidyalaya",
  description:
    "Gnana Gangothri Vidyalaya School located in Bengaluru, India. Providing quality education and holistic development for students.",
  keywords: [
    "Gnana Gangothri Vidyalaya",
    "school in Bengaluru",
    "best school Bengaluru",
    "quality education",
  ],
  alternates: {
    canonical: "https://gnanagangothrividyalaya.in/",
  },
  openGraph: {
    title: "Gnana Gangothri Vidyalaya - Bengaluru",
    description:
      "Gnana Gangothri Vidyalaya School located in Bengaluru, India.",
    url: "https://gnanagangothrividyalaya.in/",
    siteName: "Gnana Gangothri Vidyalaya",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        alt: "Gnana Gangothri Vidyalaya Logo",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
     <PageClient />
    </>
  );
}
