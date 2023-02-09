import React from "react";
import { MainNav } from "../../MainNav/script";

export const BBxBTN3x = () => (
    <body className="body-section">
        <nav className="second-nav">
            <li className="second-nav-li"><a href="#1-9">1-9</a></li>
            <li className="second-nav-li"><a href="#10-13">10-13</a></li>
            <li className="second-nav-li"><a href="#14-17">14-17</a></li>
            <li className="second-nav-li"><a href="#18+">18+</a></li>
        </nav>
        <div className="nav-section">
            <MainNav />
        </div>
        <div className="images-section">
            <img src="assets/3w-bbxbtn3x/9-1.png" id="1-9"></img>
            <img src="assets/3w-bbxbtn3x/13-10.png" id="10-13"></img>
            <img src="assets/3w-bbxbtn3x/17-14.png" id="14-17"></img>
            <img src="assets/3w-bbxbtn3x/18+.png" id="18+"></img>
            <div className="white-section"></div>
        </div>
    </body>
)