import React from "react";
import { Paper, Container, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BudgetTotals from "./BudgetTotals";

function BudgetManger() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      width: "70%",
      height: "80%",
      justifyContent: "space-around",
      alignItem: "center",
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <h1>Budget Manger</h1>
        <BudgetTotals />
      </Paper>
    </>
  );
}

export default BudgetManger;
