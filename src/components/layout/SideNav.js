import React, { Component } from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Nav = styled.div`
  margin: 0 5px;
  width: 15%;
  height: 100vh;
  background: #8c8c8c0d;
  box-shadow: 0px 3px 35px #00000021;
  border-radius: 15px;
  left: 0;

  h1 {
    margin: 50px 0 0 15px;
    font-size: 22px;
  }

  span {
    color: #fff;
    background: #000;
    border-radius: 3px;
    margin: 0 1px;
    padding: 3px;
  }

  .X {
    margin-left: 15px;
  }

  ul {
    margin: 80px 0 0 25px;
  }

  li {
    font: bold 18px Poppins;
    text-align: left;
    margin: 25px 0;

    a:hover {
      color: #23d3ff;
    }
  }
`;

class SideNav extends Component {
  render() {
    return (
      <Nav>
        <h1>
          <NavLink to="/home/">
            <span>P</span>
            <span>A</span>
            <span>G</span>
            <span>E</span>
            <span className="X">X</span>
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink activeStyle={{ color: "#23d3ff" }} to="/home/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "#23d3ff" }} to="/journals/">
              Journals
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "#23d3ff" }} to="/notifications/">
              Notifications
            </NavLink>
          </li>
        </ul>
      </Nav>
    );
  }
}

export default SideNav;
