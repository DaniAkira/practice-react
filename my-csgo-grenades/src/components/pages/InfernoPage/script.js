import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"
import { MapMainSection } from "../../MapMainSection/script";

export const InfernoPage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "INFERNO"
            imgMapSrc = 'assets/inferno-shadow.jpg'
            logoMapSrc = 'assets/inferno-logo.png'
        />
        <MapMainSection />
        <Footer />
    </body>
)