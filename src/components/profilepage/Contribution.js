import React, { Component } from "react";
import styled from "styled-components";
import CardFil from "../card/CardFil";

class Contribution extends Component {
  render() {
    return (
      <div>
        {this.props.contribution.map(item => {
          return (
            <CardFil
              key={item.id}
              id={item.id}
              photo={item.photo}
              user={item.user}
              hour={item.hour}
              content={item.content}
            />
          );
        })}
      </div>
    );
  }
}

export default Contribution;
