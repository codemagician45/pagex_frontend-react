import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Centre from "../components/Centre";
import Side from "../components/Side";
import CardSideHome from "../components/card/CardSideHome";
import ReactPost from "../components/modal/ReactPost";
import PromotePost from "../components/modal/PromotePost";

import brian from "../image/brian.png";
import clara from "../image/clara.png";
import mark from "../image/mark.png";
import sean from "../image/sean.png";

import back1 from "../image/back1.png";
import back2 from "../image/back2.png";
import back3 from "../image/back3.png";
import back4 from "../image/back4.png";

import article from "../image/article/article1.png";

const Wrapper = styled.div`
  h3 {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
  }

  .page-content {
    width: 95%;
    margin: 0 auto;
    border: 1px solid #00000029;
    background: #edeffd52;
  }

  .top-page-content {
    display: flex;

    img {
      width: 70px;
      height: 74px;
    }
  }

  .page-content-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;

    h4 {
      font-size: 20px;
    }
  }

  .middle-page-content {
    width: 100%;
    img {
      max-width: 100%;
      height: auto;
    }

    h1 {
      width: 95%;
      margin: 27px auto 0 auto;
      padding: 10px 0;
      border-bottom: 1px solid #00000029;
    }

    .content-content {
      width: 95%;
      margin: 46px auto 0 auto;
    }

    .card-btn {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 95%;
      margin: 0 auto;

      .text-btn {
        padding: 15px;
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
        :hover {
          color: #23d3ff;
        }
      }
    }
  }

  .bottom-page-content {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h2 {
      width: 90%;
      border-bottom: 1px solid #00000029;
      margin-bottom: 57px;
    }

    .review {
      width: 90%;
      padding: 0 0 15px 0;
      background: #e8ecff;
    }

    .review-info {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #00000029;

      h4 {
        font-size: 20px;
      }

      img {
        width: 70px;
        height: 74px;
      }
    }

    .review-content {
      border-bottom: 1px solid #00000029;
      padding: 15px;
    }
  }
`;

