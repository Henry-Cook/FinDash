import React from "react";
import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";

function TotalChart(props) {
  let billTotal = 0;
  let expensesTotal = 0;
  let everythingElseTotal = 0;

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
      height: "90%",
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
        display: true,
        text: "Total",
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
}

export default TotalChart;
