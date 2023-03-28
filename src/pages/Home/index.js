import Header from "../../components/Header";

import whiteCart from "../../assets/images/icons/cart-white.svg";
import box from "../../assets/images/icons/box.svg";
import clock from "../../assets/images/icons/clock.svg";
import mug from "../../assets/images/icons/mug.svg";
import coffee from "../../assets/images/coffee.svg";

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
              <img src={whiteCart} alt="Cart" className="cart" />
              <span>Compra simples e segura</span>
            </IconItem>
            <IconItem>
              <img src={box} alt="Box" className="box" />
              <span>Embalagem mantém o café intacto</span>
            </IconItem>
            <IconItem>
              <img src={clock} alt="Clock" className="clock" />
              <span>Entrega rápida e rastreada</span>
            </IconItem>
            <IconItem>
              <img src={mug} alt="Mug" className="mug" />
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
