import React, { useContext } from "react";
import { ThemeContext } from "./App";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness5Icon from "@material-ui/icons/Brightness7";
import IconButton from "@material-ui/core/IconButton";

function Themes(props) {
  const themes = useContext(ThemeContext);

  if (themes === false) {
    return (
      <>
        <IconButton>
          <Brightness2Icon fontSize="large" onClick={props.change} />
        </IconButton>
      </>
    );
  } else {
    return (
      <>
        <IconButton>
          <Brightness5Icon
            style={{ color: "#ffb766" }}
            fontSize="large"
            onClick={props.change}
          />
        </IconButton>
      </>
    );
  }
}

export default Themes;
