import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage'
import Products from './pages/products';
import Dashboard from './pages/dashboard';
import Cart from './pages/cart';
import ErrorPage from './pages/errorPage';
import Events from './pages/events';
import Newsletter from './components/newsletter';
import WasteDataFetcher from './components/wasteDataFetcher';
import CheckoutForm from './components/checkoutForm';
import CollectionMap from './pages/collectionMap';



function App() {
  
  return (

    <Router>  
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={Products} />
        <Route path="/events" component={Events} />
        <Route path="/cart" component={Cart} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/newsletter" component={Newsletter} />
        <Route path="/sensor" component={WasteDataFetcher} />
        <Route path="/checkout" component={CheckoutForm} />
        <Route path="/map" component={CollectionMap} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>

    // <main className='font-custom'>
    //   < Homepage />
    // </main>
  );
}


export default App;
