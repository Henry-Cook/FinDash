import React, { useState } from "react";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SettingsIcon from "@material-ui/icons/Settings";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function TabPanel() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleBillClick = () => {
    return <Link to="/" />;
  };

  return (
    <>
      <Link to="/" onClick={handleBillClick}>
        <Button startIcon={<EqualizerIcon />} color="primary">
          Budget Manager
        </Button>
      </Link>
      <Link label="Market Watch" to="/marketwatch">
        <Button startIcon={<TrendingUpIcon />} color="primary">
          Market Watch
        </Button>
      </Link>
      <Link to="/settings" label="Settings">
        <Button startIcon={<SettingsIcon />} color="primary">
          Settings
        </Button>
      </Link>
    </>
  );
}

export default TabPanel;
