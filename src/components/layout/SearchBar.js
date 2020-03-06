import React, { Component } from "react";
import styled from "styled-components";
import { Redirect, Link } from "react-router-dom";

import Create from "../../image/icone/createBtn.svg";
import Profile from "../../image/icone/profileBtn.svg";
import IconSearch from "../../image/icone/search.svg";

import DownProfile from "../dropdown/DownProfile";
import SettingProfile from "../modal/SettingProfile";

const Bar = styled.div`
  height: 100px;
  width: 100%;
  position: fixe;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;

  .bar {
    width: 60%;
    height: 100px;
    position: relative;

    img {
      position: absolute;
      margin-top: 30px;
      right: 0;
      top: 0;
    }
  }

  .input-search {
    width: 100%;
    height: 44px;
    border: none;
    border: 1px solid #70707069;
    border-radius: 20px;
    display: block;
    padding: 0 15px;
    margin: 20px;
    font-family: "Poppins";
    box-shadow: 0px 3px 35px #00000021;
  }

  .group-icone-search {
    display: flex;
    text-align: left;
    justify-content: center;
    width: 40%;

    .item-icone {
      width: 10%;
      margin: 0 10px;
    }
  }

  :active {
    border-radius: 20px;
  }
`;

class SearchBar extends Component {
  state = {
    search: "",
    actRedirect: false,
    downProfile: false,
    settingProfile: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeydown = event => {
    if (event.key === "Enter") {
      this.setState({ actRedirect: true });
    }
  };

  handleClick = event => {
    this.setState({ downProfile: !this.state.downProfile });
  };

  handleSettingProfile = () => {
    this.setState({
      settingProfile: !this.state.settingProfile,
      downProfile: false
    });
  };

  render() {
    const afficherDownProfile = this.state.downProfile;
    let dropdownProfile;

    if (afficherDownProfile) {
      dropdownProfile = <DownProfile init={this.handleSettingProfile} />;
    }

    let settingProfile;

    if (this.state.settingProfile) {
      settingProfile = <SettingProfile close={this.handleSettingProfile} />;
    }

    return (
      <Bar>
        <div className="bar">
          <input
            className="input-search"
            type="search"
            placeholder="Search"
            name="search"
            onChange={this.handleChange}
            onKeyPress={this.handleKeydown}
            value={this.state.search}
          />
          <img className="icone-search" src={IconSearch} alt="icone search" />
        </div>
        <ul className="group-icone-search">
          <li className="item-icone">
            <Link to="/">
              <img src={Create} alt="icone" />
            </Link>
          </li>
          <li className="item-icone">
            <Link onClick={this.handleClick}>
              <img src={Profile} alt="icone" />
            </Link>
          </li>
        </ul>
        {this.state.actRedirect ? (
          <Redirect push to={"/search/" + this.state.search} />
        ) : (
          ""
        )}
        {dropdownProfile}
        {settingProfile}
      </Bar>
    );
  }
}

export default SearchBar;
