import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script";
import { MapMainSection } from "../../MapMainSection/script";
import { MapMainAbout } from "../../MapMainAbout/script";

export const AncientPage = () => (
  <body>
    <Header />
    <MapBannerSection
      name="ANCIENT"
      imgMapSrc="assets/ancient-shadow.jpg"
      logoMapSrc="assets/ancient-logo.png"
    />
    <MapMainAbout />
    <MapMainSection map="ancient" />
    <Footer />
  </body>
);
