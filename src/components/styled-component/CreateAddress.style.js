import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Cad = {
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
    @media ${device.tablet} {
      margin-bottom: 5px;
    }
  `,
  InputName: styled.div``,
  InfoRow: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    @media ${device.tablet} {
      flex-direction: column;
    }
  `,
  Select: styled.div`
    @media ${device.tablet} {
      width: 100%;
    }
  `,
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
};
