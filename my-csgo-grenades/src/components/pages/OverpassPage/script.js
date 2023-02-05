import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"

export const OverpassPage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "Overpass"
            imgMapSrc = 'assets/overpass-shadow.jpg'
            logoMapSrc = 'assets/overpass-logo.png'
        />
        <Footer />
    </body>
)