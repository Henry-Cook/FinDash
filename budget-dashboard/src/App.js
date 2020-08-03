import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Title from "./Title";
import ProfileBadge from "./ProfileBadge";
import BudgetManager from "./BudgetManger";
import Charts from "./Charts";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="total-container">
      <Navbar />
      <Container>
        <div className="title-bar">
          <Title />
          <ProfileBadge />
        </div>
        <div className="main-section">
          <BudgetManager />
          <Charts />
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
