import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Link } from "react-router-dom";
import { codeValidateAction } from '../../store/actions/SignupAction/CodeValidationAction';

const customNotification = require('../../Utils/notification');

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  label {
    width: 80%;
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
    width: 80%;
  }
`;

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeValidation: ""
    }

    this.handleValidateCode = this.handleValidateCode.bind(this);
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

  handleValidateCode(e) {
    e.preventDefault();

    const { codeValidation } = this.state;

    if (codeValidation === "")
      customNotification.fireNotification("warning", "All fields are required")
    else {
      // Check code if it is valid
      let data = {
        data: {
          id: this.props.accountVerifData.data.data.id,
          validationCode: this.state.codeValidation
        }
      }
      this.props.onCodeValidateAction(data)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.codeIsValid != undefined) {
      if (nextProps.codeIsValid && nextProps.codeIsValid.data && nextProps.codeIsValid.code === 200) {
        setTimeout(() => {
          
          this.props.userInfo.id = this.props.accountVerifData.data.data.id;
          this.props.userInfo.validationCode = this.state.codeValidation;
          document.getElementById('next').click();
        }, 200)
      } else {
        customNotification.fireNotification("warning", nextProps.codeIsValid.data.msg)
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <form>
          <label>
            Please enter the verification code we sent you via email
          </label>
          <input type="text" name="codeValidation" onChange={this.handleChange} />
          <input
            className="btn-next"
            type="button"
            value="Next"
            onClick={this.handleValidateCode}
          />
          <input
            className="hidenField"
            id="next"
            type="button"
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
    onCodeValidateAction: (data) => dispatch(codeValidateAction(data)),
  }
};

export default connect(state, mapDispatchToProps)(StepTwo);
