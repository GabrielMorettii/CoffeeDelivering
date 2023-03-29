import { Container } from "./styles";

import { ReactComponent as Minus } from "../../assets/images/icons/minus-bold.svg";
import { ReactComponent as Plus } from "../../assets/images/icons/plus-bold.svg";

export default function Counter({handleMinusClick, handlePlusClick, itemCounter}) { 
  return (
    <Container>
      <Minus onClick={handleMinusClick} />
      <span>{itemCounter}</span>
      <Plus onClick={handlePlusClick} />
    </Container>
  );
}
