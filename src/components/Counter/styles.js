import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 38px;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.base.button};

  span {
    color: ${({ theme }) => theme.colors.base.title};
  }

  svg {
    width: 14px;
    cursor: pointer;
    user-select: none;

    transition: all 0.1s ease-in;

    fill: ${({ theme }) => theme.colors.brand.purple_dark};

    &:hover {
      fill: ${({ theme }) => theme.colors.brand.purple};
    }
  }
`;