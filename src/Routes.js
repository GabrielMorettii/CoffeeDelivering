import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

export default function Routes(){
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  )
}