
import Achievement from "./components/Achievement";
import Facilities from "./components/Facilities";
import Home from "./components/Home";
import SchoolLoader from "./components/ui/Loader";



export const metadata = {
  title: "Gnana Gangothri Vidyalaya",
  description:
    "Gnana Gangothri Vidyalaya School located in bangluru, India. Providing quality education and holistic development for students.",
  keywords: [
    "Gnana Gangothri Vidyalaya",
    "Gnana Gangothri Vidyalaya bangluru",
    "Gnana Gangothri Vidyalaya school",
    "education in bangluru",
    "holistic development",
    "quality education",
    "school in bangluru",
    "best school bangluru",
    "Gnana Gangothri Vidyalaya admissions",
    "Gnana Gangothri Vidyalaya contact",
  ],
  alternates: {
    canonical: "",
  },
  openGraph: {
    title: "Gnana Gangothri Vidyalaya - bangluru",
    description:
      "Gnana Gangothri Vidyalaya School located in bangluru, India. Providing quality education and holistic development for students.",
    url: "https://gnanagangothrividyalaya.in/",
    type: "website",
    siteName: "Gnana Gangothri Vidyalaya",
    type: "website",
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
  
  return (<>
  <SchoolLoader />
<Home />
<Achievement />
{/* <Facilities /> */}

</>
  );
}
