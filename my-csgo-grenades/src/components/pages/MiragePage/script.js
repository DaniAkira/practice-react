import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"
import { MapMainSection } from "../../MapMainSection/script";

export const MiragePage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "MIRAGE"
            imgMapSrc = 'assets/mirage-shadow.jpg'
            logoMapSrc = 'assets/mirage-logo.png'
        />
        <MapMainSection />
        <Footer />
    </body>
)