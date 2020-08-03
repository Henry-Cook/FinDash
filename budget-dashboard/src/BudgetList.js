import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import AddNew from "./AddNew";

function BudgetList(props) {
  const [checked, setChecked] = useState([0]);

  const data = props.data;

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      height: "50px",
    },
    item: {
      width: "100%",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <List className={classes.root}>
        {data.map((item) => (
          <ListItem
            key={item.id}
            button
            className={classes.item}
            onClick={handleToggle}
          >
            <ListItemIcon>
              <Checkbox edge="start" />
            </ListItemIcon>
            <ListItemText>{item.fields.name}</ListItemText>
          </ListItem>
        ))}
        <AddNew />
      </List>
    </>
  );
}

export default BudgetList;
