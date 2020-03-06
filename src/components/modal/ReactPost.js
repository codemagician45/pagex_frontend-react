import React, { Component } from "react";
import styled from "styled-components";

import brian from "../../image/brian.png";
import clara from "../../image/clara.png";

import Attach from "../../image/icone/attach.svg";

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  z-index: 13;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .modal-react {
    width: 60%;
    height: 380px;
    margin: 25px auto;
    background: #fff;
    z-index: 13;
    position: absolute;
    top: 1%;
    right: 25%;
    box-shadow: 0px 3px 30px #00000029;
    border-radius: 20px;
    color: #000;
  }

  .modal-react-top {
    width: 95%;
    padding: 15px;
    border-bottom: 1px solid #00000026;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-react-title {
    font-size: 17px;
  }

  .btn-close {
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    border-radius: 25px;
    top: 5%;
    right: 2%;
    font-size: 15px;
    color: #59deff;
    border: 1px solid #59deff;
    cursor: pointer;
  }

  img {
    display: block;
    width: 40px;
    height: 40px;
  }

  p {
    padding: 1px;
    height: 36px;
    line-height: 36px;
    margin: 0 5px;
    color: #8c8787;
    text-align: center;
  }

  .modal-react-people {
    padding: 15px;
  }

  .modal-group-img {
    display: flex;
  }

  .modal-react-form {
    width: 95%;
    height: 141px;
    margin: 15px auto;
    background: #f1f1f1;
    border-radius: 10px;
  }

  .input-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    border-radius: 10px;

    img {
      width: 70px;
      height: 70px;
    }
  }

  .input-form-item-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80%;
  }

  .input-form-item-2 {
    display: flex;
    align-items: center;
    padding: 5px;
    justify-content: space-between;
    border-top: 1px solid #00000026;
    height: 20%;
  }

  .input-react {
    border: none;
    width: 100%;
    height: 60%;
    background: #f1f1f1;
  }

  .input-tags {
    border: none;
    padding: 5px;
    border-right: 1px solid #00000026;
    width: 100%;
    height: 90%;
    background: #f1f1f1;
  }

  .attach {
    width: 22px;
    height: 22px;
  }
`;

class ReactPost extends Component {
  render() {
    return (
      <Wrapper>
        <div className="modal-react">
          <div className="modal-react-top">
            <h1 className="modal-react-title">React to this work</h1>
            <div className="btn-close" onClick={this.props.cache}>
              X
            </div>
          </div>
          <div className="modal-react-people">
            <div className="modal-group-img">
              <img src={brian} alt="profile" />
              <img src={clara} alt="profile" />
              <p>+42 other people</p>
            </div>
          </div>
          <div className="modal-react-form">
            <div className="input-form">
              <div className="input-form-item-1">
                <img src={brian} alt="profile" />
                <textarea
                  className="input-react"
                  placeholder="Write your thoughts ..."
                />
              </div>
              <div className="input-form-item-2">
                <input className="input-tags" placeholder="#Tags" />
                <img src={Attach} alt="attach" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default ReactPost;
