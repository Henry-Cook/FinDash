import React, { useState, useEffect } from "react";
import CompanyDetails from "./CompanyDetails";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const _ = require("lodash");

function SearchResults(props) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    setPrices(props.data.data);
  }, [props.search]);

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      width: "80",
      alignItem: "center",
      textAlign: "center",
      marginRight: "20px",
    },
    table: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
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
  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <CompanyDetails data={props.companyData} />
        <TableContainer component={classes.table}>
          <Table>
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
                {!_.isEmpty(prices) && (
                  <>
                    <TableCell align="right">${prices.c}</TableCell>
                    <TableCell align="right">${prices.h}</TableCell>
                    <TableCell align="right">${prices.l}</TableCell>
                    <TableCell align="right">${prices.o}</TableCell>
                    <TableCell align="right">${prices.pc}</TableCell>
                  </>
                )}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default SearchResults;
