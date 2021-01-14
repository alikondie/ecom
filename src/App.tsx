/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/shop.component';
import SignInSignup from './pages/SignInSingup/SignInSingup.component';
import Header from './components/Header/Header.component';
import { IRootState } from './types';
import CheckoutPage from './components/Checkout/Checkout.component';

const App: React.FC = () => {
  const currentUser = useSelector(
    (state: IRootState) => state.user.currentUser
  );
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignup />)}
        />
      </Switch>
    </div>
  );
};

export default App;
