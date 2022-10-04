import styled from "styled-components";

export const Lgn = {
  Container: styled.div`
    padding: 50px 50px 10px 50px;
  `,

  Title: styled.div``,
  Button: styled.button`
    width: 100%;
    height: 45px;
    background-color: #000;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    border: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.9;
    }
  `,

  Yet: styled.div`
    text-align: center;
  `,

  Span: styled.span`
    font-weight: bold;
    cursor: pointer;
  `,
};
