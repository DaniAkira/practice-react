import React from "react";
import { MainNav } from "../../MainNav/script";

export const HUBBxLIMP = () => (
    <body>
        <nav className="second-nav">
            <li className="second-nav-li"><a href="#1-3">1-3</a></li>
            <li className="second-nav-li"><a href="#4-5">4-5</a></li>
            <li className="second-nav-li"><a href="#6-7">6-7</a></li>
            <li className="second-nav-li"><a href="#8-9">8-9</a></li>
            <li className="second-nav-li"><a href="#10-11">10-11</a></li>
            <li className="second-nav-li"><a href="#12-15">12-15</a></li>
            <li className="second-nav-li"><a href="#16-20">16-20</a></li>
            <li className="second-nav-li"><a href="#21+">21+</a></li>
        </nav>
        <div className="nav-section">
            <MainNav />
        </div>
        <div className="images-section">
            <h1 className="tittle">HU BB x Limp</h1>
            <img src="assets/hu bb vs limp/3-1.png" id="1-3"></img>
            <img src="assets/hu bb vs limp/5-4.png" id="4-5"></img>
            <img src="assets/hu bb vs limp/7-6.png" id="6-7"></img>
            <img src="assets/hu bb vs limp/9-8.png" id="8-9"></img>
            <img src="assets/hu bb vs limp/11-10.png" id="10-11"></img>
            <img src="assets/hu bb vs limp/15-12.png" id="12-15"></img>
            <img src="assets/hu bb vs limp/20-16.png" id="16-20"></img>
            <img src="assets/hu bb vs limp/21+.png" id="21+"></img>
            <div className="white-section"></div>
        </div>
    </body>
)
