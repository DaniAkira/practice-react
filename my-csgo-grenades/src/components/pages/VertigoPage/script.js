import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"

export const VertigoPage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "Vertigo"
            imgMapSrc = 'assets/vertigo-shadow.jpg'
            logoMapSrc = 'assets/vertigo-logo.png'
        />
        <Footer />
    </body>
)