import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import ProfileBadge from "./ProfileBadge";
import BudgetManager from "./BudgetManger";
import Charts from "./Charts";
import { Container } from "@material-ui/core";

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

  return (
    <div className="total-container">
      <Navbar />
      <Container>
        <div className="title-bar">
          <ProfileBadge />
        </div>
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
      </Container>
    </div>
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
