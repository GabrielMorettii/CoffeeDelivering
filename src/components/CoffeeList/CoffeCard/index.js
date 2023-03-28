import { useCallback, useState } from "react";

import {
  CardBottom,
  CartPurchaseButton,
  Container,
  Counter,
  LabelsContainer,
} from "./styles";

import {ReactComponent as Cart} from "../../../assets/images/icons/shopping-cart-fill.svg";
import {ReactComponent as Minus} from "../../../assets/images/icons/minus-bold.svg";
import {ReactComponent as Plus} from "../../../assets/images/icons/plus-bold.svg";

export default function CoffeCard({
  image,
  title,
  description,
  labels,
  price,
}) {
  const [itemCounter, setItemCounter] = useState(1);

  const formatPriceToBRL = useCallback((price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }, []);

  const handlePlusClick = () => {
    setItemCounter((prevState) => prevState + 1);
  };

  const handleMinusClick = () => {
    if (itemCounter === 1) return;

    setItemCounter((prevState) => prevState - 1);
  };

  return (
    <Container>
      <img src={image} alt={title} />
      <LabelsContainer>
        {labels.map((label, index) => (
          <span key={`label-${index}`} className="coffee-label">
            {label}
          </span>
        ))}
      </LabelsContainer>
      <h4>{title}</h4>
      <p>{description}</p>
      <CardBottom>
        <h5>{formatPriceToBRL(price)}</h5>
        <div className="wrapper">
          <Counter>
            <Minus onClick={handleMinusClick} />
            <span>{itemCounter}</span>
            <Plus onClick={handlePlusClick} />
          </Counter>

          <CartPurchaseButton>
            <Cart />
          </CartPurchaseButton>
        </div>
      </CardBottom>
    </Container>
  );
}
