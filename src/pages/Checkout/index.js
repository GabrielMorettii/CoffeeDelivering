import Header from "../../components/Header";
import Shipment from "../../components/Shipment";
import Payment from "../../components/Payment";
import Order from "../../components/Order";

import {
  CompleteOrderWrapper,
  ConfirmButton,
  ContainerForm,
  LineDivisor,
  Orders,
  PricesContainer,
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
          <div className="content">
            <Orders>
              <Order />
              <LineDivisor />
              <Order />
              <LineDivisor />
            </Orders>
            <PricesContainer>
              <div className="itens">
                <span>Total de Itens</span>
                <span>R$ 29,70</span>
              </div>
              <div className="delivery">
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </PricesContainer>
            <ConfirmButton>
              Confirmar Pedido
            </ConfirmButton>
          </div>
        </RequestDetails>
      </ContainerForm>
    </>
  );
}
