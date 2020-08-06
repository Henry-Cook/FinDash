import React, { useContext } from "react";
import { ThemeContext } from "./App";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function BudgetTable(props) {
  function billsDisplay(data) {
    return (
      <>
        {data.data.map((item) => (
          <TableRow key={item.fields.id}>
            <TableCell
              className={classes.cell}
              key={item.fields.id}
              component="th"
              scope="row"
            >
              {item.fields.name}
            </TableCell>
            <TableCell
              className={classes.cell}
              key={item.fields.id}
              component="th"
              scope="row"
            >
              ${item.fields.amount}
            </TableCell>
            <TableCell
              className={classes.cell}
              key={item.fields.id}
              component="th"
              scope="row"
            >
              {item.fields.whomTo}
            </TableCell>
            <TableCell
              className={classes.cell}
              key={item.fields.id}
              component="th"
              scope="row"
            >
              {item.fields.dueDate}
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }
  function displayTheRest(data) {
    return data.data.map((item) => (
      <TableRow key={item.fields.id}>
        <TableCell
          className={classes.cell}
          key={item.fields.id}
          component="th"
          scope="row"
        >
          {item.fields.name}
        </TableCell>
        <TableCell
          className={classes.cell}
          key={item.fields.id}
          component="th"
          scope="row"
        >
          ${item.fields.amount}
        </TableCell>
        <TableCell
          className={classes.cell}
          key={item.fields.id}
          component="th"
          scope="row"
        >
          {item.fields.dateNeededBy}
        </TableCell>
      </TableRow>
    ));
  }

  const theme = useContext(ThemeContext);

  const useStyles = makeStyles({
    table: {
      minWidth: 100,
      minHeight: 100,
      width: "95%",
      margin: "0 auto",
      marginTop: "10px",
      backgroundColor: theme === true ? "#393e46" : "#FFFF",
      border: theme === true ? "solid 1px #222831" : "none",
    },
    loading: {
      color: theme === true ? "#FFFF" : "#393e46",
    },
    cell: {
      color: theme === true ? "#FFFF" : "#393e46",
    },
  });

  const classes = useStyles();
  if (props.data.length !== 0) {
    return (
      <>
        <TableContainer className={classes.table} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {props.header.map((item) => (
                  <TableCell className={classes.cell} key={item}>
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.header.length === 4
                ? billsDisplay(props)
                : displayTheRest(props)}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  } else {
    return <p className={classes.loading}>Loading...</p>;
  }
}

export default BudgetTable;
