import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script";
import { MapMainSection } from "../../MapMainSection/script";
import { MapMainAbout } from "../../MapMainAbout/script";

export const OverpassPage = () => (
  <body>
    <Header />
    <MapBannerSection
      name="OVERPASS"
      imgMapSrc="assets/overpass-shadow.jpg"
      logoMapSrc="assets/overpass-logo.png"
    />
    <MapMainAbout />
    <MapMainSection map="overpass" />
    <Footer />
  </body>
);
