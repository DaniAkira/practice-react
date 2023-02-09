import React from "react";
import { MainNav } from "../../MainNav/script";

export const HUBBxMR = () => (
    <body>
        <nav className="second-nav">
            <li className="second-nav-li"><a href="#1-6">1-6</a></li>
            <li className="second-nav-li"><a href="#7-10">7-10</a></li>
            <li className="second-nav-li"><a href="#11-13">11-13</a></li>
            <li className="second-nav-li"><a href="#14-17">14-17</a></li>
            <li className="second-nav-li"><a href="#18-21">18-21</a></li>
            <li className="second-nav-li"><a href="#22+">22+</a></li>
        </nav>
        <div className="nav-section">
            <MainNav />
        </div>
        <div className="images-section">
            <h1 className="tittle">HU BB x MR</h1>
            <img src="assets/hu bb vs mr/6-1.png" id="1-6"></img>
            <img src="assets/hu bb vs mr/10-7.png" id="7-10"></img>
            <img src="assets/hu bb vs mr/13-11.png" id="11-13"></img>
            <img src="assets/hu bb vs mr/17-14.png" id="14-17"></img>
            <img src="assets/hu bb vs mr/21-18.png" id="18-21"></img>
            <img src="assets/hu bb vs mr/22+.png" id="22+"></img>
            <div className="white-section"></div>
        </div>
    </body>
)
