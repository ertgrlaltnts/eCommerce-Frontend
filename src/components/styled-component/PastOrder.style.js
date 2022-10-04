import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Por = {
  Container: styled.div``,
  Block: styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    margin: 10px 60px;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    border-radius: 10px;

    @media ${device.tablet} {
      padding: 10px 20px;
      margin: 10px;
    }
  `,
  Left: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  Text: styled.div`
    margin-left: 10px;

    @media ${device.tablet} {
      font-size: 12px;
    }
  `,
  Mid: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  Rigth: styled.div``,
  Examine: styled.div`
    cursor: pointer;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #000;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
      text-align: center;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
      font-weight: bold;
    }

    @media ${device.tablet} {
      font-size: 12px;
    }
  `,

  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
};
