import styled from "styled-components";

export const Epr = {
  Container: styled.div`
    width: 100%;
  `,
  Card: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Block: styled.div`
    height: 200px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 20px 0;
  `,
  Image: styled.img`
    width: 100px;
    height: 100px;
  `,
  Title: styled.div`
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;
    position: relative;
    color: #000;
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
