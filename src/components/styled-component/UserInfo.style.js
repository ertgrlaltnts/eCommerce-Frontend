import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Uif = {
  Container: styled.div`
    padding: 20px;
  `,
  InputBox: styled.div`
    margin-top: 15px;
  `,
  Input: styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #d9d9d9;
    outline: none;
    box-shadow: none;
    padding: 10px;
  `,
  SmallInput: styled.input`
    width: 90%;
    height: 40px;
    border: 1px solid #d9d9d9;
    outline: none;
    box-shadow: none;
    padding: 10px;
    @media ${device.mobileL} {
      margin-bottom: 8px;
    }
  `,
  InputName: styled.div`
    margin-bottom: 3px;
    @media ${device.mobileL} {
      font-size: 12px;
    }
  `,
  InfoRow: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    @media ${device.mobileL} {
      flex-direction: column;
    }
  `,
  Select: styled.div``,
  Cvv: styled.div``,
  Button: styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    text-align: center;
    height: 40px;
    width: 100%;
    color: #fff;
    padding: 1rem;
    font-weight: bold;
    margin-top: 30px;
  `,
  Wrapper: styled.div`
    width: 100%;
  `,

  Change: styled.div`
    cursor: pointer;
    width: 100px;
    margin-top: 10px;
    font-weight: bold;
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
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `,
};
