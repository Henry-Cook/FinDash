import React from "react";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SettingsIcon from "@material-ui/icons/Settings";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function TabPanel() {
  const matches = useMediaQuery("(max-width:1025px)");
  const nexPoint = useMediaQuery("(max-width:650px)");

  if (matches === false) {
    return (
      <>
        <Link to="/">
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
  } else if (matches === true) {
    return (
      <>
        <Link to="/">
          <Button startIcon={<EqualizerIcon />} color="primary" />
        </Link>
        <Link label="Market Watch" to="/marketwatch">
          <Button startIcon={<TrendingUpIcon />} color="primary" />
        </Link>
        <Link to="/settings" label="Settings">
          <Button startIcon={<SettingsIcon />} color="primary" />
        </Link>
      </>
    );
  }
}

export default TabPanel;
