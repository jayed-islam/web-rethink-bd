import React from "react";
import HomeHeroSection from "../home-hero-section";
import HomeImportantLinkAndESheba from "../home-important-link-and-e-sheba";
import HomeEmergencyHotlineSection from "../home-emergency-hotline-section";
import HomeNationalAnthemAndInnovation from "../home-national-athem-innovation";
import HomeSection from "../home-sections-view";

const HomeView = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeImportantLinkAndESheba />
      <HomeSection />
      <HomeEmergencyHotlineSection />
      <HomeNationalAnthemAndInnovation />
    </div>
  );
};

export default HomeView;
