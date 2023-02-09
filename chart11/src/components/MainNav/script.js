import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';


export const MainNav = () => { 
  let activeStyle = {
    backgroundColor: "#8d8da1",
    color: "#f7f7f7"
  };
  
return(
  <nav className="main-nav">
    <li>
      <NavLink 
        className="link-nav" 
        to="/"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav"
        to="/BBxBTN3x"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W- BB x BTN 3x
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/BBxBTNallin"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W - BB x BTN ALL IN 
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/SBxBB"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W - SB x BB
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/SBxBTNallin"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W - SB X BTN ALL IN
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/SBxBTNlimp"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W - SB x BTN LIMP
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/SBxBTNmr"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W - SB x BTN MR
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/BBxBTNlimp"
        style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
      >
        3W BB x BTN LIMP
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/BBxBTNmr"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W BB x BTN MR
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/BBxBTNxSBallin"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W BB x BTN x SB ALL IN
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/BBxLIMP2p"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W BB x LIMP 2P
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/BBxMR2p"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W BB x MR 2P
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/BBxSBallin"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        3W BB x SB ALL IN
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/BBxSBlimp"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
        >
        3W BB x SB LIMP
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/BBxSBmr"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
        >
        3W BB x SB MR
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/HUBBxLIMP"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        HU BB x LIMP
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/HUBBxMR"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
        >
        HU BB x MR
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/HUBBx3X"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
      >
        HU BB x 3x
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/HUBBxAllin"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
        >
        HU BB x ALL IN
      </NavLink>
    </li>
    <li>
      <NavLink 
        className="link-nav" 
        to="/HUSB"
        style={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
        >
        HU SB
      </NavLink>
    </li>
  </nav>
)};
