import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function BudgetTotals(props) {
  const matches = useMediaQuery("(max-width:850px)");
  let total = 0;
  const useStyles = makeStyles((theme) => ({
    paper: {
      textAlign: "center",
      width: "95%",
      margin: "10px auto",
    },
    text: {
      margin: matches === true ? "10px" : "20px",
      color: "#68d388",
    },
  }));

  props.data.forEach((item) => {
    total += parseInt(item.fields.amount);
  });

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <h4 className={classes.text}> Total: ${total}</h4>
      </Paper>
    </>
  );
}

export default BudgetTotals;
