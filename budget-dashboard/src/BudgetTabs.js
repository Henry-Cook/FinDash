import React, { useState, useEffect } from "react";
import { Paper, Tabs, Tab, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function BudgetTabs(props) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    props.changeCategory(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    tabs: {
      display: "flex",
      flexDirection: "row",
      height: "20px",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Tabs
        className={classes.tabs}
        variant="fullWidth"
        indicatorColor="primary"
        onChange={handleChange}
        value={selectedTab}
      >
        <Tab label="Bills" />
        <Tab label="Expenses" />
        <Tab label="Everything Else" />
      </Tabs>
    </>
  );
}

export default BudgetTabs;
