import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { emailVerifficationAction } from '../../store/actions/SignupAction/ValidationCodeAction';
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
  input[type="text"] {
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

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  valdateFormData() {
    let validateEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

    if (this.state.emai === "" || this.state.fullname === "") {
      customNotification.fireNotification("warning", "All fields are required")
      return false;
    } else if (!validateEmail.test(this.state.email)) {
      customNotification.fireNotification("warning", "Email not valid")
      return false;
    }
    return true;
  }

  async handleNext(e) {
    e.preventDefault();

    if (this.valdateFormData()) {
      //Send an email with validation code
      let data = {
        data: {
          email: this.state.email,
          fullname: this.state.fullname
        }
      }

      await this.props.onEmailVerifficationAction(data);
    } else
      return false;
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.accountVerifData !== undefined)
      if (nextProps.accountVerifData && nextProps.accountVerifData.data.code === 200) {
        setTimeout(() => {

          this.props.userInfo.fullname = this.state.fullname;
          this.props.userInfo.email = this.state.email;
          document.getElementById('next').click();
        }, 200)
      } else {
        customNotification.fireNotification("warning", nextProps.accountVerifData.data.msg)
      }
  }

  render() {
    return (
      <Wrapper>
        <form>
          <label>First ans last Name</label>
          <input type="text" name="fullname" onChange={this.handleChange} required />
          <label>Email address</label>
          <input type="text" name="email" onChange={this.handleChange} required />
          <input
            className="btn-next"
            type="button"
            value="Next"
            onClick={(e) => { this.handleNext(e) }}
          />
          <div className="hidenField" id="next" onClick={this.props.next}></div>
        </form>
        <p>
          By signing in, you agree to our <Link>terms of use</Link>, our privacy
          policy and <Link>use of cookies</Link>.
        </p>
      </Wrapper>
    );
  }
}



const state = (state, ownProps = {}) => {
  return {
    location: state.location,
    accountVerifData: state.accountVerifData.data
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navigateTo: (location) => {
      dispatch(push(location));
    },
    onEmailVerifficationAction: (data) => dispatch(emailVerifficationAction(data)),
  }
};

export default connect(state, mapDispatchToProps)(StepOne);
