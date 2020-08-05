import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Title from "./Title";
import ProfileBadge from "./ProfileBadge";
import BudgetManager from "./BudgetManger";
import Charts from "./Charts";
import { Container } from "@material-ui/core";
import { Route } from "react-router-dom";
import MarketWatch from "./MarketWatch";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const [bills, setBills] = useState();
  const [expenses, setExpenses] = useState();
  const [everythingElse, setEverythingElse] = useState();
  const [selectedTab, setSelectedTab] = useState(0);

  const addDataFromBudget = (dataOne, dataTwo, dataThree) => {
    setBills(dataOne);
    setExpenses(dataTwo);
    setEverythingElse(dataThree);
  };

  const selectedTabUpdate = (tab) => {
    setSelectedTab(tab);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      // borderTopLeftRadius: "50px",
      // borderBottomLeftRadius: "50px",
      background: "green",
      paddingLeft: "0",
      paddingRight: "0",
      backgroundColor: "#DFDCE3",
    },
    tabs: {
      display: "flex",
      flexDirection: "row",
      height: "20px",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className="total-container">
        <Navbar />
        <Container className={classes.root}>
          <div className="title-bar">
            <Title />
            <ProfileBadge />
          </div>
          <Route path="/" exact>
            <div className="main-section">
              <BudgetManager
                sendData={addDataFromBudget}
                sendTab={selectedTabUpdate}
              />
              <Charts
                bills={bills}
                expenses={expenses}
                everythingElse={everythingElse}
                tab={selectedTab}
              />
            </div>
          </Route>

          <Route path="/marketwatch">
            <MarketWatch />
          </Route>

          <Route path="/settings">
            <h1>Settings</h1>
          </Route>
        </Container>
      </div>
    </>
  );
}

export default App;

// |- App
// |
// | --- Nav-bar
// | --- Title
// | --- User Picture and Name
// | --- Budget Manager
// 	| --- Categories
// 		| --- Bills
// 		| --- Living Expenses
// 		| --- Everything Else
// | --- Budget Totals? => Not sure if this should be a stand alone component to place in budget manager
// | --- Charts
// 	| --- Doughnut Chart
// 	| --- Bar Chart
