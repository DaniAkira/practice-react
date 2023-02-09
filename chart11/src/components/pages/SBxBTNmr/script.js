import React from "react";
import { MainNav } from "../../MainNav/script";

export const SBxBTNmr = () => (
    <body>
        <nav className="second-nav">
            <li className="second-nav-li"><a href="#1-12">1-12</a></li>
            <li className="second-nav-li"><a href="#13-17">13-17</a></li>
            <li className="second-nav-li"><a href="#18+">18+</a></li>
        </nav>
        <div className="nav-section">
            <MainNav />
        </div>
        <div className="images-section">
            <h1 className="tittle">3W SB x BTN MR</h1>  
            <img src="assets/3w - sb x btn MR/12-1.png" id="1-12"></img>
            <img src="assets/3w - sb x btn MR/17-13.png" id="13-17"></img>
            <img src="assets/3w - sb x btn MR/18+.png" id="18+"></img>
            <div className="white-section"></div>
        </div>
    </body>
)



