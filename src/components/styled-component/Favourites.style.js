import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Fvr = {
  Container: styled.div``,
  Block: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 10px;
    margin-bottom: 20px;

    @media ${device.tablet} {
      flex-direction: column;
    }
  `,
  ImageContainer: styled.div`
    width: 125px;
    height: 125px;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `,
  Mid: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Item: styled.div`
    font-size: 18px;
    font-weight: bold;

    @media ${device.tablet} {
      font-size: 12px;
    }
  `,
  Delete: styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
  `,
  DeleteText: styled.div`
    margin-left: 5px;
    margin-right: 15px;
    @media ${device.tablet} {
      font-size: 12px;
    }
  `,

  DeleteIcon: styled.div`
    color: #e41212;
    font-size: 16px;
    margin-top: 5px;
  `,

  See: styled.div`
    font-size: 16px;
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
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    @media ${device.tablet} {
      font-size: 12px;
    }
  `,
};
