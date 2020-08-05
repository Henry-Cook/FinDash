import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

function Popular() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      width: "20%",
      alignItems: "center",
      padding: "10px",
      // marginTop: "20px",
    },
    title: {
      fontSize: "20spx",
      margin: "0 0 10px 0",
    },
    text: {
      fontSize: "15px",
      margin: 5,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <h1 className={classes.title}>Popular</h1>
        <p className={classes.text}>Apple - APPL</p>
        <p className={classes.text}>Microsoft - MSFT</p>
        <p className={classes.text}>Tesla - TSLA</p>
        <p className={classes.text}>Amazon - AMZN</p>
        <p className={classes.text}>Facebook - FB</p>
        <p className={classes.text}>Netflix - NFLX</p>
        <p className={classes.text}>Alphabet - GOOGL</p>
      </Paper>
    </>
  );
}

export default Popular;
