import React, { Component } from "react";
import "./index.css";
import MenuBar from "./components/MenuBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/product/ProductDetail";
import ShirtsCollection from "./pages/ShirtsCollection";
import ProductList from "./components/product/ProductList";
import Product from "./components/product/Product";
import Login from "./pages/Login";
import AuthSuccess from "./pages/AuthSuccess";

class App extends Component {
  initFbSdk() {
    window.fbAsyncInit = function() {
      console.log('INIT FB Async');
      window.FB.init({
        appId: '772029506498492',
        cookie: true,
        xfbml: true,
        status: true,
        version: 'v3.2'
      });
      window.FB.AppEvents.logPageView();
    };
  }

  loadFbSdk() {
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
      console.log('Load FB SDK.');
    })(document, 'script', 'facebook-jssdk');
  }

  componentDidMount() {
    console.log('App Did Mount');
    this.loadFbSdk();
    this.initFbSdk();
  }

  render() {
    return (
      <div>
        {
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/success" component={AuthSuccess} />
                <Route path="/login" component={Login} />
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
}

export default App;
