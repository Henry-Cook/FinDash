import React, { useContext } from "react";
import { ThemeContext } from "./App";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function AddNew(props) {
  const themes = useContext(ThemeContext);

  const useStyles = makeStyles((theme) => ({
    newForm: {
      display: "flex",
      flexDirection: "column",
    },
    button: {
      marginTop: "20px",
      width: "100%",
      borderTopRightRadius: "0%",
      borderTopLeftRadius: "0%",
      backgroundColor: "#68d388",
    },
    root: {
      margin: "0 5px 0 5px",
      color: themes === true ? "#fff" : "#000 ",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <form className={classes.newForm} onSubmit={props.getData}>
        <div className="inputDirection">
          {props.data.map((item) => {
            return (
              <TextField
                InputProps={{
                  className: classes.root,
                }}
                key={item}
                id="standard-basic"
                label={item}
                onChange={(e) => {
                  props.handle(e, item);
                }}
                onBlur={() => {
                  props.blur();
                }}
                required={true}
              />
            );
          })}
        </div>
        <Button className={classes.button} variant="contained" type="submit">
          Add
        </Button>
      </form>
    </>
  );
}

export default AddNew;
