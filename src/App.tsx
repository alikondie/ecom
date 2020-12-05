import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/shop.component';
import SignInSignup from './pages/SignInSingup/SignInSingup.component';
import Header from './components/Header/Header.component';
import firebase, { auth } from './firebase/firebase.utils';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<firebase.User | undefined>();

  useEffect(() => {
    let unsubscribeFromAuth: () => void;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user !== null) setCurrentUser(user);
      else setCurrentUser(undefined);
      console.log('app side', currentUser);
    });
    console.log(currentUser);
    return () => {
      //console.log(currentUser);
      unsubscribeFromAuth();
    };
  }, [currentUser]);
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
