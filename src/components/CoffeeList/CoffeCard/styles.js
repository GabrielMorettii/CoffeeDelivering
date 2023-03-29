import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.colors.base.card};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  > img {
    width: 120px;
    transform: translateY(-25%);
  }

  h4 {
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.base.subtitle};
  }

  p {
    padding: 0 20px;
    color: ${({ theme }) => theme.colors.base.label};
    font-size: 14px;
    text-align: center;

    margin-top: 8px;
  }
`;

export const LabelsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;

  .coffee-label {
    background: ${({ theme }) => theme.colors.brand.yellow_light};
    color: ${({ theme }) => theme.colors.brand.yellow_dark};
    padding: 4px 8px;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
  }
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  gap: 23px;

  .wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 118px;
  }

  h5 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.base.text};
  }
`;

export const CartPurchaseButton = styled.button`
  background: ${({ theme }) => theme.colors.brand.purple_dark};
  padding: 8px;
  border-radius: 6px;

  svg {
    height: 18px;
    fill: white;
  }

  &:hover {
    transition: all 0.1s ease-in;
    background: ${({ theme }) => theme.colors.brand.purple};
  }
`;
