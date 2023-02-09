import React from "react";
import { MainNav } from "../../MainNav/script";
import '../../../App.css';

export const BBxBTNlimp = () => (
    <body className="body-section">
        <nav className="second-nav">
            <li className="second-nav-li"><a href="#1-14">1-14</a></li>
            <li className="second-nav-li"><a href="#15-19">15-19</a></li>
            <li className="second-nav-li"><a href="#20+">20+</a></li>
        </nav>
        <div className="nav-section">
            <MainNav />
        </div>
        <div className="images-section">
            <h1 className="tittle">3W BB x BTN Limp</h1>
            <img src="assets/3w bb x btn limp/14-1.png" id="1-14"></img>
            <img src="assets/3w bb x btn limp/19-15.png" id="15-19"></img>
            <img src="assets/3w bb x btn limp/20+.png" id="20+"></img>
            <div className="white-section"></div>
        </div>
    </body>
)
