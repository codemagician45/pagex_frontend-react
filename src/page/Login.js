import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { loginUserAction } from '../store/actions/LoginAction/LoginUserAction';

const customNotification = require('../Utils/notification');

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn-token {
    text-decoration: none;
    color: #fff;
    width: 30%;
    height: 50px;
    background: #111;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
  }

  form {
    height: 250px;
    width: 60%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  label {
    display: block;

    input {
      width: 100%;
      height: 35px;
      border: 1px solid #111;
      border-radius: 5px;
      padding: 0 5px;
    }
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let validateEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

    if (this.state.emai === "" || this.state.fullname === "") {
      customNotification.fireNotification("warning", "All fields are required") 
      return false;
    } else if (!validateEmail.test(this.state.email)) {
      customNotification.fireNotification("warning", "Email not valid")
    } else {
      // Login user
      let data = {
        data: {
          email: this.state.email,
          password: this.state.password
        }
      }

      this.props.onloginUserAction(data);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps.loginUser :", nextProps, nextProps.loginUser.code)

    if (nextProps.loginUser != undefined) {
      if (nextProps.loginUser && nextProps.loginUser.data && nextProps.loginUser.code === 200) {
        // customNotification.fireNotification("success", "LogedIn")
        // @TODO PUSH LOCATION IN HISTORY
        window.location.href = "/home";
      } else {
        customNotification.fireNotification("error", "Password and/or email not correct")
      }
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
          <label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
          <Link to="/signup/"> Sign up here </Link>
          <button onClick={this.handleSubmit} className="btn-token">Valider</button>
        </form>
      </Wrapper>
    );
  }
}

const state = (state, ownProps = {}) => {
  return {
    loginUser: state.loginUser.data,
    location: state.location,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navigateTo: (location) => {
      dispatch(push(location));
    },
    onloginUserAction: (data) => dispatch(loginUserAction(data))
  }
};

export default connect(state, mapDispatchToProps)(Login);
