import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function BudgetTotals(props) {
  let total = 0;
  const useStyles = makeStyles((theme) => ({
    paper: {
      textAlign: "center",
      width: "95%",
      height: "10%",
      margin: "20px auto",
    },
  }));

  props.data.map((item) => {
    total += parseInt(item.fields.amount);
  });

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <h5> Total: ${total}</h5>
      </Paper>
    </>
  );
}

export default BudgetTotals;
