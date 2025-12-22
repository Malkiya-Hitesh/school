import Achievement from "./components/Achievement";
import Choose from "./components/Choose";
import ContactSection from "./components/ContactSection";
import EventSection from "./components/Event";
import Facilities from "./components/Facilities";
import Fqa from "./components/Fqa";
import Home from "./components/Home";
import Programs from "./components/Programs";
import Teachers from "./components/Teachers";

import SchoolLoader from "./components/ui/Loader";

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
      {/* Loader (temporary – later make state based) */}
      <SchoolLoader />

      <main id="main-content">
        <section id="home">
          <Home />
        </section>

        <section id="achievement">
          <Achievement />
        </section>

        <section id="programs">
          <Programs />
        </section>

        <section id="choose">
          <Choose />
        </section>

        <section id="events">
          <EventSection />
        </section>

        <section id="teachers">
          <Teachers />
        </section>

        <section id="faq">
          <Fqa />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
