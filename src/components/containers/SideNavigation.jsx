import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  vmIconName,
  formIconName,
  lineChartIconName,
  fileGroupIconName,
} from "@cds/core/icon";
import { CdsIcon } from "@cds/react/icon";
import logo from "../../images/vm.png";

const SideNavigation = ({ selectedItem, onItemSelect }) => {
  const [title, setTitle] = useState("Discount Guidance");
  const [titleDes, setTitleDes] = useState("One Stop Shop");
  const [navList, setNavList] = useState([]);

  useEffect(() => {
    const oNavList = [
      {
        category: "Application",
        subCategory: [
          {
            name: "Control Parameters",
            icon: formIconName,
            page: "/ControlParameters",
          },
          { name: "Bulk Upload", icon: formIconName, page: "/BulkUpload" },
          {
            name: "Discount Guidance",
            icon: formIconName,
            page: "/DiscountGuidance",
          },
        ],
      },
      {
        category: "Dasboards",
        subCategory: [
          {
            name: "BU Finance",
            icon: lineChartIconName,
            page: "/TableauDashboard",
          },
          {
            name: "Sales Finance",
            icon: lineChartIconName,
            page: "/TableauDashboard",
          },
          {
            name: "DMT",
            icon: lineChartIconName,
            page: "/TableauDashboard",
          },
        ],
      },
      {
        category: "Approval & Version",
        subCategory: [
          {
            name: "Approval Flow",
            icon: fileGroupIconName,
            page: "/ApprovalFlow",
          },
          {
            name: "Version Control",
            icon: fileGroupIconName,
            page: "/VersionControl",
          },
        ],
      },
    ];
    setNavList(oNavList);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-flex">
          <CdsIcon shape={vmIconName} size="lg" />
          <div className="sidebar-brand-name">
            <p>{title}</p>
            <span>{titleDes}</span>
          </div>
          {/* <Image src={logo} thumbnail />

          <div className="brand-icons">
            <span className="las la-bell"></span>
            <span className="las la-user-circle"></span>
          </div> */}
        </div>
      </div>
      <div>
        <div className="sidebar-menu">
          {navList.map((item, i) => (
            <div>
              <div key={i} className="menu-head">
                <span>{item["category"]}</span>
              </div>
              <ul key={item["category"]} className="list-group">
                {item["subCategory"].map((subItem, j) => (
                  <li
                    key={subItem["name"]}
                    className={
                      subItem.name === selectedItem.name
                        ? "sidebar-menu active"
                        : ""
                    }
                    onClick={() => onItemSelect(subItem)}
                  >
                    <NavLink
                      key={subItem["page"]}
                      aria-current="page"
                      to={subItem["page"]}
                    >
                      <CdsIcon
                        key={subItem["icon"]}
                        shape={subItem["icon"]}
                        size="md"
                      />
                      {subItem["name"]}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
