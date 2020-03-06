import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    border-bottom: 1px solid #00000029;
    width: 95%;
    margin: 0 auto;
  }
`;

class TopPage extends Component {
  render() {
    return (
      <Wrapper>
        <h1>{this.props.info}</h1>
      </Wrapper>
    );
  }
}

export default TopPage;
