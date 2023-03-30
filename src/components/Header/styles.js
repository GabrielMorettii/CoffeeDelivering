import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  a img {
    height: 50px;
  }
`;

export const RightTabSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    padding: 8px;
    background: ${({ theme }) => theme.colors.brand.yellow_light};
    margin-left: 12px;
    border-radius: 6px;
    position: relative;

    transition: all 0.15s ease-in;

    svg {
      height: 22px;
      fill: ${({ theme }) => theme.colors.brand.yellow_dark};
    }

    &:hover {
      transform: scale(1.09);
    }
  }
`;

export const Counter = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  right: -8.35px;
  top: -8px;

  background: ${({ theme }) => theme.colors.brand.yellow_dark};
  border-radius: 50%;
  color: white;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  padding: 2px;
`;

export const Location = styled.div`
  background: ${({ theme }) => theme.colors.brand.purple_light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  padding: 10px;
  font-size: 14px;

  span {
    color: ${({ theme }) => theme.colors.brand.purple_dark};
  }

  svg {
    height: 22px;
    fill: ${({ theme }) => theme.colors.brand.purple};
  }
`;
