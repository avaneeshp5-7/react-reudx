import React from "react";
import Header from "./containers/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from "./containers/products";
import ProductDetails from "./containers/productDetails";

function App() {
  return (
    <div  style={{marginTop:50}}>
     <Router>
     <Header/>
     <Switch>
          <Route  path="/" exact component={Products}>
          </Route>
          <Route  path="/product/:productId" exact component={ProductDetails}>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
