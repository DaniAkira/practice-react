import React from "react";
import { MainNav } from "../../MainNav/script";

export const HomePage = () => (
    <body className="body-section">
        <nav className="second-nav">
            <li className="second-nav-li"><a href="#5">5</a></li>
            <li className="second-nav-li"><a href="#6">6</a></li>
            <li className="second-nav-li"><a href="#7">7</a></li>
            <li className="second-nav-li"><a href="#8">8</a></li>
            <li className="second-nav-li"><a href="#9">9</a></li>
            <li className="second-nav-li"><a href="#10">10</a></li>
            <li className="second-nav-li"><a href="#11-14">11-14</a></li>
            <li className="second-nav-li"><a href="#15">15</a></li>
            <li className="second-nav-li"><a href="#16-19">16-19</a></li>
            <li className="second-nav-li"><a href="#20+">20+</a></li>
        </nav>
        <div className="nav-section">
            <MainNav />
        </div>
        <div className="images-section">
            <h1 className="tittle">3W</h1>
            <img src="assets/3w/5.png" id="5"></img>
            <img src="assets/3w/6.png" id="6"></img>
            <img src="assets/3w/7.png" id="7"></img>
            <img src="assets/3w/8.png" id="8"></img>
            <img src="assets/3w/9.png" id="9"></img>
            <img src="assets/3w/10.png" id="10"></img>
            <img src="assets/3w/14-11.png" id="11-14"></img>
            <img src="assets/3w/15.png" id="15"></img>
            <img src="assets/3w/19-16.png" id="16-19"></img>
            <img src="assets/3w/20bb.png" id="20+"></img>
            <div className="white-section"></div>
        </div>
    </body>
)