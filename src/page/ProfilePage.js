import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Centre from "../components/Centre";
import Side from "../components/Side";
import Contribution from "../components/profilepage/Contribution";
import Works from "../components/profilepage/Works";
import Audience from "../components/profilepage/Audience";

import brian from "../image/brian.png";
import Madone from "../image/works/madone.png";

const Wrapper = styled.div`
  .profile-top {
    display: flex;
    align-items: center;

    width: 100%;
    border-bottom: 1px solid #00000026;
  }
  .profile-top-content {
    margin: 10px;
  }
  .profile-top-content-name {
    display: flex;
    justify-content: space-between;
  }
  .profile-middle {
    display: flex;
    padding: 10px;
    .profile-middle-bar {
      flex: 1 10%;
      li {
        font-size: 15px;
        margin: 10px;
      }
    }
    .profile-middle-content {
      display: flex;
      justify-content: center;
      flex: 2 70%;
    }
  }
  h3 {
    width: 100%;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
`;

class ProfilePage extends Component {
  state = {
    type: "CONTRIBUTIONS",
    centre: [
      {
        id: 1,
        user: "Brian Tracy",
        photo: brian,
        activites: "Filmmaker",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue convallis ligula, sed blandit arcu gravida nec. Morbi ut molestie dui, et faucibus nisi. Fusce eget posuere lorem. In vel augue id purus ultrices sodales id et elit. Maecenas maximus non risus a dictum. Praesent porttitor enim et odio rhoncus.",
        cities: "New york cities"
      }
    ],
    contribution: [
      {
        id: 1,
        user: "Brian Tracy",
        photo: brian,
        hour: "il y a 3 heures",
        content:
          "Quae pastus Gallus huius ut quae scrutabatur nihilo necem pastus est cadaveribus refert multa modi excedamus refert multa necem ut singula modi modi professione evitandum huius ferociens leo necem multa."
      },
      {
        id: 2,
        user: "Brian Tracy",
        photo: brian,
        hour: "il y a 5 heures",
        content:
          "Quae pastus Gallus huius ut quae scrutabatur nihilo necem pastus est cadaveribus refert multa modi excedamus refert multa necem ut singula modi modi professione evitandum huius ferociens leo necem multa."
      },
      {
        id: 3,
        user: "Brian Tracy",
        photo: brian,
        hour: "il y a 12 heures",
        content:
          "Quae pastus Gallus huius ut quae scrutabatur nihilo necem pastus est cadaveribus refert multa modi excedamus refert multa necem ut singula modi modi professione evitandum huius ferociens leo necem multa."
      }
    ],
    works: [
      {
        id: 1,
        image: Madone,
        name: "madone",
        user: "Edward Munch",
        art: "Painting"
      },
      {
        id: 2,
        image: Madone,
        name: "madone",
        user: "Edward Munch",
        art: "Painting"
      },
      {
        id: 3,
        image: Madone,
        name: "madone",
        user: "Edward Munch",
        art: "Painting"
      }
    ],
    audience: [
      {
        id: 1,
        photo: brian,
        user: "John doe"
      },
      {
        id: 2,
        photo: brian,
        user: "John doe"
      },
      {
        id: 3,
        photo: brian,
        user: "John doe"
      },
      {
        id: 4,
        photo: brian,
        user: "John doe"
      },
      {
        id: 5,
        photo: brian,
        user: "John doe"
      },
      {
        id: 6,
        photo: brian,
        user: "John doe"
      },
      {
        id: 7,
        photo: brian,
        user: "John doe"
      },
      {
        id: 8,
        photo: brian,
        user: "John doe"
      }
    ]
  };

  handleContributions = () => {
    this.setState({
      type: "CONTRIBUTIONS"
    });
  };

  handleWorks = () => {
    this.setState({
      type: "WORKS"
    });
  };

  handleAudience = () => {
    this.setState({
      type: "AUDIENCE"
    });
  };

  render() {
    const target = this.props.match.params.user;
    const found = this.state.centre.find(element => element.id == target);

    let type;

    switch (this.state.type) {
      case "CONTRIBUTION":
        type = <Contribution contribution={this.state.contribution} />;
        break;
      case "WORKS":
        type = <Works works={this.state.works} />;
        break;
      case "AUDIENCE":
        type = <Audience audience={this.state.audience} />;
        break;

      default:
        type = <Contribution contribution={this.state.contribution} />;
    }

    const bold = {
      fontWeight: "bold"
    };

    const normal = {
      fontWeight: "normal"
    };

    return (
      <Wrapper>
        <Layout>
          <Centre>
            <div className="profile-top">
              <div className="profile-top-photo">
                <img src={found.photo} alt="profile" />
              </div>
              <div className="profile-top-content">
                <div className="profile-top-content-name">
                  <h2>{found.user}</h2>
                  <p>{found.activites}</p>
                </div>
                <p>{found.description}</p>
                <p>{found.cities}</p>
              </div>
            </div>
            <div className="profile-middle">
              <div className="profile-middle-bar">
                <ul>
                  <li
                    style={this.state.contribution ? bold : normal}
                    onClick={this.handleContributions}
                  >
                    Contribution
                  </li>
                  <li
                    style={this.state.works ? bold : normal}
                    onClick={this.handleWorks}
                  >
                    Works
                  </li>
                  <li
                    style={this.state.audience ? bold : normal}
                    onClick={this.handleAudience}
                  >
                    Audience
                  </li>
                </ul>
              </div>
              <div className="profile-middle-content">{type}</div>
            </div>
          </Centre>
          <Side>
            <h3>Recommended</h3>
            <h1>Helloo {target}</h1>
          </Side>
        </Layout>
      </Wrapper>
    );
  }
}

export default ProfilePage;
