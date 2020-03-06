import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "react-router-redux";
const customNotification = require('../../Utils/notification');


const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  label {
    width: 60%;
    margin: 15px 0;
    font-weight: bold;
  }
  .hidenField {
    display: none;
  }
  input[type="password"] {
    border: none;
    background: #f1f1f1;
    height: 30px;
    border-radius: 5px;
    width: 60%;
  }
  p {
    text-align: center;
    a {
      font-weight: bold;
    }
  }
`;

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confPassword: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleValidatePwd = this.handleValidatePwd.bind(this);
  }

  handleValidatePwd() {
    const { password, confPassword } = this.state;

    if (password === "" || confPassword === "") {
      customNotification.fireNotification("warning", "All fields are required")
    } else if (password.length < 8) {
      customNotification.fireNotification("warning", "Password length must be more than 08 characters")
    } else if (password !== confPassword ) {
      customNotification.fireNotification("warning", "Passwords does not match")
    } else {
      // Store password and continu
      setTimeout(() => {
        this.props.userInfo.password = password;
        document.getElementById('next').click();
      }, 200)
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }



  render() {
    return (
      <Wrapper>
        <form>
          <label>Please set a password</label>
          <input type="password" name="password" onChange={this.handleChange} required />
          <label>Confirm your password</label>
          <input type="password" name="confPassword" onChange={this.handleChange} required />
          <input
            className="btn-next"
            type="button"
            onClick={this.handleValidatePwd}
            value="Next"
          />
          <input
            className="btn-next"
            type="button"
            id="next"
            className="hidenField"
            value="Next"
            onClick={this.props.next}
          />
          <input
            className="btn-back"
            type="button"
            value="Back"
            onClick={this.props.back}
          />
        </form>
      </Wrapper>
    );
  }
}

const state = (state, ownProps = {}) => {
  return {
    codeIsValid: state.codeIsValid.data,
    accountVerifData: state.accountVerifData.data,
    location: state.location,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navigateTo: (location) => {
      dispatch(push(location));
    },
  }
};

export default connect(state, mapDispatchToProps)(StepThree);