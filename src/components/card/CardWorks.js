import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 50%;
  box-shadow: 0px 0px 6px #00000029;
  margin: 20px;
  .card-works-top {
    width: 100%;
    height: auto;
  }
  .card-works-img {
    max-width: 100%;
    height: auto;
  }
  .card-works-bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-works-list {
    font-weight: bold;
  }
  .card-works-link {
    color: grey;
    text-decoration: underline;
  }
`;

class CardWorks extends Component {
  render() {
    return (
      <Wrapper>
        <div className="card-works-top">
          <img
            className="card-works-img"
            src={this.props.image}
            alt="content preview"
          />
        </div>
        <div className="card-works-bottom ">
          <div className="card-works-list">
            <h4>{this.props.name}</h4>
            <h5>By {this.props.user}</h5>
            <h5>{this.props.art}</h5>
          </div>
          <div className="card-works-link ">
            <Link>Find out more</Link>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default CardWorks;
