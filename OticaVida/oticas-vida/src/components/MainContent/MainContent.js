import React from "react";

import BannerSection from "./BannerSection/BannerSection";
import AboutSection from "./AboutSection/AboutSection";
import ProductsSection from "./ProductsSection/ProductsSection";
import ContactSection from "./ContactSection/ContactSection";

export default function MainContent() {
    return (
        <body>
            <BannerSection />
            <ProductsSection />
            <AboutSection />
            <ContactSection />
        </body>
    )
}