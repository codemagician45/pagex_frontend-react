import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AccountInformation from "./SettingProfileItem/AccountInformation";

import Brian from "../../image/brian.png";

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  z-index: 13;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .modal-setting-profile {
    width: 70%;
    height: 550px;
    margin: 25px auto;
    background: #fff;
    z-index: 13;
    position: absolute;
    top: 1%;
    right: 15%;
    box-shadow: 0px 3px 30px #00000029;
    border-radius: 20px;
    color: #000;
  }

  .modal-setting-title {
    width: 95%;
    font-size: 20px;
    padding: 30px 30px;
    text-align: left;
    border-bottom: 1px solid #70707069;
  }

  .modal-setting-flex {
    display: flex;
  }

  .menu-right {
    padding: 30px;
    background: #f1f1f1;
    height: 400px;
    border-right: 1px solid #70707069;
  }

  .menu-right-block {
    margin-bottom: 37px;
  }

  .menu-right-subtitle {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 27px;
  }

  .menu-right-item {
    display: block;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 15px;

    :hover {
      color: #59deff;
    }
  }

  .modal-block-left {
    width: 100%;
  }

  .btn-close {
    display: block;
    position: absolute;
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
  }
`;

class SettingProfile extends Component {
  state = {
    photoProfile: Brian
  };
  render() {
    return (
      <Wrapper>
        <div className="modal-setting-profile">
          <h3 className="modal-setting-title">Settings and privacy</h3>
          <div className="modal-setting-flex">
            <div className="menu-right">
              <div className="menu-right-block">
                <p className="menu-right-subtitle">General settings</p>
                <Link className="menu-right-item">Account informations</Link>
                <Link className="menu-right-item">Privacy and security</Link>
                <Link className="menu-right-item">Notifications</Link>
                <Link className="menu-right-item">About The Page X</Link>
              </div>
              <div className="menu-right-block">
                <p className="menu-right-subtitle">Preferences</p>
                <Link className="menu-right-item">Display</Link>
                <Link className="menu-right-item">
                  content and feed preferences
                </Link>
                <Link className="menu-right-item">Accessibility</Link>
              </div>
            </div>
            <div className="modal-block-left">
              <AccountInformation photo={this.state.photoProfile} />
            </div>
          </div>
          <Link className="btn-close" onClick={this.props.close}>
            X
          </Link>
        </div>
      </Wrapper>
    );
  }
}

export default SettingProfile;
