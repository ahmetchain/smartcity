import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import EventDetails from "../Components/EventDetails";
import Agenda from "../Components/Agenda";
import IdeathonOverview from "../Components/IdeathonOverview";
import Speakers from "../Components/Speakers";
import Sponsors from "../Components/Sponsors";
import Footer from "../Components/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <EventDetails />
      <Agenda />
      <IdeathonOverview />
      <Speakers />
      <Sponsors />
      <Footer />
    </>
  );
}
