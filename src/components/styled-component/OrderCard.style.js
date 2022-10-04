import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Ocr = {
  Item: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
    padding: 10px 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media ${device.mobileL} {
      flex-direction: column;
    }
  `,

  ImageContainer: styled.div`
    width: 100px;
    height: 100px;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  Text: styled.div`
    font-size: 16px;
    color: gray;

    @media ${device.tablet} {
      font-size: 12px;
    }
  `,

  BottomArea: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 40px;
  `,

  Block: styled.div``,
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
};
