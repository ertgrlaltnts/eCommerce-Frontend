import styled from "styled-components";

export const Sup = {
  Container: styled.div`
    padding: 120px 0 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  `,

  Wrapper: styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
  `,

  Block: styled.div`
    padding: 50px;
    border: 1px solid #000;
  `,

  Title: styled.div`
    font-size: 35px;
    font-weight: bold;
    letter-spacing: 0.8px;
    margin-bottom: 20px;
    text-align: center;
  `,

  InputTitle: styled.div`
    font-weight: bold;
  `,
  BlockTitle: styled.div`
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: 0.3px;
  `,

  Button: styled.button`
    width: 100%;
    height: 45px;
    background-color: #000;
    margin-top: 20px;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    border: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.9;
    }
  `,
};
