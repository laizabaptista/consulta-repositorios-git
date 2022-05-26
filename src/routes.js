import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Repositories from "./pages/Repositories";
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component= {Home} />
        <Route path="/repositories" component={Repositories} />
      </Switch>
    </BrowserRouter>
  )
}