import { Container, Location, RightTabSide } from "./styles";
import logo from "../../assets/images/logo.svg";
import location from "../../assets/images/icons/location.svg";
import cart from "../../assets/images/icons/cart.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <RightTabSide>
        <Location>
          <img src={location} alt="Location" />
          <span>Jales, SP</span>
        </Location>
        <Link to="checkout">
          <img src={cart} alt="Cart" className="cart" />
        </Link>
      </RightTabSide>
    </Container>
  );
}
