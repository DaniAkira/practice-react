import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"
import { MapMainSection } from "../../MapMainSection/script";
import { MapMainAbout } from "../../MapMainAbout/script";

export const AnubisPage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "ANUBIS"
            imgMapSrc = 'assets/anubis-shadow.jpg'
            logoMapSrc = 'assets/anubis-logo.png'
        />
        <MapMainAbout />
        <MapMainSection 
        map = 'anubis'
        />
        <Footer />
    </body>
)