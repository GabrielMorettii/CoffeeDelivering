import Header from "../../components/Header";

import whiteCart from "../../assets/images/icons/cart-white.svg";
import box from "../../assets/images/icons/box.svg";
import clock from "../../assets/images/icons/clock.svg";
import mug from "../../assets/images/icons/mug.svg";
import coffee from "../../assets/images/coffee.svg";

import { Intro, Title } from "./styles";
import CoffeeList from "../../components/CoffeeList";

export default function Home() {
  return (
    <>
      <Header />
      <Intro>
        <div className="content">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="intro-items">
            <div className="intro-item">
              <img src={whiteCart} alt="Cart" className="cart" />
              <span>Compra simples e segura</span>
            </div>
            <div className="intro-item">
              <img src={box} alt="Box"  className="box"/>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="intro-item">
              <img src={clock} alt="Clock" className="clock" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="intro-item">
              <img src={mug} alt="Mug" className="mug" />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <img src={coffee} alt="coffe banner" />
      </Intro>
      <Title>Nossos Cafés</Title>
      <CoffeeList />
    </>
  );
}
