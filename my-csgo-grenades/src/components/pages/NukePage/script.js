import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"
import { MapMainSection } from "../../MapMainSection/script";

export const NukePage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "NUKE"
            imgMapSrc = 'assets/nuke-shadow.jpg'
            logoMapSrc = 'assets/nuke-logo.png'
        />
        <MapMainSection />
        <Footer />
    </body>
)