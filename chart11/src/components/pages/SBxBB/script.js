import React from "react";
import { MainNav } from "../../MainNav/script";

export const SBxBB = () => (
    <body>
        <nav className="second-nav">
            <li className="second-nav-li"><a href="#1-6">1-6</a></li>
            <li className="second-nav-li"><a href="#7-8">7-8</a></li>
            <li className="second-nav-li"><a href="#9-10">9-10</a></li>
            <li className="second-nav-li"><a href="#11-13">11-13</a></li>
            <li className="second-nav-li"><a href="#14-15">14-15</a></li>
            <li className="second-nav-li"><a href="#16-17">16-17</a></li>
            <li className="second-nav-li"><a href="#18-20">18-20</a></li>
            <li className="second-nav-li"><a href="#21+">21+</a></li>
        </nav>
        <div className="nav-section">
            <MainNav />
        </div>
        <div className="images-section">
            <h1 className="tittle">3W SB x BB</h1>
            <img src="assets/3w - SB x BB/6-1.png" id="1-6"></img>
            <img src="assets/3w - SB x BB/7-8.png" id="7-8"></img>
            <img src="assets/3w - SB x BB/9-10.png" id="9-10"></img>
            <img src="assets/3w - SB x BB/13-11.png" id="11-13"></img>
            <img src="assets/3w - SB x BB/15-14.png" id="14-15"></img>
            <img src="assets/3w - SB x BB/17-16.png" id="16-17"></img>
            <img src="assets/3w - SB x BB/20-18.png" id="18-20"></img>
            <img src="assets/3w - SB x BB/21+.png" id="21+"></img>
            <div className="white-section"></div>
        </div>
    </body>
)