import './App.css';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom"

// import Navbar from './Navbar/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Cart from './Cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact>
         
          <HomePage />
        </Route>
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
