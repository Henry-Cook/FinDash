import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Doughnut, Bar } from "react-chartjs-2";

function Charts() {
  // const [doughtnutData, setDoughnutData] = useState("");

  const data = {
    data: {
      labels: ["Rent", "Electric", "Internet", "Henry"],
      datasets: [
        {
          label: "Bills",
          data: [850, 50, 50, 20],
          backgroundColor: ["green", "blue", "red", "Purple"],
        },
      ],
    },
  };
  // data: {
  //   labels: ["Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany"],
  //   datasets: [
  //     {
  //       label: "Population",
  //       data: [261310, 210565, 195976, 145170, 97856],
  //       backgroundColor: [
  //         "#f1c5c5",
  //         "#faf0af",
  //         "#e5edb7",
  //         "#8bcdcd",
  //         "#f7c5a8",
  //       ],
  //       borderWidth: 1,
  //       borderColor: "#777",
  //       hoverBorderWidth: "2",
  //       hoverBorderColor: "#000",
  //     },
  //   ],
  // },

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
        <Doughnut data={data.data} width={100} height={100} />
      </Paper>
    </>
  );
}

export default Charts;
