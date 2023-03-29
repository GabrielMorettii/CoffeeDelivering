import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export default function Routes(){
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/success" component={Success} />
    </Switch>
  )
}