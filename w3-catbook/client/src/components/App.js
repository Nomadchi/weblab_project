import React from "react";
import NavBar from "./modules/NavBar.js";
import Profile from "./pages/Profile.js";
import Feed from "./pages/Feed.js";
import { Router } from "@reach/router"
import NotFound from "./pages/NotFound.js"

import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a function.
 */
const App = () => {
  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <NavBar />
      <div className="App-container">
        {/* <Profile /> */}
        <Router>
          <Feed path="/"/>
          <Profile path="/profile" />
          <NotFound default />
        </Router>
        
      </div>
    </>
  );
};

export default App;
