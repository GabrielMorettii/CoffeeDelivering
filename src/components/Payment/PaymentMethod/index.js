import { Container } from "./styles";

export default function PaymentMethod({
  children,
  name,
  onSelectPayment,
  selectedPayment,
}) {
  return (
    <Container
      onClick={() => onSelectPayment(name)}
      className={selectedPayment === name ? "active" : ""}
    >
      {children}
      <span>{name}</span>
    </Container>
  );
}
