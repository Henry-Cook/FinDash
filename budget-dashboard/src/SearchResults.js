import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function SearchResults(props) {
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
  console.log(props);
  const classes = useStyles();
  return (
    <>
      <TableContainer component={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{props.symbol}</TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell>Current</TableCell>
              <TableCell>High</TableCell>
              <TableCell>Low</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>Previous Close</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="right">{props.data.c}</TableCell>
              <TableCell align="right">{props.data.h}</TableCell>
              <TableCell align="right">{props.data.l}</TableCell>
              <TableCell align="right">{props.data.o}</TableCell>
              <TableCell align="right">{props.data.pc}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default SearchResults;
