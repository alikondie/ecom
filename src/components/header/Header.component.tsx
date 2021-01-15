import React from 'react';
import './Header.styles.scss';
import { Logo } from '../../assets/svgs';
import { auth } from '../../firebase/firebase.utils';
import { IRootState, IUser } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { selectCurrentUser } from '../../redux/User/User.selector';
import { selectCartHidden } from '../../redux/Cart/Cart.selectors';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './Header.styles';
import { signOutRequest } from '../../redux/User/User.actions';

const Header: React.FC<IUser | undefined> = () => {
  const currentUser = useSelector((state: IRootState) =>
    selectCurrentUser(state)
  );
  const dispatch = useDispatch();
  const isCartHidden = useSelector((state: IRootState) =>
    selectCartHidden(state)
  );

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <OptionLink
            as="div"
            className="option"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              dispatch(signOutRequest());
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGNIN</OptionLink>
        )}
        <OptionLink className="option" to="/contact">
          CONTACT
        </OptionLink>

        <CartIcon />
      </OptionsContainer>
      {isCartHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
