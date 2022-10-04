import styled from "styled-components";

export const Crs = {
  Container: styled.div`
    padding: 30px 0;
    margin: 0 20px;
    border-bottom: 0.5px solid rgba(218, 223, 225);
  `,

  Item: styled.div`
    display: block;
    position: relative;
  `,

  Img: styled.img`
    width: 300px;
    height: 150px;
    object-fit: contain;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  `,
};
