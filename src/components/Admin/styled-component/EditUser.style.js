import styled from "styled-components";

export const Eus = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    width: 100vh;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin-bottom: 20px;
    padding: 20px 40px;
  `,

  Block: styled.div`
    width: 100%;
  `,

  Button: styled.div`
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

  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  Text: styled.div`
    font-size: 16px;
    margin-left: 5px;
  `,

  Settings: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  `,
  SettingItem: styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    cursor: pointer;
  `,

  Input: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    width: 200px;
    height: 45px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin-bottom: 10px;
  `,

  Subscribe: styled.div`
    font-weight: 600;
    cursor: pointer;
    padding-top: 5px;
  `,

  Empty: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vh;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    margin-top: 100px;
  `,

  EmptyText: styled.div`
    font-size: 30px;
  `,
};
