import React, { useContext } from "react";
import { ThemeContext } from "./App";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

function CompanyDetails(props) {
  const themes = useContext(ThemeContext);
  const useStyles = makeStyles((theme) => ({
    divContainer: {
      display: "flex",
      flexDirection: "column",
      width: "80",
      alignItem: "center",
      alignContent: "center",
      textAlign: "center",
    },
    logo: {
      margin: "20px auto",
    },
    title: {
      margin: 0,
      color: "#68d388",
    },
    text: {
      margin: 0,
      color: themes === true ? "#FFFF" : "#393e46",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <div className={classes.divContainer}>
        <Avatar className={classes.logo} src={props.data.data.logo} />
        {/* <img srcSet={props.data.data.logo} alt="" className={classes.logo} /> */}
        <h3 className={classes.title}>
          {props.data.data.name} - {props.data.data.ticker}
        </h3>
        <p className={classes.text}>{props.data.data.finnhubIndustry}</p>
        <p className={classes.text}>{props.data.data.exchange}</p>
        <p className={classes.text}>IPO Date: {props.data.data.ipo}</p>
        <a href={props.data.data.weburl} className={classes.text}>
          website
        </a>
      </div>
    </>
  );
}

export default CompanyDetails;
