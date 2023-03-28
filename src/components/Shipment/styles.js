import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  width: 100%;
  height: 372px;
  padding: 40px;
  border-radius: 6px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;

  input,
  .optional-input {
    background: ${({ theme }) => theme.colors.base.input};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.base.button};
  }
`;

export const Input = styled.input`
  padding: 12px;

  &[placeholder="CEP"] {
    align-self: flex-start;
  }

  &[placeholder="Cidade"] {
    width: 276px;
  }

  &[placeholder="UF"] {
    width: 60px;
  }

  &:active, &:focus {
    border: 1px solid ${({ theme }) => theme.colors.brand.yellow_dark}
  }
`;

export const OptionalInputContainer = styled.div`
  display: flex;
  align-items: center;

  flex-grow: 1;
  padding: 12px;

  input {
    border: none;
    flex-grow: 1;
    padding-right: 12px;
  }

  span {
    font-size: 12px;
    width: 46px;
    color: ${({ theme }) => theme.colors.base.label};
    font-style: italic;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 12px;
`;
