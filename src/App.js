import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header';
import Checkout from "./pages/Checkout";
import Home from "./pages/HomePage";
import Products from "./pages/Products";
import Popup from "./pages/popup";




function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/popup" component={Popup}/>
        
       
        </Switch>
      </Router>
    </div>
  );
}

export default App;
