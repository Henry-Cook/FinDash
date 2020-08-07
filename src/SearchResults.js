import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./App";
import CompanyDetails from "./CompanyDetails";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const _ = require("lodash");

function SearchResults(props) {
  const themes = useContext(ThemeContext);
  const [prices, setPrices] = useState({});
  const matches = useMediaQuery("(max-width:850px)");
  const nextPoint = useMediaQuery("(max-width:500px)");
  const thirdPoint = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    setPrices(props.data.data);
  }, [props.search]);

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      width: matches === true ? "80%" : "80",
      alignItem: "center",
      textAlign: "center",
      marginRight: "20px",
      backgroundColor: themes === true ? "#393e46" : "#FFFFFF",
      border: themes === true ? "solid 1px #222831" : "none",
    },
    table: {
      display: "flex",
      flexDirection: "column",
      minWidth: 50,
      alignItem: "center",
      textAlign: "center",
    },
    tabs: {
      display: "flex",
      flexDirection: "row",
      height: "20px",
    },
    cell: {
      color: themes === true ? "#FFFF" : "#393e46",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <CompanyDetails data={props.companyData} />
        <TableContainer component={classes.table}>
          <Table minWidth="50">
            {/* <TableHead> */}
            <TableRow>
              {nextPoint === false && (
                <>
                  <TableCell className={classes.cell} align="center">
                    Current
                  </TableCell>
                  <TableCell className={classes.cell} align="center">
                    High
                  </TableCell>
                  <TableCell className={classes.cell} align="center">
                    Low
                  </TableCell>
                  <TableCell className={classes.cell} align="center">
                    Open
                  </TableCell>
                  {thirdPoint === false && (
                    <TableCell className={classes.cell} align="center">
                      Previous Close
                    </TableCell>
                  )}
                </>
              )}
              {nextPoint === true && (
                <>
                  <TableCell className={classes.cell} align="center">
                    Current Price
                  </TableCell>
                </>
              )}
            </TableRow>
            {/* </TableHead> */}
            <TableBody>
              <TableRow>
                {!_.isEmpty(prices) && (
                  <>
                    {nextPoint === false && (
                      <>
                        <TableCell className={classes.cell} align="center">
                          ${prices.c}
                        </TableCell>
                        <TableCell className={classes.cell} align="center">
                          ${prices.h}
                        </TableCell>
                        <TableCell className={classes.cell} align="center">
                          ${prices.l}
                        </TableCell>
                        <TableCell className={classes.cell} align="center">
                          ${prices.o}
                        </TableCell>
                        {thirdPoint === false && (
                          <TableCell className={classes.cell} align="center">
                            ${prices.pc}
                          </TableCell>
                        )}
                      </>
                    )}
                    {nextPoint === true && (
                      <>
                        <TableCell className={classes.cell} align="center">
                          ${prices.c}
                        </TableCell>
                      </>
                    )}
                  </>
                )}
              </TableRow>
            </TableBody>
          </Table>

          {nextPoint === true && <></>}
        </TableContainer>
      </Paper>
    </>
  );
}

export default SearchResults;
