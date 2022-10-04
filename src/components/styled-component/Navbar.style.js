import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Nbr = {
  Container: styled.div`
    height: ${({ height }) => height};
    width: 100%;
    position: fixed;
    z-index: 999;
    transition: all 0.3s ease-out;
    padding: 10px 0;
    margin: 0;
    background-color: ${({ color }) => color};
    @media ${device.tablet} {
      display: none;
    }
  `,

  Wrapper: styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  `,

  ItemContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,

  TabsContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-left: 120px;
  `,

  Item: styled.div`
    padding: 7.5px 20px;
    cursor: pointer;
    color: ${({ color }) => color};
    height: 100%;
  `,

  Logo: styled.img`
    width: auto;
    height: 70px;
    margin: 0;
    object-fit: contain;
    cursor: pointer;
  `,

  LogoContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 7px;
  `,
};
