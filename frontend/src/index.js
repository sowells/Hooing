import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MenuBar from "./components/MenuBar";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import Detail from "./pages/detail";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={MenuBar} />
          <Route path="/men" component={Detail} />
        </div>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
// ReactDOM.render(<Detail />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
