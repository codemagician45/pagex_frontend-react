import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  box-shadow: 0px 3px 20px #00000033;
  display: flex;
  justify-content: space-between;
  margin: 25px auto;

  img {
    width: 80px;
    height: 80px;
  }

  h4 {
    font-size: 1em;
  }

  .card-profile {
    display: flex;
    align-items: center;
  }

  .btn-card-profile {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 17px 0 0;

    button {
      width: 100px;
      height: 31px;
      border: none;
      background: #000000;
      color: #fff;
      box-shadow: 0px 3px 2px #00000029;
      font-size: 13px;
      border-radius: 21px;
    }
  }
`;

class CardProfile extends Component {
  render() {
    return (
      <Wrapper>
        <div className="card-profile">
          <img src={this.props.photo} alt="carte profile" />
          <div className="card-profil-info">
            <h4>{this.props.user}</h4>
            <p>{this.props.activite}</p>
          </div>
        </div>
        <div className="btn-card-profile">
          <button>Subscribe</button>
        </div>
      </Wrapper>
    );
  }
}

export default CardProfile;
