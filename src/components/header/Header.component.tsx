import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { Logo } from '../../assets/svgs';
import firebase, { auth } from '../../firebase/firebase.utils';
interface IProps {
  currentUser: firebase.User | undefined;
}

const Header: React.FC<IProps> = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <div
          className="option"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            console.log(currentUser);
            return auth.signOut();
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGNIN
        </Link>
      )}
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
