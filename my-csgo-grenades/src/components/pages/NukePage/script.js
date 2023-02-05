import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"

export const NukePage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "Nuke"
            imgMapSrc = 'assets/nuke-shadow.jpg'
            logoMapSrc = 'assets/nuke-logo.png'
        />
        <Footer />
    </body>
)