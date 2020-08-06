import React, { useContext } from "react";
import TabPanel from "./TabPanel";
import Plug from "./Plug";
import { ThemeContext } from "./App";

function Navbar() {
  const themes = useContext(ThemeContext);
  return (
    <>
      <div
        className="nav-bar-wrapper"
        style={{
          backgroundColor: themes === true ? "#393e46" : "#ffffff",
          borderRight:
            themes === true
              ? "1px solid #222831"
              : "1px solid rgb(214, 211, 211)",
        }}
      >
        <TabPanel />
        <Plug />
      </div>
    </>
  );
}

export default Navbar;
