import './App.css';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom"

// import Navbar from './Navbar/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
// import Navbar from './components/Navbar/Navbar';
import FullShop from './pages/FullShopPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/shop">
          <FullShop />
        </Route>
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
