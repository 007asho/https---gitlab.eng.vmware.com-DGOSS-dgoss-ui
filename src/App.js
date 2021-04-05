import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { MainContainer } from "@vmware-react/clarity";
import LandingPage from "./components/containers/LandingPage";
import Insights from "./components/Insights";
import DiscountGuidance from "./components/DiscountGuidance";
import NotFound from "./components/NotFound";
import "./App.css";
import "./styles/layout.css";
import "./styles/wizard.css";

const App = () => {
  const componentDidMount = () => {
    //const token = await auth.setTableauToken();
    //console.log("token");
    //this.setState({ user });
  };
  return (
    <MainContainer>
      <LandingPage />
      <main className="main-content">
        <Switch>
          <Route path="/DiscountGuidance" component={DiscountGuidance} />
          <Route path="/Notfound" component={NotFound} />
          <Route path="/" exact component={Insights} />

          <Redirect to="/Notfound" />
        </Switch>
      </main>
    </MainContainer>
  );
};

export default App;
