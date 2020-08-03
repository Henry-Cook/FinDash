import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Charts() {
  const useStyles = makeStyles((theme) => ({
    chartContainer: {
      width: "30%",
      height: "90%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0,
      marginLeft: 50,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.chartContainer} elevation={2}>
        <h1>Charts</h1>
      </Paper>
    </>
  );
}

export default Charts;
