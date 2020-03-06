import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 10%;

  .card-audience-photo {
    max-width: 100%;
    height: auto;
  }
  h6 {
    width: 100%;
    text-align: center;
  }
`;

class CardAudience extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <img
            className="card-audience-photo"
            src={this.props.photo}
            alt="profile"
          />
        </div>
        <h6>{this.props.user}</h6>
      </Wrapper>
    );
  }
}

export default CardAudience;
