import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../data/breakpoint";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Box = styled(motion.div)`
  width: 95%;
  height: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export const ImageBox = styled(motion.img)`
  max-width: 100%;
  height: auto;
  display: block;
  transition: all 0.4s ease-in-out;
`;

export const TextBox = styled(motion.div)`
  padding: 1rem;
  overflow: hidden;
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 50px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Btn = styled(motion.div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  text-align: center;
  height: 40px;
  width: 130px;
  color: #000;
  padding: 1rem;
  font-weight: bold;
  margin: 0 10px;
  transition: all 0.5s ease-out;
  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

export const LikeRow = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const LikeBtn = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 20px;
  z-index: 3;
  transition: all 0.5s ease-out;
  font-size: 24px;
  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media ${device.tablet} {
    width: 25px;
    height: 25px;
    font-size: 12px;
    margin: 5px;
  }
`;

export const Comments = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  position: relative;
  bottom: 40px;
  font-size: 18px;
  font-weight: 600;

  @media ${device.tablet} {
    font-size: 12px;
    margin-top: 50px;
  }
`;
export const Title = styled(motion.div)`
  cursor: pointer;
  display: inline-block;
  position: relative;
  color: #000;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
export const Stars = styled(motion.div)``;
export const Price = styled(motion.div)``;
