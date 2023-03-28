import styled from "styled-components";

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 56px;
  height: 544px;

  .content {
    h1 {
      font-size: 48px;
      font-weight: 800;
    }

    p {
      color: ${({ theme }) => theme.colors.base.subtitle};
      font-size: 20px;
      margin-top: 16px;
    }

    .intro-items {
      margin-top: 66px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 40px;
      row-gap: 20px;

      .intro-item {
        display: flex;
        align-items: center;
        gap: 12px;
        color: ${({ theme }) => theme.colors.base.text};

        img {
          width: 32px;
          padding: 8px;
          border-radius: 50%;
        }
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
    }
  }
`;

export const Title = styled.h1`
  margin-top: 32px;
  margin-bottom: 54px;
`;
