import styled from "styled-components";

export const Cnt = {
  Container: styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    height: 30px;
    border: 1px solid #999;
  `,

  Item: styled.div`
    cursor: pointer;
    color: #999;
    padding-top: 5px;
  `,

  Counter: styled.div``,
};
