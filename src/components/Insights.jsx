import React from "react";
import { CdsIcon } from "@cds/react/icon";
import { CdsButton } from "@cds/react/button";
import { cogIconName, exportIconName, userIconName } from "@cds/core/icon";
const LPInsights = () => {
  return (
    <React.Fragment>
      {/*<div className="page-header">
        <div>
          <p>Discount Guidance Insights</p>
        </div>
         <div className="header-actions">
          <div cds-layout="horizontal gap:sm">
            <CdsButton>
              <CdsIcon shape={exportIconName} size="md" />
              Export
            </CdsButton>
            <CdsButton>
              <CdsIcon shape={cogIconName} size="md" />
              Settings
            </CdsButton>
          </div>
        </div> 
      </div>*/}
      <div className="page-content">
        <div className="cards">
          <div className="card-single">
            <div className="card-head">
              <span>Current </span>
              <small>Version - 5</small>
            </div>
            <div className="wizard-card" data-color="azure">
              <div className="wizard-navigation">
                <div className="progress-with-circle">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="1"
                    aria-valuemin="1"
                    aria-valuemax="3"
                    style={{ width: "77.7%" }}
                  ></div>
                </div>
                <ul className="nav nav-pills">
                  <li style={{ width: "33%" }}>
                    <a href="#about" data-toggle="tab">
                      <div className="icon-circle checked">
                        <span class="las la-check"></span>
                      </div>
                      BU Finance
                    </a>
                  </li>
                  <li style={{ width: "33%" }}>
                    <a href="#account" data-toggle="tab">
                      <div className="icon-circle checked">
                        <span class="las la-check"></span>
                      </div>
                      Sales Finance
                    </a>
                  </li>
                  <li style={{ width: "33%" }}>
                    <a href="#address" data-toggle="tab">
                      <div className="icon-circle">
                        <i class="las la-clipboard-list"></i>
                      </div>
                      DMT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="card-head">
              <span>Previous</span>
              <small>Version - 4</small>
            </div>
            <div className="wizard-card" data-color="azure">
              <div className="wizard-navigation">
                <div className="progress-with-circle">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="1"
                    aria-valuemin="1"
                    aria-valuemax="3"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <ul className="nav nav-pills">
                  <li style={{ width: "33%" }}>
                    <a href="#about" data-toggle="tab">
                      <div className="icon-circle checked">
                        <span class="las la-check"></span>
                      </div>
                      BU Finance
                    </a>
                  </li>
                  <li style={{ width: "33%" }}>
                    <a href="#account" data-toggle="tab">
                      <div className="icon-circle checked">
                        <span class="las la-check"></span>
                      </div>
                      Sales Finance
                    </a>
                  </li>
                  <li style={{ width: "33%" }}>
                    <a href="#address" data-toggle="tab">
                      <div className="icon-circle checked">
                        <span class="las la-check"></span>
                      </div>
                      DMT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="job-grid">
          <div className="jobs">
            <p>
              Recent Activities
              <small>
                See all activities <span className="las la-arrow-right"></span>
              </small>
            </p>
            <div className="table-responsive">
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>
                    <td>
                      <div>BU Fianance</div>
                    </td>
                    <td>
                      <div>velugurias</div>
                    </td>
                    <td>
                      <div>posted 6 days ago</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator even"></span>
                      </div>
                    </td>
                    <td>
                      <div>BU Fianance</div>
                    </td>
                    <td>
                      <div>velugurias</div>
                    </td>
                    <td>
                      <div>posted 5 days ago</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>
                    <td>
                      <div>BU Fianance</div>
                    </td>
                    <td>
                      <div>velugurias</div>
                    </td>
                    <td>
                      <div>posted 6 days ago</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator even"></span>
                      </div>
                    </td>
                    <td>
                      <div>BU Fianance</div>
                    </td>
                    <td>
                      <div>velugurias</div>
                    </td>
                    <td>
                      <div>posted 5 days ago</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator"></span>
                      </div>
                    </td>
                    <td>
                      <div>BU Fianance</div>
                    </td>
                    <td>
                      <div>velugurias</div>
                    </td>
                    <td>
                      <div>posted 6 days ago</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <span className="indicator even"></span>
                      </div>
                    </td>
                    <td>
                      <div>BU Fianance</div>
                    </td>
                    <td>
                      <div>velugurias</div>
                    </td>
                    <td>
                      <div>posted 5 days ago</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LPInsights;
