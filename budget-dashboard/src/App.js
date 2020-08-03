import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Title from "./Title";
import ProfileBadge from "./ProfileBadge";
import BudgetManager from "./BudgetManger";
import Charts from "./Charts";

function App() {
  return (
    <div>
      <h1>Budget Dashboard</h1>
      <Navbar />
      <Title />
      <ProfileBadge />
      <BudgetManager />
      <Charts />
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
