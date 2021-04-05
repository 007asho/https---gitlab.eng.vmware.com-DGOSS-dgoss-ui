import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CdsIcon } from "@cds/react/icon";
import { barsIconName, homeIconName, userIconName } from "@cds/core/icon";

export default function Header({ onHome }) {
  const [user, setUser] = useState("Ashok Veluguri");

  return (
    <header>
      <div className="menu-toggle">
        <label htmlFor="sidebar-toggle">
          <CdsIcon shape={barsIconName} size="md" />
        </label>
      </div>
      <div className="header-icons">
        <NavLink aria-current="page" to="/">
          <CdsIcon shape={homeIconName} size="md" onClick={onHome} />
        </NavLink>
        <CdsIcon shape={userIconName} size="md" />
        <p>{user}</p>
        {/* <CdsIcon shape={searchIconName} size="md" />
      <CdsIcon shape={listIconName} size="md" /> */}
      </div>
      {/* <div className="sidebar-user">
      <div>
        <span>velugurias@vmware.com</span>
      </div>
    </div> */}
    </header>
  );
}
