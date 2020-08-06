import React, { useContext } from "react";
import { ThemeContext } from "./App";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function BudgetTotals(props) {
  const themes = useContext(ThemeContext);
  const matches = useMediaQuery("(max-width:850px)");
  let total = 0;
  const useStyles = makeStyles((theme) => ({
    paper: {
      textAlign: "center",
      width: "95%",
      margin: "10px auto",
      backgroundColor: themes === true ? "#393e46" : "#FFFF",
      border: themes === true ? "solid 1px #222831" : "none",
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
