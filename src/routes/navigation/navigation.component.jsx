import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CrwnLogo from "../../assets/crown1.png";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={CrwnLogo} alt="" className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          <NavLink to="/auth">Contact Us</NavLink>

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
