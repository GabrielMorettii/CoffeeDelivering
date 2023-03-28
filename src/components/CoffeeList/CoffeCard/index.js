import { CardBottom, CartPurchaseButton, Container, Counter, LabelsContainer } from "./styles";
import whiteCar from "../../../assets/images/icons/cart-white.svg";
import minusIcon from "../../../assets/images/icons/minus-bold.svg";
import plusIcon from "../../../assets/images/icons/plus-bold.svg";

export default function CoffeCard({
  image,
  title,
  description,
  labels,
  price,
}) {
  const formatPriceToBRL = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
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
            <img src={minusIcon} id="teste" alt="Minus Icon"/>
            <span>1</span>
            <img src={plusIcon} alt="Plus Icon" />
          </Counter>

          <CartPurchaseButton>
            <img src={whiteCar} alt="Cart Icon" />
          </CartPurchaseButton>
        </div>
      </CardBottom>
    </Container>
  );
}
