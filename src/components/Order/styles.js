import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  > img {
    height: 64px;
  }

  > span {
    align-self: flex-start;
    justify-self: flex-end;
    font-weight: 700;
    margin-left: 30px;
  }
`;

export const ContentWrapper = styled.div`
  width: 171px;

  p {
    color: ${({ theme }) => theme.colors.base.subtitle};
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    div:first-child {
      height: 32px;
    }
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${({ theme }) => theme.colors.base.button};
  border-radius: 6px;
  padding: 8px;

  transition: all 0.1s ease-in;

  svg {
    height: 16px;
    fill: ${({ theme }) => theme.colors.brand.purple};
  }

  span {
    text-transform: uppercase;
    font-size: 12px;
  }

  &:hover{
    cursor: pointer;
    background: ${({ theme }) => theme.colors.base.hover};
  }
`;
