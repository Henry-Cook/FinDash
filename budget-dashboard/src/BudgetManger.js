import React, { useState, useEffect } from "react";
import { Paper, Tabs, Tab, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import BudgetTotals from "./BudgetTotals";
import BudgetTabs from "./BudgetTabs";
import axios from "axios";
import BudgetTable from "./BudgetTable";
import AddNew from "./AddNew";

function BudgetManger() {
  const [bills, setBills] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [everythingElse, setEverythingElse] = useState([]);
  const [newBill, setNewBill] = useState({});
  const [newExpense, setNewExpense] = useState({});
  const [newEverythingElse, setNewEverythingElse] = useState({});
  const [postRequestTarget, setpostRequestTarget] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);
  const billsNames = ["Bill Name", "Amount Due", "Merchant", "Date Due"];
  const expensesNames = ["Expense Name", "Amount Needed", "Date Needed By"];
  const everyThingElseNames = ["Name", "Amount", "Date"];

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

  const getDataFromAddNew = () => {};

  const dataForAddNew = () => {
    if (selectedTab === 0) {
      return <AddNew data={billsNames} getData={getDataFromAddNew} />;
    } else if (selectedTab === 1) {
      return <AddNew data={expensesNames} getData={getDataFromAddNew} />;
    } else {
      return <AddNew data={everyThingElseNames} getData={getDataFromAddNew} />;
    }
  };

  const addingNewRecord = async () => {
    const newRecord = axios.post(
      `https://api.airtable.com/v0/app3uPKaYM48ftzIO/${postRequestTarget}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

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

        {dataForAddNew()}
      </Paper>
    </>
  );
}

export default BudgetManger;
