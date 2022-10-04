import styled from "styled-components";

export const Pym = {
  Container: styled.div`
    padding: 130px 30px 50px 30px;
  `,

  Left: styled.div``,

  Card: styled.div``,

  Right: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Button: styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    text-align: center;
    padding: 10px 0;
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  `,
  Summary: styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 60px;
    border: 1px solid #d9d9d9;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  `,

  RowText: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  BigText: styled.div`
    font-size: 20px;
    font-weight: bold;
  `,
  Text: styled.div`
    font-weight: bold;
  `,

  Total: styled.div`
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
  `,

  Item: styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    margin: 0 40px 15px 40px;
    align-items: center;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  `,

  ImageContainer: styled.div`
    width: 75px;
    height: 75px;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  TextContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 50px;
  `,

  ItemName: styled.div`
    font-size: 16px;
    margin: 0;
    width: 33.33%;
  `,

  Price: styled.div`
    display: flex;

    font-size: 16px;
    width: 33.33%;
    align-items: center;
    justify-content: center;
  `,

  Counter: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    width: 33.33%;
    text-align: center;
  `,

  CounterAmount: styled.div`
    padding: 0 10px;
  `,
};
