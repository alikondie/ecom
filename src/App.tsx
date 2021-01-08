/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/shop.component';
import SignInSignup from './pages/SignInSingup/SignInSingup.component';
import Header from './components/Header/Header.component';
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from './firebase/firebase.utils';
import { useEffect } from 'react';
import { setCurrentUser } from './redux/User/User.actions';
import { IRootState } from './types';
import CheckoutPage from './components/Checkout/Checkout.component';
import { selectioCollectionsForPreview } from './redux/Shop/Shop.selector';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const collectionsArray = useSelector((state: IRootState) =>
    selectioCollectionsForPreview(state)
  );
  const currentUser = useSelector((state: IRootState) => setCurrentUser(state));
  useEffect(() => {
    let unsubscribeFromAuth: () => void;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user !== null) {
        const userRef = await createUserProfileDocument(user, undefined);
        userRef?.onSnapshot((snapShot) => {
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
        });
      } else dispatch(setCurrentUser(null));
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);
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
