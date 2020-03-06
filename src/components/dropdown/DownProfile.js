import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 201px;
  height: 254px;
  background: #fff;
  z-index: 55;
  position: absolute;
  top: 10%;
  right: 15%;
  box-shadow: 0px 3px 6px #59ddff87;
  color: #111;

  ul {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
  }

  li {
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 28px;

    a:hover {
      color: #59deff;
    }
  }
`;

class DownProfile extends Component {
  render() {
    return (
      <Wrapper>
        <ul>
          <li>
            <Link onClick={this.props.init}>Profile</Link>
          </li>
          <li>
            <Link to="/notifications/">Notifications</Link>
          </li>
          <li>
            <Link>Explore</Link>
          </li>
          <li>
            <Link>Settings and Privacy</Link>
          </li>
          <li>
            <Link>Log out</Link>
          </li>
        </ul>
      </Wrapper>
    );
  }
}

export default DownProfile;
