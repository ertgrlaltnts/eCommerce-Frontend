import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Crd = {
  Container: styled.div``,
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
  CvvInput: styled.input`
    width: 150px;
    height: 40px;
    border: 1px solid #d9d9d9;
    outline: none;
    box-shadow: none;
    padding: 10px;
  `,
  InputName: styled.div`
    @media ${device.tablet} {
      font-size: 12px;
    }
  `,
  InfoRow: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding: 0 50px;
    @media ${device.tablet} {
      flex-direction: column;
    }
  `,
  Select: styled.div`
    @media ${device.tablet} {
      margin-bottom: 5px;
    }
  `,
  Cvv: styled.div`
    @media ${device.tablet} {
      margin-bottom: 5px;
    }
  `,
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
  CardContainer: styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
};
