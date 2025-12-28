'use client'

import Achievement from "./components/section/Achievement";
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

export default function PageClient() {
  return (
    <>
      <SchoolLoader />

      <main id="main-content">
        <section  id="home "><Home /></section>
        <section className="min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3" id="achievement"><Achievement /></section>
        <section  id="stats"><StatsSection /> </section>
          {/* <section  id="timeline"><TimelineSection /></section> */}
        <section   id="programs"><Programs /></section>
        {/* <section id="choose"><Choose /></section> */}
        {/* <section id="events"><EventSection /></section> */}
     
        <section   id="teachers"><TeachersSection /></section>
        <section   id="faq"><Fqa /></section>
        <section id="contact"><ContactSection /></section>
      </main>
    </>
  )
}
