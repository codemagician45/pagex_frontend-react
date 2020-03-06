import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 98%;
  margin: 35px auto;
  border: 1px solid #00000029;
  border-radius: 8px;

  display: flex;
  z-index: 0;
  flex-direction: column;
  justify-content: space-between;
  background: #eef0fe;

  h4 {
    font-size: 1em;
  }

  .info-hour {
    color: #969ca2;
    font-size: 15px;
  }

  img {
    width: 54px;
    height: 54px;
  }

  .top-card {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #00000029;
    padding: 5px;
    background: #fff;
  }

  .info-top-card {
    margin: 0 0 0 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-content {
    padding: 15px;
  }

  .btn-content {
    position: relative;
  }

  .card-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
      padding: 15px;
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  svg {
    margin: 25px 25px 0 0;
    cursor: pointer;

    :hover {
      color: #59ddff;
    }
  }
`;

class CardModal extends Component {
  render() {
    return (
      <Wrapper>
        <div className="top-card">
          <img src={this.props.photo} alt="profile" />
          <div className="info-top-card">
            <div>
              <h4>{this.props.user}</h4>
              <p className="info-hour">Il y a {this.props.hour} heures</p>
            </div>
          </div>
        </div>
        <p className="card-content">{this.props.content}</p>
      </Wrapper>
    );
  }
}

export default CardModal;
