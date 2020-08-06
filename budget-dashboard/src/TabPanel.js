import React from "react";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SettingsIcon from "@material-ui/icons/Settings";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Plug from "./Plug";
import { makeStyles } from "@material-ui/core/styles";

function TabPanel() {
  const matches = useMediaQuery("(max-width:1025px)");
  const nextPoint = useMediaQuery("(max-width:650px)");

  const useStyles = makeStyles((theme) => ({
    buttons: {
      color: "#68d388",
      margin: nextPoint === true ? "0" : "10px 0 10px 0",
    },
  }));

  const classes = useStyles();

  if (matches === false) {
    return (
      <>
        <Link className="links" to="/">
          <Button
            className={classes.buttons}
            startIcon={<EqualizerIcon />}
            color="primary"
          >
            Budget Manager
          </Button>
        </Link>
        <Link className="links" label="Market Watch" to="/marketwatch">
          <Button
            className={classes.buttons}
            startIcon={<TrendingUpIcon />}
            color="primary"
          >
            Market Watch
          </Button>
        </Link>
        <Link className="links" to="/settings" label="Settings">
          <Button
            className={classes.buttons}
            startIcon={<SettingsIcon />}
            color="primary"
          >
            Settings
          </Button>
        </Link>
      </>
    );
  } else if (matches === true) {
    return (
      <>
        <Link to="/">
          <Button className={classes.buttons} startIcon={<EqualizerIcon />} />
        </Link>
        <Link label="Market Watch" to="/marketwatch">
          <Button startIcon={<TrendingUpIcon />} className={classes.buttons} />
        </Link>
        <Link to="/settings" label="Settings">
          <Button startIcon={<SettingsIcon />} className={classes.buttons} />
        </Link>
      </>
    );
  }
}

export default TabPanel;
