import { Container, Location, RightTabSide } from "./styles";

import logo from "../../assets/images/logo.svg";
import { ReactComponent as Pin } from "../../assets/images/icons/map-pin-fill.svg";
import { ReactComponent as Cart } from "../../assets/images/icons/shopping-cart-fill.svg";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <RightTabSide>
        <Location>
          <Pin />
          <span>Jales, SP</span>
        </Location>
        <Link to="checkout">
          <Cart />
        </Link>
      </RightTabSide>
    </Container>
  );
}