class Content extends Component {
  state = {
    showReact: false,
    showPromote: false,
    cote: [
      {
        id: 1,
        back: back1,
        title: "Following the path",
        user: "Mark Dickson",
        photo: mark,
        date: " 07 January 2020",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis mi nec libero ultricies egestas. Pellentesque eleifend molestie tempus. Suspendisse dapibus consectetur justo, in tempus justo condimentum eget. Quisque ornare dolor aliquam, molestie enim nec, maximus enim. Praesent accumsan luctus dapibus. Mauris vel sapien et.",
        image: article,
        review: [
          {
            id: 1,
            user: "Clark Monet",
            photo: brian,
            time: "il y 2 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          },
          {
            id: 2,
            user: "Clara Marco",
            photo: clara,
            time: "il y 3 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          },
          {
            id: 3,
            user: "Mark Dickson",
            photo: mark,
            time: "il y 4 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          }
        ]
      },
      {
        id: 2,
        back: back2,
        title: "Leaving the office",
        user: "Clark Monet",
        photo: brian,
        date: " 29 Decembre 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis mi nec libero ultricies egestas. Pellentesque eleifend molestie tempus. Suspendisse dapibus consectetur justo, in tempus justo condimentum eget. Quisque ornare dolor aliquam, molestie enim nec, maximus enim. Praesent accumsan luctus dapibus. Mauris vel sapien et.",
        image: article,
        review: [
          {
            id: 1,
            user: "Clark Monet",
            photo: brian,
            time: "il y 2 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          },
          {
            id: 2,
            user: "Clara Marco",
            photo: clara,
            time: "il y 3 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          },
          {
            id: 3,
            user: "Mark Dickson",
            photo: mark,
            time: "il y 4 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          }
        ]
      },
      {
        id: 3,
        back: back3,
        title: "Reading the sign",
        user: "Richard Poor",
        photo: brian,
        date: " 23 October 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis mi nec libero ultricies egestas. Pellentesque eleifend molestie tempus. Suspendisse dapibus consectetur justo, in tempus justo condimentum eget. Quisque ornare dolor aliquam, molestie enim nec, maximus enim. Praesent accumsan luctus dapibus. Mauris vel sapien et.",
        image: article,
        review: [
          {
            id: 1,
            user: "Clark Monet",
            photo: brian,
            time: "il y 2 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          },
          {
            id: 2,
            user: "Clara Marco",
            photo: clara,
            time: "il y 3 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          },
          {
            id: 3,
            user: "Mark Dickson",
            photo: mark,
            time: "il y 4 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          }
        ]
      },
      {
        id: 4,
        back: back4,
        title: "Making it happen",
        user: "Laura OG",
        photo: clara,
        date: " 29 Decembre 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis mi nec libero ultricies egestas. Pellentesque eleifend molestie tempus. Suspendisse dapibus consectetur justo, in tempus justo condimentum eget. Quisque ornare dolor aliquam, molestie enim nec, maximus enim. Praesent accumsan luctus dapibus. Mauris vel sapien et.",
        image: article,
        review: [
          {
            id: 1,
            user: "Clark Monet",
            photo: brian,
            time: "il y 2 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          },
          {
            id: 2,
            user: "Clara Marco",
            photo: clara,
            time: "il y 3 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          },
          {
            id: 3,
            user: "Mark Dickson",
            photo: mark,
            time: "il y 4 heures",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, sapien vel cursus rutrum, mauris ligula tincidunt turpis, vitae convallis turpis mauris a nulla. Duis."
          }
        ]
      }
    ]
  };

  handleShowReact = () => {
    this.setState({ showReact: !this.state.showReact });
  };

  handleShowPromote = () => {
    this.setState({ showPromote: !this.state.showPromote });
  };

  render() {
    const target = this.props.match.params.article;
    const found = this.state.cote.find(element => element.id == target);

    let showReactPost;
    if (this.state.showReact) {
      showReactPost = <ReactPost cache={this.handleShowReact} />;
    }

    let showReactPromote;
    if (this.state.showPromote) {
      showReactPost = (
        <PromotePost
          modalPhoto={found.photo}
          modalUser={found.user}
          modalHour={found.hour}
          modalContent={found.content}
          cache={this.handleShowPromote}
        />
      );
    }

    return (
      <Wrapper>
        <Layout>
          <Centre>
            <div className="page-content">
              <div className="top-page-content">
                <img src={found.photo} alt="profile" />
                <div className="page-content-info">
                  <h4>{found.user}</h4>
                  <p>{found.date}</p>
                </div>
              </div>
              <div className="middle-page-content">
                <img src={found.image} alt="article" />
                <h1>{found.title}</h1>
                <p className="content-content">{found.content}</p>
                <div className="card-btn">
                  <p onClick={this.handleShowPromote} className="text-btn">
                    Promote
                  </p>
                  <p onClick={this.handleShowReact} className="text-btn">
                    React
                  </p>
                </div>
              </div>
              <div className="bottom-page-content">
                <h2>Review</h2>
                {found.review.map(post => {
                  return (
                    <div className="review" key={post.id}>
                      <div className="review-info">
                        <img src={post.photo} alt="profile" />
                        <div className="info-side">
                          <h4>{post.user}</h4>
                          <p>{post.time}</p>
                        </div>
                      </div>
                      <div className="review-content">
                        <p>{post.comment}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {showReactPost}
            {showReactPromote}
          </Centre>
          <Side>
            <h3>Recommended</h3>
            {this.state.cote.map(latest => {
              return (
                <Link to={"/content/" + latest.id} key={latest.id}>
                  <CardSideHome
                    image={latest.back}
                    title={latest.title}
                    photo={latest.photo}
                    user={latest.user}
                    date={latest.date}
                  />
                </Link>
              );
            })}
          </Side>
        </Layout>
      </Wrapper>
    );
  }
}

export default Content;
