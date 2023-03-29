import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 102px;
  align-items: center;
  justify-content: center;

  margin-top: 80px;

  > img {
    align-self: flex-end;
  }

  @media (max-width: 1096px) {
    flex-direction: column;

    > img {
      align-self: center;
      
      margin-bottom: 80px;
    }
  }

  @media (max-width: 460px) {
    > img {
      width: 80vw;
    }
  }
`;

export const ContentWrapper = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.brand.yellow_dark};
    font-weight: 800;
    font-size: 32px;

    margin-bottom: 4px;
  }

  > p {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.base.subtitle};
    margin-bottom: 40px;
  }

  .border-wrapper {
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    padding: 1px;

    border-radius: 6px 36px;
  }
`;

export const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background: white;
  border-radius: 6px 36px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  svg {
    width: 32px;
    border-radius: 50%;
    padding: 8px;

    fill: white;
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.base.text};
    font-size: 16px;
  }

  .location svg {
    background-color: ${({ theme }) => theme.colors.brand.purple};
  }

  .time svg {
    background-color: ${({ theme }) => theme.colors.brand.yellow};
  }

  .payment svg {
    background-color: ${({ theme }) => theme.colors.brand.yellow_dark};
  }
`;
