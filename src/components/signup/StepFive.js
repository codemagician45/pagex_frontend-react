import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { getAllPassionsAction } from '../../store/actions/PassionActions/getAllPassionsAction';
import { signupNewUserAction } from '../../store/actions/SignupAction/SignupNewUserAction';
const createHistory = require("history").createBrowserHistory;

const customNotification = require('../../Utils/notification');

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  select {
    width: 40%;
    border: 0.5px solid #70707036;
    height: 30px;
    border-radius: 5px;
    font-weight: bold;

    option {
      font-weight: bold;
      :hover{
        background:#EBEBEB
        color:#111;
      }
    }
  }
`;

class StepFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passions: [],
      passion: "",
    }

    this.handleFinish = this.handleFinish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleFinish(e) {
    e.preventDefault();

    if (this.state.passion === "") {
      customNotification.fireNotification("warning", "You should choose a passion")
    } else {
      this.props.userInfo.passion = this.state.passion;
      console.log("this.props.userInfo :", this.props.userInfo);
      await this.props.onSignupNewUserAction(this.props.userInfo);
    }
  }

  componentWillMount() {
    this.props.onGetAllPassionsAction(0, 10);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.passionsList)
      if (nextProps.passionsList.data.data) {
        this.setState({ passions: nextProps.passionsList.data.data.data })
      }

    if (nextProps.signedUpUser !== undefined)
      if (nextProps.signedUpUser && nextProps.signedUpUser.data.code === 200) {
        customNotification.fireNotification("success", nextProps.signedUpUser.data.data.msg)
      } else {
        customNotification.fireNotification("warning", nextProps.signedUpUser.data.data.msg)
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

  goTologinPage(e) {
    e.preventDefault();
    let history = createHistory();
    history.push("/");
    let pathUrl = window.location.href;
    window.location.href = pathUrl;   
  }

  render() {
    const { passions } = this.state;

    return (
      <Wrapper>
        <form>
          <h3>What form of expression you're interested in?</h3>.
          <select name="passion" value={this.state.passion} onChange={this.handleChange}>
            <option>Select your pasison</option>
            {passions.length > 0 ?
              passions.map((passion, index) => {
                return <option key={index} value={passion._id}>{passion.passionTitle}</option>
              })
              : ""}
          </select>
          <input
            className="btn-next"
            type="button"
            value="Finish"
            onClick={this.handleFinish}
          />
          <input
            className="btn-back"
            type="button"
            value="Back"
            onClick={this.props.back}
          />
          <input 
            className="btn-back"
            type="button"
            value="Go to login page"
            onClick={this.goTologinPage}
          />
        </form>
      </Wrapper>
    );
  }
}

const state = (state, ownProps = {}) => {
  return {
    signedUpUser: state.signedUpUser.data,
    accountVerifData: state.accountVerifData.data,
    passionsList: state.passionsList,
    location: state.location,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navigateTo: (location) => {
      dispatch(push(location));
    },
    onGetAllPassionsAction: (page, limit) => dispatch(getAllPassionsAction(page, limit)),
    onSignupNewUserAction: (data) => dispatch(signupNewUserAction(data))
  }
};

export default connect(state, mapDispatchToProps)(StepFive);
