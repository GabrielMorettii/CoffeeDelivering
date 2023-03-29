import { Container, ContentWrapper, RemoveButton } from "./styles";

import Counter from "../../components/Counter";

import expresso from '../../assets/images/coffees/Expresso.svg'
import {ReactComponent as Trash} from '../../assets/images/icons/trash-regular.svg'

export default function Order() {
  return (
    <Container>
      <img src={expresso} alt="Coffe" />
      <ContentWrapper>
        <p>Expresso Tradicional</p>
        <div className="actions">
          <Counter />
          <RemoveButton>
            <Trash />
            <span>Remover</span>
          </RemoveButton>
        </div>
      </ContentWrapper>
      <span>R$ 9,90</span>
    </Container>
  );
}
