import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
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
