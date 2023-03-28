import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;

  svg {
    height: 22px;
    fill: ${({ theme, imgColor }) => theme.colors.brand[imgColor] || "black"};
  }

  .content {
    p {
      color: ${({ theme }) => theme.colors.base.subtitle};
    }

    span {
      font-size: 14px;
    }
  }
`;
