import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"
import { MapMainSection } from "../../MapMainSection/script";

export const OverpassPage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "OVERPASS"
            imgMapSrc = 'assets/overpass-shadow.jpg'
            logoMapSrc = 'assets/overpass-logo.png'
        />
        <MapMainSection />
        <Footer />
    </body>
)