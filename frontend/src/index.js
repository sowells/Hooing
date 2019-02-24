import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MenuBar from "./components/MenuBar";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./pages/detail";
import ShirtsCollection from "./pages/ShirtsCollection";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";

function Main() {
  return (
    <div>
      {
        <BrowserRouter>
          <div>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={MenuBar} />
            </Switch>
            <Switch>
              <Route
                path="/collection/:category/products/:product"
                component={Product}
              />
              <Route path="/collection/:category" component={ProductList} />
            </Switch>
            <Route path="/detailTest" component={Detail} />
            <Route path="/kimHooing" component={ShirtsCollection} />
          </div>
        </BrowserRouter>
      }
      {/*<Detail />*/}
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
// ReactDOM.render(<Detail />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
