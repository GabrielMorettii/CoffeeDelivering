import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 32px;

  margin-top: 40px;

  > div h4 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.base.subtitle};
    margin-bottom: 15px;
  }

  @media (max-width: 1190px) {
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: scroll;
  }
`;

export const CompleteOrderWrapper = styled.div`
  width: 640px;
  flex-grow: 1;

  > div + div {
    margin-top: 12px;
  }


  @media (max-width: 1190px) {
    min-width: 674px;
    width: 100%;

    align-items: flex-start;
  }

`;

export const RequestDetails = styled.div`
  justify-self: flex-start;

  .content {
    background: ${({ theme }) => theme.colors.base.card};
    padding: 40px;
    border-radius: 6px 44px;
  }
`;

export const Orders = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LineDivisor = styled.div`
  margin: 24px 0;
  height: 1px;

  background: ${({ theme }) => theme.colors.base.button};
`;

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .itens,
  .delivery {
    span:first-child {
      font-size: 14px;
    }
  }

  .total {
    span {
      font-size: 20px;
      ${({ theme }) => theme.colors.base.subtitle};
      font-weight: 700;
    }
  }
`;

export const ConfirmButton = styled.button`
  background: ${({ theme }) => theme.colors.brand.yellow};

  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  text-align: center;

  color: white;

  width: 368px;
  padding: 12px 0;
  border-radius: 6px;

  margin-top: 24px;

  transition: all 0.1s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.brand.yellow_dark};
  }
`;
