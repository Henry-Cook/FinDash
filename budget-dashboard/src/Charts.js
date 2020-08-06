import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Doughnut } from "react-chartjs-2";
import TotalChart from "./TotalChart";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Charts(props) {
  const matches = useMediaQuery("(max-width:850px)");

  let propHolder = props;
  let data;
  const gatherBills = () => {
    let labels = [];
    let cost = [];

    props.bills.forEach((item) => {
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
              "#68d388",
              "#f183a8",
              "#ffb766",
              "#c2edda",
              "#ffdc6a",
              "#a797f2",
            ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Bills",
          fontSize: 25,
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontColor: "#000000",
          },
        },
      },
    });
  };

  const gatherExpenses = () => {
    let labels = [];
    let cost = [];

    props.expenses.forEach((item) => {
      labels.push(item.fields.name);
      cost.push(parseInt(item.fields.amount));
    });
    return (data = {
      data: {
        labels: labels,
        datasets: [
          {
            label: "Expenses",
            data: cost,
            backgroundColor: [
              "#68d388",
              "#ffb766",
              "#f183a8",
              "#c2edda",
              "#ffdc6a",
              "#a797f2",
            ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Expenses",
          fontSize: 25,
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontColor: "#000000",
          },
        },
      },
    });
  };

  const gatherEverythingElse = () => {
    let labels = [];
    let cost = [];

    props.everythingElse.forEach((item) => {
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
              "#68d388",
              "#ffb766",
              "#f183a8",
              "#c2edda",
              "#ffdc6a",
              "#a797f2",
            ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "EveryThing Else",
          fontSize: 25,
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontColor: "#000000",
          },
        },
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
      display: "flex",
      flexDirection: matches === true ? "row" : "column",
      width: matches === true ? "90%" : "30%",
      // height: "90%",
      justifyContent: "center",
      alignItems: "center",
      margin: matches === true ? "0 auto" : "20px 20px 20px 20px",
    },
    chart: {
      width: matches === true ? "40%" : "80%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
    },
  }));

  const classes = useStyles();
  if (data !== undefined) {
    return (
      <>
        <Paper className={classes.chartContainer} elevation={2}>
          {matches === true && (
            <>
              <div className={classes.chart}>
                <Doughnut
                  data={data.data}
                  width={100}
                  height={100}
                  options={data.options}
                />
              </div>
            </>
          )}
          {matches !== true && (
            <Doughnut
              data={data.data}
              width={100}
              height={100}
              options={data.options}
            />
          )}

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
