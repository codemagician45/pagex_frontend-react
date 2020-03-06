import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 150px;
  height: 70px;
  background: #fff;
  z-index: 7;
  position: absolute;
  top: 100%;
  right: -80%;
  box-shadow: 0px 3px 30px #59deff80;
  color: #111;

  ::before {
    content: "";
    position: absolute;
    bottom: 100%;
    border-bottom: 15px solid #fff;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    left: calc(50% - 15px);
  }

  .link-down-content {
    text-align: center;
    font-size: 13px;
    margin: 10px 0;
    font-weight: bold;
    cursor: pointer;

    :hover {
      color: #59ddff;
    }
  }
`;

class DownContent extends Component {
  render() {
    return (
      <Wrapper>
        <div className="link-down-content">Show Less</div>
        <div className="link-down-content">Unsubscribe</div>
      </Wrapper>
    );
  }
}

export default DownContent;
