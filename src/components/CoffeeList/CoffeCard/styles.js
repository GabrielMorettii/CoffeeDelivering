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

  .labels {
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

  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 24px;

    .wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    h5 {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.base.text};
    }

    button {
      background: ${({ theme }) => theme.colors.brand.purple_dark};
      padding: 8px;
      border-radius: 6px;

      img {
        height: 18px;
      }
    }
  }
`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.base.button};

  span {
    color: ${({ theme }) => theme.colors.base.title};
  }

  img {
    width: 14px;
    cursor: pointer;
  }
`;
