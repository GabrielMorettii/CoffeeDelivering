import Header from "../../components/Header";

import {ReactComponent as Cart} from "../../assets/images/icons/shopping-cart-fill.svg";
import {ReactComponent as Box} from "../../assets/images/icons/package-fill.svg";
import {ReactComponent as Clock} from "../../assets/images/icons/timer-fill.svg";
import {ReactComponent as Mug} from "../../assets/images/icons/coffee-fill.svg";
import coffee  from "../../assets/images/coffee.svg";

import {
  ContentWrapper,
  IconItem,
  IconsWrapper,
  IntroContainer,
  Title,
} from "./styles";
import CoffeeList from "../../components/CoffeeList";

export default function Home() {
  return (
    <>
      <Header />
      <IntroContainer>
        <ContentWrapper>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <IconsWrapper>
            <IconItem>
              <Cart className="cart" />
              <span>Compra simples e segura</span>
            </IconItem>
            <IconItem>
              <Box className="box" />
              <span>Embalagem mantém o café intacto</span>
            </IconItem>
            <IconItem>
              <Clock className="clock" />
              <span>Entrega rápida e rastreada</span>
            </IconItem>
            <IconItem>
              <Mug className="mug" />
              <span>O café chega fresquinho até você</span>
            </IconItem>
          </IconsWrapper>
        </ContentWrapper>
        <img src={coffee} alt="coffe banner" />
      </IntroContainer>
      <Title>Nossos Cafés</Title>
      <CoffeeList />
    </>
  );
}
