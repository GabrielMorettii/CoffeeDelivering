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

    svg {
      height: 22px;
      fill: ${({ theme }) => theme.colors.brand.yellow_dark};
      transition: all 0.1s ease-in;

      &:hover {
        opacity: 0.8;
      }
    }
  }
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
