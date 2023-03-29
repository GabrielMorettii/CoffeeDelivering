import { Container, ContentWrapper, RemoveButton } from "./styles";

import Counter from "../../components/Counter";

import { ReactComponent as Trash } from "../../assets/images/icons/trash-regular.svg";

import formatPriceToBRL from "../../utils/formatPriceToBRL";

import useItemCounter from "../../hooks/useItemCounter";
import { useEffect } from "react";

export default function Order({ order, onRemove, onEdit }) {
  const { itemCounter, handleMinusClick, handlePlusClick } = useItemCounter({
    initialValue: order.itemCounter,
  });

  useEffect(() => {
    onEdit({ id: order.id, itemCounter });
  }, [itemCounter, onEdit, order.id]);

  return (
    <Container>
      <img src={order.image} alt="Coffe" />
      <ContentWrapper>
        <p>{order.title}</p>
        <div className="actions">
          <Counter
            itemCounter={itemCounter}
            handleMinusClick={handleMinusClick}
            handlePlusClick={handlePlusClick}
          />
          <RemoveButton onClick={() => onRemove(order)}>
            <Trash />
            <span>Remover</span>
          </RemoveButton>
        </div>
      </ContentWrapper>
      <span>{formatPriceToBRL(order.price)}</span>
    </Container>
  );
}
