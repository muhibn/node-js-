import React from "react";
import Home from "./pages/Home";
import Create from "./pages/Create";
import BlogDetails from "./pages/BlogDetails";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Route, Switch } from  "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="routers">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  exact path="/Create">
              <Create />
            </Route>
            <Route   path="/blog/:id">
              <BlogDetails></BlogDetails>
            </Route>
          </Switch>
  </div>

      </div>
    </Router>
  );
}

export default App;
