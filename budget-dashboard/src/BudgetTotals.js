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
    },
  }));

  props.data.map((item) => {
    total += parseInt(item.fields.amount);
  });

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <h5 className={classes.text}> Total: ${total}</h5>
      </Paper>
    </>
  );
}

export default BudgetTotals;
