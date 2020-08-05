import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginTop: "10px",
    marginRight: "20px",
  },
}));

function ProfileBadge() {
  const classes = useStyles();
  return (
    <>
      <Avatar
        className={classes.large}
        alt="Remy Sharp"
        src="https://avatars1.githubusercontent.com/u/58886842?s=460&u=e69868586df6f4d3d8f6f629eeb26920d6e6aafd&v=4"
      />
    </>
  );
}

export default ProfileBadge;

//https://avatars1.githubusercontent.com/u/58886842?s=460&u=e69868586df6f4d3d8f6f629eeb26920d6e6aafd&v=4
