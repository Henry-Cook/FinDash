import React, { useState, useEffect } from "react";
import { Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import SearchResults from "./SearchResults";
const _ = require("lodash");

function MarketWatch() {
  const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState("AAPL");
  const [stockPrice, setStockPrice] = useState({});

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios(
        `https://finnhub.io/api/v1/quote?symbol=${search}&token=${process.env.REACT_APP_FINNHUB_KEY}`
      );
      setStockPrice(stockPrice);
    };
    apiCall();
  }, [search]);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(userInput);
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      width: "95%",
      height: "100%",
      alignItems: "center",
    },
    input: {
      width: "30%",
      marginTop: "20px",
      marginRight: "10px",
    },
    button: {
      width: "10%",
      marginTop: "20px",
    },
    formStyles: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <form className={classes.formStyles} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Symbol"
            variant="outlined"
            onChange={handleInput}
          />
          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Search
          </Button>
        </form>

        <SearchResults symbol={search} data={stockPrice} />
      </Paper>
    </>
  );
}

export default MarketWatch;
