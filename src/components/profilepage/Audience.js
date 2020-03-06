import React, { Component } from "react";
import styled from "styled-components";
import CardAudience from "../card/CardAudience";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`;

class Audience extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.audience.map(item => {
          return (
            <CardAudience
              key={item.id}
              id={item.id}
              photo={item.photo}
              user={item.user}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default Audience;
