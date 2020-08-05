import React from "react";

import TabPanel from "./TabPanel";

function Navbar() {
  return (
    <>
      <div className="nav-bar-wrapper">
        <h1>Budget Dash</h1>
        <TabPanel />
      </div>
    </>
  );
}

export default Navbar;
