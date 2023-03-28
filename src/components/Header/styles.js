import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

   > img {
    height: 50px;
  }

  .rightside{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .location{
      background: ${({theme}) => theme.colors.brand.purple_light};
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4px;
      border-radius: 6px;
      padding: 10px;
      font-size: 14px;

      span{
        color: ${({theme}) => theme.colors.brand.purple_dark};
      }

      img {
        background: none;
      }
    }

    a{
      padding: 8px;
      background: ${({theme}) => theme.colors.brand.yellow_light};
      margin-left: 12px;
      border-radius: 6px;
    }

    .cart {
      height: 22px;
    }
  }

`;
