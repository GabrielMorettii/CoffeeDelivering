import { useContext } from "react";

import {
  CardBottom,
  CartPurchaseButton,
  Container,
  LabelsContainer,
} from "./styles";

import { ReactComponent as Cart } from "../../../assets/images/icons/shopping-cart-fill.svg";

import Counter from "../../Counter";

import { OrdersContext } from "../../../context/OrdersContext";

import formatPriceToBRL from "../../../utils/formatPriceToBRL";

import useItemCounter from "../../../hooks/useItemCounter";

export default function CoffeCard({
  coffee: { id, image, name, description, labels, price },
}) {
  const { onAddOrder } = useContext(OrdersContext);
  const { itemCounter, handleMinusClick, handlePlusClick } = useItemCounter();

  return (
    <Container>
      <img src={image} alt={name} />
      <LabelsContainer>
        {labels.map((label, index) => (
          <span key={`label-${index}`} className="coffee-label">
            {label}
          </span>
        ))}
      </LabelsContainer>
      <h4>{name}</h4>
      <p>{description}</p>
      <CardBottom>
        <h5>{formatPriceToBRL(price)}</h5>
        <div className="wrapper">
          <Counter
            handleMinusClick={handleMinusClick}
            handlePlusClick={handlePlusClick}
            itemCounter={itemCounter}
          />
          <CartPurchaseButton
            onClick={() =>
              onAddOrder({ id, title: name, image, itemCounter, price })
            }
          >
            <Cart />
          </CartPurchaseButton>
        </div>
      </CardBottom>
    </Container>
  );
}
