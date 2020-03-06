import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .account-photo {
    width: 158px;
    height: 170px;
    text-align: center;
  }

  .top-account-subtitle {
    font-weight: bold;
    text-align: center;
  }

  form {
    width: 50%;
    margin: 0 auto;

    .label-account {
      font-size: 17px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      margin: 25px 0;
    }

    .input-account {
      width: 50%;
      font-size: 17px;
      font-weight: bold;
      border: none;
      border-bottom: 1px solid #70707069;
    }
  }
`;

class AccountInformation extends Component {
  state = {
    name: "admin",
    userName: "admin",
    accountEmail: "admin@localhost.com",
    location: "New York, USA"
  };

  render() {
    return (
      <Wrapper>
        <div className="top-account">
          <img className="account-photo" src={this.props.photo} alt="profile" />
          <p className="top-account-subtitle">Your profile picture</p>
        </div>
        <form>
          <label className="label-account">
            Name{" "}
            <input
              name="name"
              className="input-account"
              type="text"
              value={this.state.name}
            />
          </label>
          <label className="label-account">
            User Name{" "}
            <input
              name="userName"
              className="input-account"
              type="text"
              value={this.state.userName}
            />
          </label>
          <label className="label-account">
            Account Email{" "}
            <input
              name="accountEmail"
              className="input-account"
              type="text"
              value={this.state.accountEmail}
            />
          </label>
          <label className="label-account">
            Location{" "}
            <input
              name="location"
              className="input-account"
              type="text"
              value={this.state.location}
            />
          </label>
        </form>
      </Wrapper>
    );
  }
}

export default AccountInformation;
