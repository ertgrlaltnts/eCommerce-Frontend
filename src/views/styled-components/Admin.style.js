import styled from "styled-components";

export const Adm = {
  Container: styled.div``,
  Wrapper: styled.div`
    background-color: #fff;
    padding: 30px 0 50px 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 300px;
  `,
  Logo: styled.img`
    width: 100px;
    height: 100px;
  `,
  Item: styled.div`
    margin-bottom: 10px;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
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
  Items: styled.div`
    margin-bottom: 100px;
  `,
  RightWrapper: styled.div`
    padding: 100px 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
