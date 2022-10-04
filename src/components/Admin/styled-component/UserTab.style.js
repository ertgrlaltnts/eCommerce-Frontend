import styled from "styled-components";

export const Utb = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  `,
  Image: styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
  `,
  Name: styled.div`
    font-size: 23px;
    font-weight: bold;
    margin-top: 10px;
  `,
  Text: styled.div`
    text-align: center;
    font-size: 16px;
  `,

  TextAddress: styled.div`
    font-size: 16px;
  `,
  Block: styled.div`
    margin-top: 10px;
    padding: 30px 0;
    width: 100vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  `,

  AddressName: styled.div`
    text-align: center;
    font-size: 23px;
    font-weight: bold;
    margin-top: 10px;
  `,

  Card: styled.div`
    width: 150px;
    height: 100px;
    border-radius: 5px;
    background: url("https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?w=2000");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `,
  Top: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 45px;
  `,

  Title: styled.div`
    text-align: center;
    margin-top: 5px;
  `,

  BlockAddress: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  `,

  DeleteButton: styled.div`
    cursor: pointer;
    background-color: #ff0000;
    color: #fff;
    border-radius: 3px;
    padding: 5px 0;
    text-align: center;
    font-weight: bold;
    margin: 20px 40px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  `,
};
