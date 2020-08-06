import React, { useState, useEffect } from "react";
import { Paper, Tabs, Tab, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function BudgetTabs(props) {
  const [selectedTab, setSelectedTab] = useState(0);
  const matches = useMediaQuery("(max-width:850px)");

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
        <Tab label="Expenses" />
        <Tab label="Everything Else" />
      </Tabs>
    </>
  );
}

export default BudgetTabs;
