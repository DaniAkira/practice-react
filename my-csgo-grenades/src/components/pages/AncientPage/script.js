import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"

export const AncientPage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "Ancient"
            imgMapSrc = 'assets/ancient-shadow.jpg'
            logoMapSrc = 'assets/ancient-logo.png'
        />
        <Footer />
    </body>
)