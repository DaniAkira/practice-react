import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"
import { MapMainSection } from "../../MapMainSection/script";
import { MapMainAbout } from "../../MapMainAbout/script";

export const NukePage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "NUKE"
            imgMapSrc = 'assets/nuke-shadow.jpg'
            logoMapSrc = 'assets/nuke-logo.png'
        />
        <MapMainAbout />
        <MapMainSection 
        map = 'nuke'
        />
        <Footer />
    </body>
)