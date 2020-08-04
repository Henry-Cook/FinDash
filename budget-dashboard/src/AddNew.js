import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

function AddNew(props) {
  const [input1, updateInput1] = useState("");
  const [input2, updateInput2] = useState("");
  const [input3, updateInput3] = useState("");
  const [input4, updateInput4] = useState("");
  const [whichRecord, updateWhichRecord] = useState("");

  const handleChange = (e, index) => {
    console.log(e.target.value);
    console.log(index);
  };

  const useStyles = makeStyles((theme) => ({
    new: {
      marginTop: "20px",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    newForm: {
      display: "flex",
      flexDirection: "column",
    },
    button: {
      marginTop: "20px",
    },
  }));

  const classes = useStyles();
  let counter = 0;
  return (
    <>
      <Accordion className={classes.new}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Add New Item</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <form className={classes.newForm}>
            {props.data.map((item) => {
              return (
                <TextField
                  id="standard-basic"
                  label={item}
                  onChange={(e) => {
                    handleChange(e, item);
                  }}
                />
              );
            })}
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AddNew;
