import styled from "styled-components";

export const Usr = {
  Left: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  ImageContainer: styled.div`
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px 0;
  `,
  UserContainer: styled.div`
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  `,
  Image: styled.img`
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 5px;
  `,
  Name: styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 5px;
    text-align: center;
  `,
  Tab: styled.div`
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    padding: 5px 0;
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

  Right: styled.div`
    padding: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `,
};
