import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

function Plug() {
  const matches = useMediaQuery("(max-width:650px)");

  const useStyles = makeStyles((theme) => ({
    orange: {
      color: "#ffb766",
      margin: matches === true ? "0" : "10px 0 10px 0",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <a href="https://www.linkedin.com/in/henry-cook-dev/">
        <Button className={classes.orange} startIcon={<LinkedInIcon />} />
      </a>
      <a href="https://github.com/Henry-Cook">
        <Button className={classes.orange} startIcon={<GitHubIcon />} />
      </a>
    </>
  );
}

export default Plug;
