import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

import "./assets/css/main.css";

import HomePage from "./modules/common/pages/homepage.page";

function App() {
  const queryCache = new QueryCache();

  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Router>
          <div className="app h-full">
            <Switch>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryCacheProvider>
    </>
  );
}

export default App;
