import React from "react";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function MarketChart(props) {
  let previousClose = props.data.data.pc;
  let open = props.data.data.o;
  let high = props.data.data.h;
  let low = props.data.data.l;
  let current = props.data.data.c;
  const matches = useMediaQuery("(max-width:850px)");

  const data = {
    data: {
      labels: ["Previous Close", "Open", "High", "Low", "Current"],
      datasets: [
        {
          label: "Total",
          data: [previousClose, open, high, low, current],
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
    options: {
      title: {
        display: false,
        text: "Total",
        fontSize: 25,
      },
      legend: {
        display: false,
        position: "bottom",
        labels: {
          fontColor: "#000000",
        },
      },
    },
  };

  const useStyles = makeStyles((theme) => ({
    chartContainer: {
      display: "flex",
      width: matches === true ? "65%" : "45%",
      // justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.chartContainer}>
        <Line data={data.data} options={data.options} />
      </div>
    </>
  );
}

export default MarketChart;
