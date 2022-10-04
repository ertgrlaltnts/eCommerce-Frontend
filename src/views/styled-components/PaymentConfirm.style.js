import styled from "styled-components";

export const Pcf = {
  Container: styled.div`
    padding: 130px 30px 50px 30px;
  `,

  Left: styled.div``,

  Right: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
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

  Tabs: styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 40px 15px 40px;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  `,

  Tab: styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    background-color: ${({ active }) => (active === true ? "#fafafa" : "#fff")};
    border-bottom: ${({ active }) =>
      active === true ? "3px solid #000" : "1px solid #d9d9d9"};
    cursor: pointer;
  `,

  TabContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
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

  AddressContainer: styled.div`
    padding-bottom: 40px;
  `,
  AddressCard: styled.div`
    width: 250px;
    height: 150px;
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
  AddressTop: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 45px;
  `,

  AddressItem: styled.img``,
  AddressText: styled.div`
    font-size: 15px;
    color: #000;
  `,

  AddressCreate: styled.div`
    width: 250px;
    height: 150px;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: dashed 2px #d9d9d9;
  `,

  AddressTitle: styled.div`
    text-align: center;
    margin-top: 5px;
    margin-bottom: 10px;
  `,

  AddressBlock: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  CardContainer: styled.div`
    width: 100%;
    padding-bottom: 40px;
  `,
  CardCard: styled.div`
    width: 200px;
    height: 110px;
    border-radius: 5px;
    background: url("https://images.ctfassets.net/hrltx12pl8hq/6QpKgim9qMgGK8QG2a6gaC/2de28b955c0cf902004fecd1a1e62bee/sub-category-1.jpg?fit=fill&w=368&h=207");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  `,
  CardTop: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  CardMid: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  CardBot: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  `,
  CardItem: styled.img`
    width: 30px;
    height: 30px;
  `,

  CardItemChip: styled.img`
    width: 40px;
    height: 25px;
  `,

  CardNumber: styled.div`
    font-size: 10px;
    color: #fff;
  `,

  CardCreate: styled.div`
    width: 200px;
    height: 110px;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: dashed 2px #d9d9d9;
    font-size: 25px;
    font-weight: bold;
    color: #d9d9d9;
  `,

  CardTitle: styled.div`
    text-align: center;
    margin-top: 5px;
    margin-bottom: 10px;
  `,

  CardBlock: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};
