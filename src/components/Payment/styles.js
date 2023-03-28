import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  width: 100%;
  height: 207px;
  padding: 40px;
  border-radius: 6px;
`;

export const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
`;
