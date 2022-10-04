import styled from "styled-components";

export const Sdw = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  Tabs: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    border-bottom: 0.2px solid #fff;
    padding-bottom: 2px;
    margin-bottom: 10px;
    color: #fff;
  `,
  LogoContainer: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  `,

  Logo: styled.img`
    width: auto;
    height: 50px;
    margin: 0;
    object-fit: contain;
    cursor: pointer;
  `,

  TabText: styled.div`
    margin-left: 10px;
  `,
};
