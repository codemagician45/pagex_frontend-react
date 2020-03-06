import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 25px auto;
  border-bottom: 1px solid #00000029;

  img {
    width: 67px;
    height: 63px;
  }

  .notif-card {
    display: flex;
    width: 60%;
    align-items: center;

    span {
      text-decoration: underline;
    }

    h4 {
      margin: 0 25px 0 15px;
      font-size: 1em;
    }
  }

  .notif-info {
    text-align: right;
    line-height: 75px;
    width: 40%;
  }
`;

class CardNotification extends Component {
  render() {
    return (
      <Wrapper>
        <div className="notif-card">
          <img src={this.props.photo} alt="profile notification" />
          <h4>{this.props.user}</h4>
          <p>
            <span>{this.props.type}</span> {" to your "}
            <span> {this.props.origin}</span>
          </p>
        </div>
        <p className="notif-info">{this.props.hour + " hours ago"}</p>
      </Wrapper>
    );
  }
}

export default CardNotification;
