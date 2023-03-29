import { Container } from "./styles";

import { ReactComponent as Minus } from "../../assets/images/icons/minus-bold.svg";
import { ReactComponent as Plus } from "../../assets/images/icons/plus-bold.svg";
import { useState } from "react";

export default function Counter() {
  const [itemCounter, setItemCounter] = useState(1);

  const handlePlusClick = () => {
    setItemCounter((prevState) => prevState + 1);
  };

  const handleMinusClick = () => {
    if (itemCounter === 1) return;

    setItemCounter((prevState) => prevState - 1);
  };

  return (
    <Container>
      <Minus onClick={handleMinusClick} />
      <span>{itemCounter}</span>
      <Plus onClick={handlePlusClick} />
    </Container>
  );
}
