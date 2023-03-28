import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 16px;

  border-radius: 6px;
  width: 178px;
  
  transition: all 0.2s ease-in;
  
  background: ${({ theme }) => theme.colors.base.button};
  border: 1px solid ${({ theme }) => theme.colors.base.button};

  span {
    font-size: 12px;
    text-transform: uppercase;
  }

  svg {
    fill: ${({ theme }) => theme.colors.brand.purple};
    height: 16px;
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.base.hover};
  }

  &.active{
    border-color: ${({ theme }) => theme.colors.brand.purple};
  }
`;
