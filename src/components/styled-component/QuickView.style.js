import styled from "styled-components";

export const Qvw = {
  Container: styled.div``,
  BigImg: styled.div`
    max-width: 100%;
    height: auto;
    display: block;
  `,

  SmallImages: styled.div``,

  SmallImg: styled.img`
    max-width: 100%;
    height: auto;
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
  `,
  Right: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Name: styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  `,
  Price: styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  `,
  Subtitle: styled.div`
    margin-bottom: 20px;
  `,
  Amount: styled.div`
    margin-bottom: 20px;
  `,
  CartBtn: styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    text-align: center;
    margin-bottom: 10px;
    height: 40px;
    width: 100%;
    color: #fff;
    padding: 1rem;
    transition: all 0.3s ease-out;
    letter-spacing: 0.7px;
    &:hover {
      color: #000;
      background-color: #fff;
    }
  `,

  FavouriteBtn: styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #000;
    text-align: center;
    height: 40px;
    width: 100%;
    color: #fff;
    padding: 1rem;
    transition: all 0.3s ease-out;
    letter-spacing: 0.7px;
    &:hover {
      color: #fff;
      background-color: #ee0404;
    }
  `,

  SimilarProducts: styled.div`
    margin-top: 20px;
    margin-bottom: 60px;
  `,

  SimilarText: styled.div`
    padding: 40px 0;
    font-size: 20px;
    font-weight: bold;
  `,
};
