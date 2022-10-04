import styled from "styled-components";

export const Bsl = {
  Container: styled.div`
    width: 100%;
    height: auto;
    padding: 40px 0;
  `,

  TitleContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 60px 20px;
  `,

  Title: styled.div`
    display: flex;
    align-items: center;
    color: #000;
    font-size: 30px;
    font-weight: bold;
  `,
  SeeAll: styled.div`
    cursor: pointer;
    color: #000;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #666;
  `,
};
