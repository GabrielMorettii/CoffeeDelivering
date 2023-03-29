import { ReactComponent as DolarSign } from "../../assets/images/icons/currenc-dollar-regular.svg";
import { ReactComponent as CreditCard } from "../../assets/images/icons/credit-card-regular.svg";
import { ReactComponent as Bank } from "../../assets/images/icons/bank-regular.svg";
import { ReactComponent as Money } from "../../assets/images/icons/money-regular.svg";

import TitleWrapper from "../TitleWrapper";

import { Container, PaymentOptions } from "./styles";
import { forwardRef, useImperativeHandle, useState } from "react";
import PaymentMethod from "./PaymentMethod";

const Payment = forwardRef((_, ref) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  useImperativeHandle(
    ref,
    () => ({
      paymentMethod,
    }),
    [paymentMethod]
  );

  return (
    <Container>
      <TitleWrapper
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        imgColor="purple"
      >
        <DolarSign />
      </TitleWrapper>
      <PaymentOptions>
        <PaymentMethod
          name="Cartão de crédito"
          onSelectPayment={setPaymentMethod}
          selectedPayment={paymentMethod}
        >
          <CreditCard />
        </PaymentMethod>
        <PaymentMethod
          name="Cartão de débito"
          onSelectPayment={setPaymentMethod}
          selectedPayment={paymentMethod}
        >
          <Bank />
        </PaymentMethod>
        <PaymentMethod
          name="Dinheiro"
          onSelectPayment={setPaymentMethod}
          selectedPayment={paymentMethod}
        >
          <Money />
        </PaymentMethod>
      </PaymentOptions>
    </Container>
  );
});

export default Payment;
