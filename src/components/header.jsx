import React, { Component } from "react";

class Header extends Component {
  state = {
    userStatus: "loggedOut",
  };

  render() {
    return <h1 id="header">This is the Header!</h1>;
  }

  something() {
    const { userStatus } = this.state;

    return userStatus === "loggedIn" ? userStatus : userStatus;
  }
}

export default Header;
