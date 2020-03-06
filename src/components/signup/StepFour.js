import React, { Component } from "react";
import styled from "styled-components";
import Masque from "../../image/icone/masques1.svg";
import { connect } from "react-redux";
import { push } from "react-router-redux";

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
  input[type="file"] {
    border: none;
    background: #f1f1f1;
    margin-top: 15px;
    border-radius: 5px;
  }
  .masque {
    height: 100px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f1f1;
    img {
      width: 50%;
      height: auto;
    }
  }
  h5 {
    margin-top: 10px;
  }
`;

class StepFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleValidatePhoto = this.handleValidatePhoto.bind(this)
  }

  handleValidatePhoto() {
    
    setTimeout(() => {
      this.props.userInfo.photo = this.state.photo;
    
      document.getElementById('next').click();
    }, 200)
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (target.type === "file") {
      this.setState({
        photo: target.files[0]
      });

    } else {
      this.setState({
        [name]: value
      });
    }
  }



  render() {
    return (
      <Wrapper>
        <form>
          <div className="masque">
            <img src={Masque} alt="masque" />
          </div>
          <input type="file" name="file" onChange={this.handleChange} />
          <h5>Please upload a profile picture</h5>
          <p>
            This step is mandatory in order to complete creating your profile.
          </p>
          <input
            className="btn-next"
            type="button"
            value="Next"
            onClick={this.handleValidatePhoto}
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


export default connect(state, mapDispatchToProps)(StepFour);
