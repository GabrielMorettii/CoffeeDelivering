import { forwardRef, useCallback, useImperativeHandle, useState } from "react";

import { ReactComponent as Pin } from "../../assets/images/icons/map-pin-line-regular.svg";
import {
  Container,
  FormRow,
  Input,
  InputsContainer,
  OptionalInputContainer,
} from "./styles";
import TitleWrapper from "../TitleWrapper";

const Shipment = forwardRef((_, ref) => {
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useImperativeHandle(ref, () => ({
   houseAddress: `${street}, ${number}`,
   stateAddress: `${neighborhood} - ${city}, ${state}`
  }), [street, number, city, state, neighborhood])

  const handleOptionalInputFocus = useCallback((event) => {
    event.target.parentNode.style.borderColor = "#C47F17";
  }, []);

  const handleOptionalInputBlur = useCallback((event) => {
    event.target.parentNode.style.borderColor = "";
  }, []);


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
        <Input
          type="text"
          placeholder="CEP"
          value={cep}
          onChange={(event) => setCep(event.target.value)}
        />

        <Input
          type="text"
          placeholder="Rua"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        />

        <FormRow>
          <Input
            type="text"
            placeholder="Número"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
          <OptionalInputContainer className="optional-input">
            <input
              type="text"
              placeholder="Complemento"
              onFocus={handleOptionalInputFocus}
              onBlur={handleOptionalInputBlur}
              value={complement}
              onChange={(event) => setComplement(event.target.value)}
            />
            <span>Optional</span>
          </OptionalInputContainer>
        </FormRow>

        <FormRow>
          <Input
            type="text"
            placeholder="Bairro"
            value={neighborhood}
            onChange={(event) => setNeighborhood(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <Input
            type="text"
            placeholder="UF"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </FormRow>
      </InputsContainer>
    </Container>
  );
});

export default Shipment;