import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { Logo } from '../../assets/svgs';
import { auth } from '../../firebase/firebase.utils';
import { IRootState, IUser } from '../../types';
import { useSelector } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { selectCurrentUser } from '../../redux/User/User.selector';
import { selectCartHidden } from '../../redux/Cart/Cart.selectors';

const Header: React.FC<IUser | undefined> = () => {
  const currentUser = useSelector((state: IRootState) =>
    selectCurrentUser(state)
  );

  const isCartHidden = useSelector((state: IRootState) =>
    selectCartHidden(state)
  );

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

        <CartIcon />
      </div>
      {isCartHidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
