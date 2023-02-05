import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"

export const AnubisPage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "Anubis"
            imgMapSrc = 'assets/anubis-shadow.jpg'
            logoMapSrc = 'assets/anubis-logo.png'
        />
        <Footer />
    </body>
)