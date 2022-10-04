import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Drw = {
  Item: styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    padding: 10px;

    @media ${device.mobileL} {
      padding: 8px;
    }
  `,

  ImageContainer: styled.div`
    width: 125px;
    height: 125px;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  TextContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
    height: 100%;

    @media ${device.mobileM} {
      padding: 0 5px;
    }
  `,

  ItemTexts: styled.div``,

  Buttons: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3px;
  `,

  ItemName: styled.div`
    font-size: 16px;
    margin: 0;
    @media ${device.mobileL} {
      font-size: 12px;
    }
  `,
  ItemText: styled.div`
    font-size: 16px;
    color: gray;
    margin: 0;
    @media ${device.mobileL} {
      font-size: 12px;
    }
  `,

  Price: styled.div`
    display: flex;
    float: right;
    font-size: 20px;
    @media ${device.tablet} {
      font-size: 16px;
    }
    @media ${device.mobileL} {
      font-size: 12px;
    }
  `,

  BottomArea: styled.div`
    width: 100%;
    height: 175px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
  `,
  ButtonArea: styled.div`
    width: 100%;
    height: 100px;
    padding: 10px 20px;
  `,
  Button: styled.button`
    width: 100%;
    height: 65px;
    background-color: black;
    cursor: pointer;
    color: white;
    font-weight: 600;
    border: none;

    @media ${device.tablet} {
      height: 35px;
      font-size: 12px;
    }
  `,
  PriceContainer: styled.div`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  `,
  PriceTitle: styled.div`
    font-size: 18px;
    font-weight: bold;

    @media ${device.tablet} {
      font-size: 12px;
    }
  `,
  TotalCount: styled.div`
    font-size: 18px;
    font-weight: bold;

    @media ${device.tablet} {
      font-size: 12px;
    }
  `,

  EmptyContainer: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  EmptyText: styled.div`
    color: gray;
  `,

  Counter: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    @media ${device.tablet} {
      font-size: 16px;
    }
    @media ${device.mobileL} {
      font-size: 12px;
    }
  `,

  CounterAmount: styled.div`
    padding: 0 10px;

    @media ${device.tablet} {
      padding: 0 3px;
    }
  `,

  ItemArea: styled.div`
    padding-bottom: 160px;
  `,
};
