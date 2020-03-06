import React, { Component } from "react";
import styled from "styled-components";
import CardWorks from "../card/CardWorks";

class Works extends Component {
  render() {
    return (
      <div>
        {this.props.works.map(item => {
          return (
            <CardWorks
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              user={item.user}
              art={item.art}
            />
          );
        })}
      </div>
    );
  }
}

export default Works;
