import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 56px;
  height: 544px;

  > img {
    @media (max-width: 1550px) {
      display: none;
    }
  }
`;

export const ContentWrapper = styled.div`
  h1 {
    font-size: 48px;
    font-weight: 800;

    @media (max-width: 1338px) {
      font-size: 2.5rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-size: 20px;
    margin-top: 16px;
  }
`;

export const IconsWrapper = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 20px;
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.base.text};

  svg {
    width: 32px;
    padding: 8px;
    border-radius: 50%;
    fill: white;
  }

  .cart {
    background: ${({ theme }) => theme.colors.brand.yellow_dark};
  }

  .box {
    background: ${({ theme }) => theme.colors.base.text};
  }

  .clock {
    background: ${({ theme }) => theme.colors.brand.yellow};
  }

  .mug {
    background: ${({ theme }) => theme.colors.brand.purple};
  }
`;