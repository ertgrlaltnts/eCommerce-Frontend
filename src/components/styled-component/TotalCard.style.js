import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Ttc = {
  Container: styled.div``,
  Card: styled.div`
    width: 200px;
    height: 110px;
    border-radius: 5px;
    background: url("https://images.ctfassets.net/hrltx12pl8hq/6QpKgim9qMgGK8QG2a6gaC/2de28b955c0cf902004fecd1a1e62bee/sub-category-1.jpg?fit=fill&w=368&h=207");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    @media ${device.laptop} {
      width: 150px;
      height: 80px;
      border-radius: 3px;
    }
  `,
  Top: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  Mid: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Bot: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  `,
  Item: styled.img`
    width: 30px;
    height: 30px;

    @media ${device.laptop} {
      width: 20px;
      height: 20px;
    }
  `,

  ItemChip: styled.img`
    width: 40px;
    height: 25px;

    @media ${device.laptop} {
      width: 30px;
      height: 20px;
    }
  `,

  Number: styled.div`
    font-size: 10px;
    color: #fff;

    @media ${device.laptop} {
      font-size: 8px;
    }
  `,

  Create: styled.div`
    width: 200px;
    height: 110px;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: dashed 2px #d9d9d9;
    font-size: 25px;
    font-weight: bold;
    color: #d9d9d9;
    @media ${device.laptop} {
      width: 150px;
      height: 80px;
      border-radius: 3px;
      font-size: 16px;
    }
  `,

  Title: styled.div`
    text-align: center;
    margin-top: 5px;
  `,

  Block: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};
