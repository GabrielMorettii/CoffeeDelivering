import { Container } from "./styles";

export default function TitleWrapper({ children, title, subtitle, imgColor }) {
  return (
    <Container imgColor={imgColor}>
      {children}
      <div className="content">
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </Container>
  );
}
