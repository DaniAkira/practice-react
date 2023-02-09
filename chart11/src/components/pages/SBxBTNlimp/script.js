import React from "react";
import { MainNav } from "../../MainNav/script";

export const SBxBTNlimp = () => (
    <body>
        <nav className="second-nav">
            <li className="second-nav-li"><a href="#1-13">1-13</a></li>
            <li className="second-nav-li"><a href="#13-17">13-17</a></li>
            <li className="second-nav-li"><a href="#18+">18+</a></li>
        </nav>
        <div className="nav-section">
            <MainNav />
        </div>
        <div className="images-section">
            <img src="assets/3w - sb x btn limp/13-1.png" id="1-13"></img>
            <img src="assets/3w - sb x btn limp/17-13.png" id="13-17"></img>
            <img src="assets/3w - sb x btn limp/18+.png" id="18+"></img>
            <div className="white-section"></div>
        </div>
    </body>
)