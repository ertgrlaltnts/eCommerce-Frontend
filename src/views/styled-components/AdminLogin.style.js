import styled from "styled-components";

export const Alg = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    height: 100vh;
  `,

  Form: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Input: styled.input`
    width: 250px;
    height: 40px;
    margin-top: 20px;
    outline: none;
    text-align: center;
    font-weight: bold;
    border-radius: 10px;
    border: none;
  `,
  Button: styled.button`
    width: 250px;
    height: 40px;
    margin-top: 20px;
    border-radius: 10px;
    outline: none;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border: none;

    &:hover {
      opacity: 0.7;
    }
  `,
  Logo: styled.img`
    width: 100px;
    height: 100px;
  `,
};
