import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SettingsIcon from "@material-ui/icons/Settings";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { Link } from "react-router-dom";

function TabPanel() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      height: 500,
      justifyContent: "center",
      alignItems: "center",
    },
    tabs: {
      display: "flex",
      flexDirection: "row",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tabs orientation="vertical" value={selectedTab} onChange={handleChange}>
        <Tab icon={<EqualizerIcon />} label="Budget Manager"></Tab>
        <Tab icon={<TrendingUpIcon />} label="Market Watch" />
        <Tab icon={<SettingsIcon />} label="Settings" />
      </Tabs>
    </div>
  );
}

export default TabPanel;
