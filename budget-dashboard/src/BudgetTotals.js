import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function BudgetTotals() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      textAlign: "center",
      width: "95%",
      height: "10%",
      margin: "0 auto",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={2}></Paper>
    </>
  );
}

export default BudgetTotals;
