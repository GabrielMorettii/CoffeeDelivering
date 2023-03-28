import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  align-items: center;
  gap: 32px;

  margin-top: 40px;
`;

export const CompleteOrderWrapper = styled.div`
  width: 640px;

  h4 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.base.subtitle};
    margin-bottom: 15px;
  }

  > div + div {
    margin-top: 12px;
  }
`;


export const RequestDetails = styled.div``;
