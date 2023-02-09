import React from "react";
import { MainNav } from "../../MainNav/script";

export const BBxSBmr = () => (
    <body>
        <nav className="second-nav">
            <li className="second-nav-li"><a href="#1-9">1-9</a></li>
            <li className="second-nav-li"><a href="#10-12">10-12</a></li>
            <li className="second-nav-li"><a href="#13-15">13-15</a></li>
            <li className="second-nav-li"><a href="#16-20">16-20</a></li>
            <li className="second-nav-li"><a href="#21+">21+</a></li>
        </nav>
        <div className="nav-section">
            <MainNav 
                currentPage='current-page'
            />
        </div>
        <div className="images-section">
            <h1 className="tittle">3W BB x SB MR</h1>
            <img src="assets/3w bb x sb mr/9-1.png" id="1-9"></img>
            <img src="assets/3w bb x sb mr/12-10.png" id="10-12"></img>
            <img src="assets/3w bb x sb mr/15-13.png" id="13-15"></img>
            <img src="assets/3w bb x sb mr/20-16.png" id="16-20"></img>
            <img src="assets/3w bb x sb mr/21+.png" id="21+"></img>
            <div className="white-section"></div>
        </div>
    </body>
)
