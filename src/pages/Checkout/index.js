import Header from "../../components/Header";
import Shipment from "../../components/Shipment";
import Payment from "../../components/Payment";

import {
  CompleteOrderWrapper,
  ContainerForm,
  RequestDetails,
} from "./styles";

export default function Checkout() {
  return (
    <>
      <Header />
      <ContainerForm>
        <CompleteOrderWrapper>
          <h4>Complete seu pedido</h4>
          <Shipment />
          <Payment />
        </CompleteOrderWrapper>
        <RequestDetails>
          <h4>Cafés selecionados</h4>
        </RequestDetails>
      </ContainerForm>
    </>
  );
}
