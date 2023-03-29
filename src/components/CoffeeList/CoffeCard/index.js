import { useCallback } from "react";

import {
  CardBottom,
  CartPurchaseButton,
  Container,
  LabelsContainer,
} from "./styles";

import { ReactComponent as Cart } from "../../../assets/images/icons/shopping-cart-fill.svg";

import Counter from "../../Counter";

export default function CoffeCard({
  image,
  title,
  description,
  labels,
  price,
}) {
  const formatPriceToBRL = useCallback((price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }, []);

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
          <Counter />
          <CartPurchaseButton>
            <Cart />
          </CartPurchaseButton>
        </div>
      </CardBottom>
    </Container>
  );
}
