import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "components/Navbar";
import Home from "components/Home";
import Recipes from "components/Recipes";
import Supplies from "components/Supplies";
import Settings from "components/Settings";

const App: React.FC = () => {
  useEffect(() => {
    const html = document.querySelector("html");

    if (html) {
      html.classList.add("dark");
      html.style.backgroundColor = "black";
    }
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <div className="container mx-auto my-5">
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Route path="/supplies">
              <Supplies />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
