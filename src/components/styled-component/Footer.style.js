import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Ftr = {
  Container: styled.div`
    display: flex;
    width: 100%;
    height: 250px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #dbdbdb;
    text-align: center;
  `,

  Text1: styled.div`
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 20px;

    @media ${device.tablet} {
      font-size: 12px;
    }
  `,
  Text2: styled.div`
    font-weight: 500;
  `,

  IconRow: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,

  Icon: styled.div`
    color: #958f8f;
    padding: 10px;
  `,

  Input: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #958f8f;
    padding: 5px 10px;

    @media ${device.tablet} {
      width: 80%;
      height: 40px;
    }
  `,

  Subscribe: styled.div`
    font-weight: 600;
    cursor: pointer;
    @media ${device.tablet} {
      font-size: 12px;
    }
  `,
};
