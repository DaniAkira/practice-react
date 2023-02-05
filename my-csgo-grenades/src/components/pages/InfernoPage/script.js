import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"

export const InfernoPage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "Inferno"
            imgMapSrc = 'assets/inferno-shadow.jpg'
            logoMapSrc = 'assets/inferno-logo.png'
        />
        <Footer />
    </body>
)