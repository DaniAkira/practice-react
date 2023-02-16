import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script";
import { MapMainSection } from "../../MapMainSection/script";
import { MapMainAbout } from "../../MapMainAbout/script";

export const MiragePage = () => (
  <body>
    <Header />
    <MapBannerSection
      name="MIRAGE"
      imgMapSrc="assets/mirage-shadow.jpg"
      logoMapSrc="assets/mirage-logo.png"
    />
    <MapMainAbout />
    <MapMainSection
      map="mirage"
    />
    <Footer />
  </body>
);
