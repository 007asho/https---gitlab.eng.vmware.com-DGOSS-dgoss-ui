import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import {
  ClarityIcons,
  listIcon,
  searchIcon,
  infoStandardIcon,
  cogIcon,
  exportIcon,
  barsIcon,
  lineChartIcon,
  vmIcon,
  formIcon,
  homeIcon,
  userIcon,
  fileGroupIcon,
} from "@cds/core/icon";

import "@cds/core/global.css";
import "@vmware-react/clarity/dist/react-clarity.css";
//import "@clr/ui/clr-ui.min.css";

ClarityIcons.addIcons(listIcon);
ClarityIcons.addIcons(searchIcon);
ClarityIcons.addIcons(cogIcon);
ClarityIcons.addIcons(exportIcon);
ClarityIcons.addIcons(barsIcon);
ClarityIcons.addIcons(lineChartIcon);
ClarityIcons.addIcons(infoStandardIcon);
ClarityIcons.addIcons(vmIcon);
ClarityIcons.addIcons(formIcon);
ClarityIcons.addIcons(homeIcon);
ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(fileGroupIcon);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
