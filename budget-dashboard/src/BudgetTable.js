import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    width: "95%",
    margin: "0 auto",
    marginTop: "10px",
  },
});

function billsDisplay(data) {
  console.log(data.data);
  return data.data.map((item) => (
    <TableRow key={item.fields.id}>
      <TableCell component="th" scope="row">
        {item.fields.name}
      </TableCell>
      <TableCell component="th" scope="row">
        ${item.fields.amount}
      </TableCell>
      <TableCell component="th" scope="row">
        {item.fields.whomTo}
      </TableCell>
      <TableCell component="th" scope="row">
        {item.fields.dueDate}
      </TableCell>
    </TableRow>
  ));
}
function displayTheRest(data) {
  return data.data.map((item) => (
    <TableRow key={item.fields.id}>
      <TableCell component="th" scope="row">
        {item.fields.name}
      </TableCell>
      <TableCell component="th" scope="row">
        ${item.fields.amount}
      </TableCell>
      <TableCell component="th" scope="row">
        {item.fields.dateNeededBy}
      </TableCell>
    </TableRow>
  ));
}
function BudgetTable(props) {
  const classes = useStyles();
  if (props.data.length !== 0) {
    return (
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.header.map((item) => (
                <TableCell>{item}</TableCell>
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
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default BudgetTable;
