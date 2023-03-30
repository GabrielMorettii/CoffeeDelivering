import styled from "styled-components";

export const Container = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
  margin-bottom: 54px;

  gap: 20px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 8px;

  justify-content: center;

  flex-wrap: wrap;
`;

export const FilterLabel = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;

  padding: 6px 10px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.brand.yellow_dark};
  color: ${({ theme }) => theme.colors.brand.yellow_dark};

  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.brand.yellow_light};
  }
`;

export const Title = styled.h1`
  white-space: nowrap;
`;

export const CoffesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 42px;

  margin-bottom: 157px;

  @media (max-width: 632px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-start;
    overflow-x: scroll;
  }
`;
