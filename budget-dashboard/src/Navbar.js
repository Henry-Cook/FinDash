import React from "react";
import TabPanel from "./TabPanel";
import Plug from "./Plug";

function Navbar() {
  return (
    <>
      <div className="nav-bar-wrapper">
        <TabPanel />
        <Plug />
      </div>
    </>
  );
}

export default Navbar;
