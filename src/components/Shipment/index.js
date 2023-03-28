import { ReactComponent as Pin } from "../../assets/images/icons/map-pin-line-regular.svg";
import {
  Container,
  FormRow,
  Input,
  InputsContainer,
  OptionalInputContainer,
} from "./styles";
import TitleWrapper from "../TitleWrapper";

export default function Shipment() {
  const handleOptionalInputFocus = (event) => {
    event.target.parentNode.style.borderColor = "#C47F17";
  };

  const handleOptionalInputBlur = (event) => {
    event.target.parentNode.style.borderColor = "";
  };

  return (
    <Container>
      <TitleWrapper
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        imgColor="yellow"
      >
        <Pin />
      </TitleWrapper>
      <InputsContainer>
        <Input type="text" placeholder="CEP" />

        <Input type="text" placeholder="Rua" />

        <FormRow>
          <Input type="text" placeholder="Número" />
          <OptionalInputContainer className="optional-input">
            <input
              type="text"
              placeholder="Complemento"
              onFocus={handleOptionalInputFocus}
              onBlur={handleOptionalInputBlur}
            />
            <span>Optional</span>
          </OptionalInputContainer>
        </FormRow>

        <FormRow>
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
          <Input type="text" placeholder="UF" />
        </FormRow>
      </InputsContainer>
    </Container>
  );
}
