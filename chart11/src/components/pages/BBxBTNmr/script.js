import React from "react";
import { MainNav } from "../../MainNav/script";

export const BBxBTNmr = () => (
    <body>
        <nav className="second-nav">
            <li className="second-nav-li"><a href="#1-9">1-9</a></li>
            <li className="second-nav-li"><a href="#10-14">10-14</a></li>
            <li className="second-nav-li"><a href="#15-20">15-20</a></li>
            <li className="second-nav-li"><a href="#21+">21+</a></li>
        </nav>
        <div className="nav-section">
            <MainNav />
        </div>
        <div className="images-section">
            <h1 className="tittle">3W BB x BTN MR</h1>
            <img src="assets/3w bb x btn mr/9-1.png" id="1-9"></img>
            <img src="assets/3w bb x btn mr/14-10.png" id="10-14"></img>
            <img src="assets/3w bb x btn mr/20-15.png" id="15-20"></img>
            <img src="assets/3w bb x btn mr/21+.png" id="21+"></img>
            <div className="white-section"></div>
        </div>
    </body>
)