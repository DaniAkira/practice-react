import React from "react";
import { Header } from "../../Header/script";
import { Footer } from "../../Footer/script";
import { MapBannerSection } from "../../MapBannerSection/script"

export const MiragePage = () => (
    <body>
        <Header />
        <MapBannerSection 
            name = "Mirage"
            imgMapSrc = 'assets/mirage-shadow.jpg'
            logoMapSrc = 'assets/mirage-logo.png'
        />
        <Footer />
    </body>
)