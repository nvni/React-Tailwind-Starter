import React, { Suspense } from "react";

import {
  Route,
  withRouter,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages";
import ErrorPage from "./pages/error";

function App() {
  return (
    <div>
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <Route path={`/`} exact render={(props) => <Home {...props} />} />
            <Route
              path="/error"
              exact
              render={(props) => <ErrorPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}
export default App;
