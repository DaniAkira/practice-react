import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script";
import { MapMainSection } from "../../MapMainSection/script";
import { MapMainAbout } from "../../MapMainAbout/script";

export const VertigoPage = () => (
  <body>
    <Header />
    <MapBannerSection
      name="VERTIGO"
      imgMapSrc="assets/vertigo-shadow.jpg"
      logoMapSrc="assets/vertigo-logo.png"
    />
    <MapMainAbout />
    <MapMainSection map="vertigo" />
    <Footer />
  </body>
);
