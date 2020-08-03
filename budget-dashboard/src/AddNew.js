import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

function AddNew() {
  return (
    <>
      <form>
        <TextField id="standard-basic" label="Add New Item" />
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddIcon />
        </IconButton>
      </form>
    </>
  );
}

export default AddNew;
