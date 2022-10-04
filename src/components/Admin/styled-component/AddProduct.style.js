import styled from "styled-components";

export const Adp = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Input: styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #000;
    outline: none;
    box-shadow: none;
    padding: 10px;
  `,

  Button: styled.button`
    cursor: pointer;
    width: 100%;
    height: 40px;
    border: 1px solid #000;
    outline: none;
    box-shadow: none;
    padding: 10px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  `,

  DeleteButton: styled.button`
    cursor: pointer;
    width: 100%;
    height: 40px;
    border: 1px solid #ff0000;
    outline: none;
    box-shadow: none;
    padding: 10px;
    background-color: #ff0000;
    color: #fff;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    color: "#fff";
    &:hover {
      opacity: 0.7;
    }
  `,
};
