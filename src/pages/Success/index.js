import Header from "../../components/Header";

import { Container, ContentWrapper, TextContentContainer } from "./styles";

import ManOverBike from "../../assets/images/Illustration.svg";

import { ReactComponent as Clock } from "../../assets/images/icons/timer-fill.svg";
import { ReactComponent as MapPin } from "../../assets/images/icons/map-pin-fill.svg";
import { ReactComponent as Money } from "../../assets/images/icons/money-regular.svg";

export default function Success({location: {state}}) {
  return (
    <>
      <Header />
      <Container>
        <ContentWrapper>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <div className="border-wrapper">
            <TextContentContainer>
              <div className="location">
                <MapPin />
                <div className="location-text">
                  <p>
                    Entrega em Rua <span>{state.houseAddress}</span>
                  </p>
                  <p>{state.stateAddress}</p>
                </div>
              </div>
              <div className="time">
                <Clock />
                <div className="time-text">
                  <p>Previsão de entrega</p>
                  <p>
                    <span>20 min - 30 min</span>
                  </p>
                </div>
              </div>
              <div className="payment">
                <Money />
                <div className="payment-text">
                  <p>Pagamento na entrega</p>
                  <p>
                    <span>{state.paymentMethod}</span>
                  </p>
                </div>
              </div>
            </TextContentContainer>
          </div>
        </ContentWrapper>
        <img src={ManOverBike} alt="Man over a bike" />
      </Container>
    </>
  );
}
