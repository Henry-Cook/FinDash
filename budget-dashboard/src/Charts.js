import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Doughnut } from "react-chartjs-2";
import TotalChart from "./TotalChart";

function Charts(props) {
  let propHolder = props;
  let data;
  const gatherBills = () => {
    let labels = [];
    let cost = [];

    props.bills.map((item) => {
      labels.push(item.fields.name);
      cost.push(parseInt(item.fields.amount));
    });
    return (data = {
      data: {
        labels: labels,
        datasets: [
          {
            label: "Bills",
            data: cost,
            backgroundColor: [
              "#8bf0ba",
              "#0e0fed",
              "#94f0f1",
              "#f2b1d8",
              "#ffdc6a",
            ],
          },
        ],
      },
    });
  };

  const gatherExpenses = () => {
    let labels = [];
    let cost = [];

    props.expenses.map((item) => {
      labels.push(item.fields.name);
      cost.push(parseInt(item.fields.amount));
    });
    return (data = {
      data: {
        labels: labels,
        datasets: [
          {
            label: "Bills",
            data: cost,
            backgroundColor: [
              "#8bf0ba",
              "#0e0fed",
              "#94f0f1",
              "#f2b1d8",
              "#ffdc6a",
            ],
          },
        ],
      },
    });
  };

  const gatherEverythingElse = () => {
    let labels = [];
    let cost = [];

    props.everythingElse.map((item) => {
      labels.push(item.fields.name);
      cost.push(parseInt(item.fields.amount));
    });
    return (data = {
      data: {
        labels: labels,
        datasets: [
          {
            label: "Bills",
            data: cost,
            backgroundColor: [
              "#8bf0ba",
              "#0e0fed",
              "#94f0f1",
              "#f2b1d8",
              "#ffdc6a",
            ],
          },
        ],
      },
    });
  };

  let tab = props.tab;

  if (
    props.bills !== undefined ||
    props.expenses !== undefined ||
    props.everythingElse !== undefined
  ) {
    if (tab === 0) {
      data = gatherBills();
    } else if (tab === 1) {
      data = gatherExpenses();
    } else if (tab === 2) {
      data = gatherEverythingElse();
    }
  }

  const useStyles = makeStyles((theme) => ({
    chartContainer: {
      width: "30%",
      height: "90%",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px 20px 0 20px",
    },
  }));

  const classes = useStyles();
  if (data !== undefined) {
    return (
      <>
        <Paper className={classes.chartContainer} elevation={2}>
          <Doughnut data={data.data} width={100} height={100} />
          {props.everythingElse !== undefined ? (
            <TotalChart data={propHolder} />
          ) : (
            "Loading..."
          )}
        </Paper>
      </>
    );
  } else {
    return (
      <>
        <Paper className={classes.chartContainer} elevation={2}>
          <p>Loading...</p>
        </Paper>
      </>
    );
  }
}

export default Charts;
