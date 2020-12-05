import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/shop.component';
import SignInSignup from './pages/SignInSingup/SignInSingup.component';
import Header from './components/Header/Header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { IUser } from './types';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();

  useEffect(() => {
    let unsubscribeFromAuth: () => void;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user !== null) {
        const userRef = await createUserProfileDocument(user, undefined);
        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else setCurrentUser(undefined);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignup} />
      </Switch>
    </div>
  );
};

export default App;
