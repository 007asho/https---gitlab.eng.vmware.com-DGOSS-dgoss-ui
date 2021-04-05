import React, { Component } from "react";
import SideNavigation from "./SideNavigation";
import Header from "./Header";

class LandingPage extends Component {
  state = {
    closable: "true",
    tiles: [],
    selectedNavItem: { name: "" },
  };
  onClose = (e) => {
    console.log(e);
    this.setState({ closable: "false" });
  };
  onSelect = (e) => {
    console.log(e);
    this.setState({ closable: "false" });
  };
  onSideNavigation = (subItem) => {
    //console.log(subItem);
    this.setState({ selectedNavItem: subItem });
  };
  onHome = (subItem) => {
    //console.log(subItem);
    this.setState({ selectedNavItem: { name: "" } });
  };
  render() {
    const { selectedNavItem } = this.state;
    return (
      <React.Fragment>
        <input type="checkbox" name="" id="sidebar-toggle" />
        <SideNavigation
          selectedItem={selectedNavItem}
          onItemSelect={this.onSideNavigation}
        />
        <div className="main-content">
          <Header onHome={this.onHome} />
        </div>
        <label htmlFor="sidebar-toggle" className="body-label"></label>
      </React.Fragment>
    );
  }
}

export default LandingPage;
