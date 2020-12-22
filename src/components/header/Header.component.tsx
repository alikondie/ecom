import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { Logo } from '../../assets/svgs';
import { auth } from '../../firebase/firebase.utils';
import { IRootState, IUser } from '../../types';
import { useSelector } from 'react-redux';

const Header: React.FC<IUser | undefined> = () => {
  const currentUser = useSelector(
    (state: IRootState) => state.user.currentUser
  );
  console.log(currentUser);
  return (
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
};

export default Header;
