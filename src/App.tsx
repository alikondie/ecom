/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/shop.component';
import SignInSignup from './pages/SignInSingup/SignInSingup.component';
import Header from './components/Header/Header.component';
import { IRootState } from './types';
import CheckoutPage from './components/Checkout/Checkout.component';
import { useEffect } from 'react';
import { checkUserSession } from './redux/User/User.actions';
import { GlobalStyle } from './global.styles';
const App: React.FC = () => {
  const currentUser = useSelector(
    (state: IRootState) => state.user.currentUser
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
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
