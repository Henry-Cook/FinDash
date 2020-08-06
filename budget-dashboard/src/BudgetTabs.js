import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function BudgetTabs(props) {
  const themes = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    props.changeCategory(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    tabs: {
      display: "flex",
      flexDirection: "row",
    },
    tab: {
      height: "10px",
      color: themes === true ? "#FFFF" : "#000000",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Tabs
        className={classes.tabs}
        variant="fullWidth"
        TabIndicatorProps={{ style: { background: "#68d388" } }}
        onChange={handleChange}
        value={selectedTab}
      >
        <Tab className={classes.tab} label="Bills" />
        <Tab className={classes.tab} label="Expenses" />
        <Tab className={classes.tab} label="Everything Else" />
      </Tabs>
    </>
  );
}

export default BudgetTabs;
