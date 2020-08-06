import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function AddNew(props) {
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
    inputs: {
      margin: "0 5px 0 5px",
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
                align="center"
                className={classes.inputs}
                key={item}
                id="standard-basic"
                label={item}
                onChange={(e) => {
                  props.handle(e, item);
                }}
                onBlur={() => {
                  props.blur();
                }}
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
