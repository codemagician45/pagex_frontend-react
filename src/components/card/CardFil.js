import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Ellipsis from "../../image/icone/ellipsis.js";
import DownContent from "../dropdown/DownContent.js";
import ReactPost from "../modal/ReactPost.js";
import PromotePost from "../modal/PromotePost.js";

const Wrapper = styled.div`
  width: 98%;
  margin: 35px auto;
  border: 1px solid #00000029;
  box-shadow: 0px 3px 6px #00000029;

  display: flex;
  z-index: 0;
  flex-direction: column;
  justify-content: space-between;
  background: #eef0fe;

  h4 {
    font-size: 1em;
  }

  .info-hour {
    color: #969ca2;
    font-size: 15px;
  }

  img {
    width: 54px;
    height: 54px;
  }

  .top-card {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #00000029;
    padding: 5px;
    background: #fff;
  }

  .info-top-card {
    margin: 0 0 0 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-content {
    padding: 15px;
  }

  .btn-content {
    position: relative;
  }

  .card-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .card-btn-item {
      padding: 15px;
      font-weight: bold;
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
      :hover {
        color: #23d3ff;
      }
    }
  }

  svg {
    margin: 25px 25px 0 0;
    cursor: pointer;

    :hover {
      color: #59ddff;
    }
  }
`;

class CardFil extends Component {
  state = {
    downcontent: false,
    showReact: false,
    showPromote: false
  };

  handleShow = () => {
    this.setState({ downcontent: !this.state.downcontent });
  };

  handleShowReact = () => {
    this.setState({ showReact: !this.state.showReact });
  };

  handleShowPromote = () => {
    this.setState({ showPromote: !this.state.showPromote });
  };

  render() {
    const afficherDownContent = this.state.downcontent;
    let dropdownContent;
    if (afficherDownContent) {
      dropdownContent = <DownContent cache={this.handleClick} />;
    }

    let showReactPost;
    if (this.state.showReact) {
      showReactPost = <ReactPost cache={this.handleShowReact} />;
    }

    let showReactPromote;
    if (this.state.showPromote) {
      showReactPost = (
        <PromotePost
          modalPhoto={this.props.photo}
          modalUser={this.props.user}
          modalHour={this.props.hour}
          modalContent={this.props.content}
          cache={this.handleShowPromote}
        />
      );
    }
    return (
      <Wrapper>
        <div className="top-card">
          <img src={this.props.photo} alt="profile" />
          <div className="info-top-card">
            <div>
              <Link to={"/profile/" + this.props.id}>
                <h4>{this.props.user}</h4>
              </Link>
              <p className="info-hour">Il y a {this.props.hour} heures</p>
            </div>
            <div className="btn-content" onClick={this.handleShow}>
              <Ellipsis />
              {dropdownContent}
            </div>
          </div>
        </div>
        <p className="card-content">{this.props.content}</p>
        <div className="card-btn">
          <Link className="card-btn-item" onClick={this.handleShowPromote}>
            Promote
          </Link>
          <Link className="card-btn-item" onClick={this.handleShowReact}>
            React
          </Link>
        </div>
        {showReactPost}
        {showReactPromote}
      </Wrapper>
    );
  }
}

export default CardFil;
