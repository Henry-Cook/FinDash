import React from "react";
import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function TotalChart(props) {
  let billTotal = 0;
  let expensesTotal = 0;
  let everythingElseTotal = 0;
  const matches = useMediaQuery("(max-width:850px)");

  props.data.bills.map((item) => {
    billTotal += parseInt(item.fields.amount);
    return "Completed";
  });

  props.data.expenses.map((item) => {
    expensesTotal += parseInt(item.fields.amount);
    return "Completed";
  });

  props.data.everythingElse.map((item) => {
    everythingElseTotal += parseInt(item.fields.amount);
    return "Completed";
  });

  const useStyles = makeStyles((theme) => ({
    chartContainer: {
      width: "30%",
      width: matches === true ? "40%" : "80%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0,
      marginLeft: 50,
    },
  }));

  const data = {
    data: {
      labels: ["Bills", "Expenses", "Everything Else"],
      datasets: [
        {
          label: "Total",
          data: [billTotal, expensesTotal, everythingElseTotal],
          backgroundColor: [
            "#68d388",
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
        text: `Total : $${billTotal + expensesTotal + everythingElseTotal}`,
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
  };

  const classes = useStyles();

  if (matches === false) {
    return (
      <>
        <Doughnut
          data={data.data}
          width={100}
          height={100}
          options={data.options}
        />
      </>
    );
  } else {
    return (
      <>
        <div className={classes.chartContainer}>
          <Doughnut
            data={data.data}
            width={100}
            height={100}
            options={data.options}
          />
        </div>
      </>
    );
  }
}

export default TotalChart;
