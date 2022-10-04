import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Hm = {
  Container: styled.div`
    width: 100%;
    overflow-x: hidden;
    display: flex;
    height: auto;
    padding-top: 100px;
  `,

  Banner: styled.div`
    background: url(${({ url }) => url});
    width: 100%;
    min-height: 700px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;

    @media ${device.tablet} {
      min-height: 400px;
      background-size: contain;
    }
  `,

  BannerContainer: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    text-align: center;
    padding-bottom: 50px;
  `,
  BannerText: styled.div`
    color: #fff;
    font-size: ${({ size }) => size};
    font-weight: bold;
    font-size: 25px;
    @media ${device.tablet} {
      font-size: 18px;
    }
  `,

  SmallBanner: styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    position: relative;
    margin-top: 20px;

    @media ${device.mobileL} {
      height: 200px;
    }
  `,

  SmallImg: styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
  `,
  SmallTexts: styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    z-index: 1;
  `,
  TopText: styled.div`
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1px;
    @media ${device.mobileL} {
      font-size: 10px;
    }
  `,
  BottomText: styled.div`
    font-size: 35px;
    letter-spacing: 1px;
    font-weight: bold;
    @media ${device.mobileL} {
      font-size: 18px;
    }
  `,

  TextView: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
  `,
  BigText: styled.div`
    font-size: 1.6rem;
    letter-spacing: 0.8px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;

    @media ${device.tablet} {
      font-size: 1rem;
    }
  `,
  SmallText: styled.div`
    @media ${device.tablet} {
      font-size: 12px;
    }
  `,
};
