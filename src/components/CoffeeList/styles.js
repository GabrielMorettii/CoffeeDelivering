import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 42px;

  margin-bottom: 157px;

  @media (max-width: 1740px) {
    justify-content: space-evenly;
  }

  @media (max-width: 632px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-start;
    overflow-x: scroll;
  }
`