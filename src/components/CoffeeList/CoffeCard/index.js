import { Container, Counter } from "./styles";
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
  return (
    <Container>
      <img src={image} alt={title} />
      <div className="labels">
        {labels.map((label, index) => (
          <span key={`label-${index}`} className="coffee-label">
            {label}
          </span>
        ))}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="card-bottom">
        <h5>R${price}</h5>
        <div className="wrapper">
          <Counter>
            <img src={minusIcon} id="teste" alt="Minus Icon"/>
            <span>1</span>
            <img src={plusIcon} alt="Plus Icon" />
          </Counter>

          <button type="button">
            <img src={whiteCar} alt="Cart Icon" />
          </button>
        </div>
      </div>
    </Container>
  );
}
