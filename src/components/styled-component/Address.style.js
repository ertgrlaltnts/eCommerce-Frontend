import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Adr = {
  Container: styled.div``,
  Card: styled.div`
    width: 250px;
    height: 150px;
    border-radius: 5px;
    background: url("https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?w=2000");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media ${device.tablet} {
      width: 125px;
      height: 75px;
      border-radius: 2.5px;
    }
  `,
  Top: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 45px;

    @media ${device.tablet} {
      font-size: 22px;
    }
  `,

  Item: styled.img``,
  Text: styled.div`
    font-size: 15px;
    color: #000;
  `,

  Create: styled.div`
    width: 250px;
    height: 150px;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: dashed 2px #d9d9d9;
    @media ${device.tablet} {
      width: 125px;
      height: 75px;
      border-radius: 2.5px;
    }
  `,

  Title: styled.div`
    text-align: center;
    margin-top: 5px;
    @media ${device.tablet} {
      font-size: 12px;
    }
  `,

  Block: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};
