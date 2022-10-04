import styled from "styled-components";
import { device } from "../../data/breakpoint";

export const Prs = {
  Grid: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  `,
  Dots: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    @media ${device.mobileL} {
      margin-top: 10px;
      padding: 0;
    }
  `,

  Input: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #958f8f;
    padding: 5px 10px;
    width: 200px;
    height: 45px;
  `,

  TopSetting: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-right: 12px;

    @media ${device.mobileL} {
      flex-direction: column;
      align-items: center;
      margin-right: 0;
    }
  `,

  Subscribe: styled.div`
    font-weight: 600;
    cursor: pointer;
    padding-top: 5px;
  `,
};
