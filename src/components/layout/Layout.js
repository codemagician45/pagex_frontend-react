import React, { Component } from "react";
import SideNav from "./SideNav";
import SearchBar from "./SearchBar";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  position: fixe;
  background: #fff;
  width: 100%;

  .container {
    width: 90%;
  }

  .nav {
    position: fixe;
    margin: 15px;
  }

  .content {
    display: flex;
    justify-content: space-around;
    overflow: scroll;
    width: 100%;
    height: 100vh;
  }
`;

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <SideNav className="nav" />
        <div className="container">
          <SearchBar />
          <div className="content">{children}</div>
        </div>
      </Wrapper>
    );
  }
}

export default Layout;
