import Facilities from "./components/Facilities";
import Home from "./components/Home";


export const metadata = {
  title: "sarsvati vidhayalay school - kamlapur",
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
  alternates: {
    canonical: "",
  },
  openGraph: {
    title: "sarsvati vidhayalay school - kamlapur",
    description:
      "Sarsvati Vidhayalay School located in Kamlapur, Surendranagar, Gujarat. Providing quality education and holistic development for students.",
    url: "",
    siteName: "sarsvati vidhayalay school",
    type: "website",
    images: [
      {
        url: "/image/logo.png",
        width: 1200,
        height: 630,
        
        alt: "Sarsvati Vidhayalay Logo",
      },
    ],
  },
};

export default function Page() {
  
  return (<>
<Home />
<Facilities />
</>
  );
}
