import React, { useState, useEffect } from "react";
import { Paper, Tabs, Tab, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BudgetTotals from "./BudgetTotals";
import BudgetList from "./BudgetList";
import BudgetTabs from "./BudgetTabs";
import axios from "axios";
import BudgetTable from "./BudgetTable";
import LinearProgress from "@material-ui/core/LinearProgress";

function BudgetManger() {
  const [bills, setBills] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [everythingElse, setEverythingElse] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      width: "70%",
      height: "100%",
      alignItem: "center",
      textAlign: "center",
    },
    tabs: {
      display: "flex",
      flexDirection: "row",
      height: "20px",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    const apiCall = async () => {
      const billsData = await axios(
        "https://api.airtable.com/v0/app3uPKaYM48ftzIO/Bills",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      const expensesData = await axios(
        "https://api.airtable.com/v0/app3uPKaYM48ftzIO/Expenses",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      const everyThingElseData = await axios(
        "https://api.airtable.com/v0/app3uPKaYM48ftzIO/everything",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      setBills(billsData.data.records);
      setExpenses(expensesData.data.records);
      setEverythingElse(everyThingElseData.data.records);
    };
    apiCall();
  }, []);

  const billsNames = ["Bill Name", "Amount Due", "Merchant", "Date Due"];
  const expensesNames = ["Name", "Amount Needed", "Date Needed By"];
  const everyThingElseNames = ["Name", "Amount Alotted", "Date Needed By"];

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <BudgetTabs changeCategory={setSelectedTab} />
        {selectedTab === 0 && <BudgetTable data={bills} header={billsNames} />}
        {selectedTab === 1 && (
          <BudgetTable data={expenses} header={expensesNames} />
        )}
        {selectedTab === 2 && (
          <BudgetTable data={everythingElse} header={everyThingElseNames} />
        )}
      </Paper>
    </>
  );
}

export default BudgetManger;
