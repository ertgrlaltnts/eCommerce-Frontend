import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Crd1 = {
  Container: styled.div`
    width: 400px;
    height: 220px;
    border-radius: 10px;
    background: url("https://images.ctfassets.net/hrltx12pl8hq/6QpKgim9qMgGK8QG2a6gaC/2de28b955c0cf902004fecd1a1e62bee/sub-category-1.jpg?fit=fill&w=368&h=207");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${device.mobileL} {
      width: 200px;
      height: 110px;
      border-radius: 5px;
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
    padding: 0 20px;
  `,
  ChipItem: styled.img`
    width: 80px;
    margin-top: 5px;
    height: 50px;

    @media ${device.mobileL} {
      width: 40px;
      margin-top: 3px;
      height: 25px;
    }
  `,
  LogoItem: styled.img`
    width: 60px;
    margin-right: 10px;
    height: 60px;
    @media ${device.mobileL} {
      width: 30px;
      margin-right: 5px;
      height: 30px;
    }
  `,
  Number: styled.div`
    font-size: 20px;
    color: #fff;
    @media ${device.mobileL} {
      font-size: 12px;
    }
  `,
};
