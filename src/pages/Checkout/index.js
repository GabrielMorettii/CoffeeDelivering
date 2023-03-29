import { Fragment, useContext, useMemo } from "react";

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
import { OrdersContext } from "../../context/OrdersContext";
import formatPriceToBRL from "../../utils/formatPriceToBRL";

export default function Checkout() {
  const { orders, onRemove, onEdit } = useContext(OrdersContext);

  const ordersRendered = useMemo(() => {
    return orders.map((order) => (
      <Fragment key={order.id}>
        <Order order={order} onRemove={onRemove} onEdit={onEdit} />
        <LineDivisor />
      </Fragment>
    ));
  }, [orders, onRemove, onEdit]);

  const ordersTotalPrice = useMemo(() => {
   return orders.reduce((prev, order) => prev + Number(order.price) * order.itemCounter, 0);
  }, [orders]);

  const deliveryPrice = useMemo(() => 3.50,[])

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
            <Orders>{ordersRendered}</Orders>
            <PricesContainer>
              <div className="itens">
                <span>Total de Itens</span>
                <span>{formatPriceToBRL(ordersTotalPrice || 0)}</span>
              </div>
              <div className="delivery">
                <span>Entrega</span>
                <span>{formatPriceToBRL(deliveryPrice)}</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>{formatPriceToBRL((ordersTotalPrice + deliveryPrice) || deliveryPrice)}</span>
              </div>
            </PricesContainer>
            <ConfirmButton>Confirmar Pedido</ConfirmButton>
          </div>
        </RequestDetails>
      </ContainerForm>
    </>
  );
}
