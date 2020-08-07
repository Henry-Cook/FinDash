import React, { useState } from "react";
import "./App.css";
import Themes from "./Themes";
import Navbar from "./Navbar";
import Title from "./Title";
import ProfileBadge from "./ProfileBadge";
import BudgetManager from "./BudgetManager";
import Charts from "./Charts";
import { Container } from "@material-ui/core";
import { Route } from "react-router-dom";
import MarketWatch from "./MarketWatch";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { update } from "lodash";

export const ThemeContext = React.createContext();

function App() {
  const [bills, setBills] = useState();
  const [expenses, setExpenses] = useState();
  const [everythingElse, setEverythingElse] = useState();
  const [selectedTab, setSelectedTab] = useState(0);
  const matches = useMediaQuery("(max-width:850px)");
  const nextPoint = useMediaQuery("(max-width:650px)");
  const [themes, updateThemes] = useState(false);

  const changeTheme = () => {
    themes === false ? updateThemes(true) : updateThemes(false);
  };

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
      margin: "0",
      paddingLeft: "0",
      paddingRight: "0",
      backgroundColor: themes === true ? "#222831" : " ",
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
      <ThemeContext.Provider value={themes}>
        <div className="total-container">
          <div className="under-nav"></div>
          <Navbar />
          <Container className={classes.root} maxWidth="xl">
            {nextPoint === false && (
              <>
                <div
                  className="title-bar"
                  style={{
                    backgroundColor: themes === true ? "#393e46" : "#ffffff",
                    borderBottom:
                      themes === true
                        ? "1px solid #222831"
                        : "1px solid rgb(214, 211, 211)",
                  }}
                >
                  <Title />
                  <Themes change={changeTheme} />
                  <ProfileBadge />
                </div>
              </>
            )}

            <Route path="/" exact>
              {matches === false && (
                <>
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
                </>
              )}
              {matches === true && (
                <>
                  <div className="main-section">
                    {nextPoint === false && (
                      <Charts
                        bills={bills}
                        expenses={expenses}
                        everythingElse={everythingElse}
                        tab={selectedTab}
                      />
                    )}

                    <BudgetManager
                      sendData={addDataFromBudget}
                      sendTab={selectedTabUpdate}
                    />
                  </div>
                </>
              )}
            </Route>

            <Route path="/marketwatch">
              <MarketWatch />
            </Route>

            <Route path="/settings">
              <div className="settings">
                <img
                  src="https://media.giphy.com/media/Wn74RUT0vjnoU98Hnt/giphy.gif"
                  alt=""
                  srcset=""
                />
              </div>
            </Route>
          </Container>
        </div>
      </ThemeContext.Provider>
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
