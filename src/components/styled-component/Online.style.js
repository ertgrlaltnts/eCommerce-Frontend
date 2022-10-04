import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Onl = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
  `,

  Background: styled.div`
    background-position: 50% 0%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://mageblueskytech.com/utero/media/wysiwyg/banner-41.jpg");
    width: 100%;
    height: 830.8px;
    overflow: hidden;
    margin-top: 61.6px;
    @media ${device.mobileL} {
      height: 415.4px;
    }
  `,

  TextContainer: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 60px;
  `,
  SubText: styled.div`
    color: #fff;
    font-size: 18px;
    text-align: center;
    @media ${device.mobileL} {
      font-size: 12px;
    }
  `,
  Title: styled.div`
    color: #fff;
    font-weight: bold;
    font-size: 74px;
    @media ${device.mobileL} {
      font-size: 37px;
    }
  `,
};
