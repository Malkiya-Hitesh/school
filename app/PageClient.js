'use client'

import Achievement from "./components/section/HomeAbout";
import EventSection from "./components/section/Event";
import Home from "./components/section/Home";
import Programs from "./components/section/Programs";
import SchoolLoader from "./components/ui/Loader";
import Fqa from "./components/section/Fqa";
import ContactSection from "./components/section/ContactSection";
import TeachersSection from "./components/section/Teachers";
import Choose from "./components/section/Choose";
import StatsSection from "./components/section/StatsSection";
import TimelineSection from "./about/components/TimelineSection";
import Admission from "./components/Admission";
import HomeAbout from "./components/section/HomeAbout";
import WhyC from "./components/section/WhyC";
import Facilities from "./components/section/Facilities";

export default function PageClient() {
  return (
    <>
      <SchoolLoader />

      <main id="main-content">
        <section id="home "><Home /></section>
        <section id="about"><HomeAbout /></section>
        <section id="sats"><StatsSection /> </section>
        <section id="timeline"><TimelineSection /></section>
        <section id="why" > <WhyC /> </section>
        <section id="facilities"> <Facilities /></section>
        <section id="programs"><Programs /></section>
        {/* <section id="choose"><Choose /></section> */}
        <section id="events"><EventSection /></section>
  
        <section id="teachers"><TeachersSection /></section>
        <section id="faq"><Fqa /></section>
        <section id="contact"><ContactSection /></section>
      </main>
    </>
  )
}
